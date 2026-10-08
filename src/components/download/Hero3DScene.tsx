import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Lightformer, RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";

import annotations from "@/assets/01-pdf-annotations.png";
import home from "@/assets/02-home-and-ocr.webp";
import nova from "@/assets/07-meet-nova.png";
import rooms from "@/assets/06-live-study-rooms.png";
import bangla from "@/assets/10-bangla-explanations.png";
import simpler from "@/assets/12-simpler-explanations.png";
import exportWork from "@/assets/13-export-your-work.png";
import tools from "@/assets/14-study-tools.png";
import reading from "@/assets/05-continue-reading.webp";

const PHONE_SCREENS = [annotations, nova, bangla, home];
const SIDE_CARDS = [
  { src: rooms, x: -3.1, y: 0.15, z: -1.1, ry: 0.5, s: 0.82, speed: 1.2 },
  { src: simpler, x: 3.1, y: -0.05, z: -1.1, ry: -0.5, s: 0.82, speed: 1.4 },
  { src: tools, x: -5.0, y: -0.2, z: -2.8, ry: 0.65, s: 0.7, speed: 1.0 },
  { src: exportWork, x: 5.0, y: 0.1, z: -2.8, ry: -0.65, s: 0.7, speed: 1.1 },
  { src: reading, x: -1.65, y: 1.15, z: -2.6, ry: 0.25, s: 0.6, speed: 1.3 },
];

/** Rounded rectangle geometry with UVs that cover the whole picture. */
function roundedRectGeometry(w: number, h: number, r: number) {
  const shape = new THREE.Shape();
  const x = -w / 2;
  const y = -h / 2;
  shape.moveTo(x + r, y);
  shape.lineTo(x + w - r, y);
  shape.quadraticCurveTo(x + w, y, x + w, y + r);
  shape.lineTo(x + w, y + h - r);
  shape.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  shape.lineTo(x + r, y + h);
  shape.quadraticCurveTo(x, y + h, x, y + h - r);
  shape.lineTo(x, y + r);
  shape.quadraticCurveTo(x, y, x + r, y);
  const geo = new THREE.ShapeGeometry(shape, 10);
  const pos = geo.attributes.position;
  const uv = geo.attributes.uv;
  for (let i = 0; i < pos.count; i++) {
    uv.setXY(i, (pos.getX(i) + w / 2) / w, (pos.getY(i) + h / 2) / h);
  }
  uv.needsUpdate = true;
  return geo;
}

function Screen({ src, width, radius }: { src: string; width: number; radius: number }) {
  const texture = useTexture(src);
  const height = width * (16 / 9);
  const geo = useMemo(() => roundedRectGeometry(width, height, radius), [width, height, radius]);
  useEffect(() => {
    texture.anisotropy = 8;
    texture.needsUpdate = true;
  }, [texture]);
  return (
    <mesh geometry={geo}>
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

function Phone({ pointer }: { pointer: React.MutableRefObject<THREE.Vector2> }) {
  const group = useRef<THREE.Group>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % PHONE_SCREENS.length), 3200);
    return () => clearInterval(t);
  }, []);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const dt = Math.min(delta, 0.05);
    const k = 1 - Math.exp(-4 * dt);
    const targetY = pointer.current.x * 0.5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.12;
    const targetX = -pointer.current.y * 0.25;
    g.rotation.y += (targetY - g.rotation.y) * k;
    g.rotation.x += (targetX - g.rotation.x) * k;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.05} floatIntensity={0.6} floatingRange={[-0.08, 0.1]}>
      <group ref={group}>
        {/* body */}
        <RoundedBox args={[1.14, 2.2, 0.1]} radius={0.16} smoothness={6} castShadow>
          <meshPhysicalMaterial color="#1a1714" metalness={0.85} roughness={0.28} clearcoat={0.6} />
        </RoundedBox>
        {/* screen glass backing */}
        <mesh position={[0, 0, 0.052]}>
          <planeGeometry args={[1.06, 2.12]} />
          <meshBasicMaterial color="#0b0a09" />
        </mesh>
        <group position={[0, 0, 0.056]}>
          <Suspense fallback={null}>
            <Screen key={PHONE_SCREENS[idx]} src={PHONE_SCREENS[idx]} width={1.0} radius={0.1} />
          </Suspense>
        </group>
        {/* camera dot */}
        <mesh position={[0, 0.98, 0.058]}>
          <circleGeometry args={[0.025, 24]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
      </group>
    </Float>
  );
}

function SideCard({ card, index }: { card: (typeof SIDE_CARDS)[number]; index: number }) {
  return (
    <Float speed={card.speed} rotationIntensity={0.15} floatIntensity={0.9} floatingRange={[-0.12, 0.12]}>
      <group position={[card.x, card.y, card.z]} rotation={[0, card.ry, 0]} scale={card.s}>
        <mesh position={[0, 0, -0.012]} geometry={roundedRectGeometry(1.06, 1.06 * (16 / 9) + 0.06, 0.12)}>
          <meshStandardMaterial color="#201c18" roughness={0.5} metalness={0.4} />
        </mesh>
        <Suspense fallback={null}>
          <Screen src={card.src} width={1.0} radius={0.1} />
        </Suspense>
        <mesh visible={false}>
          <boxGeometry args={[0, 0, index]} />
        </mesh>
      </group>
    </Float>
  );
}

function Rig({ pointer, children }: { pointer: React.MutableRefObject<THREE.Vector2>; children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const { size } = useThree();
  // Scale the whole arrangement so it fits narrow screens.
  const fit = Math.min(1, Math.max(0.42, size.width / 1000));
  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    const k = 1 - Math.exp(-3 * Math.min(delta, 0.05));
    g.position.x += (-pointer.current.x * 0.25 - g.position.x) * k;
    g.position.y += (pointer.current.y * 0.12 - g.position.y) * k;
  });
  return (
    <group ref={group} scale={fit}>
      {children}
    </group>
  );
}

export default function Hero3DScene() {
  const pointer = useRef(new THREE.Vector2(0, 0));
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "100px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrap}
      className="relative h-[420px] w-full sm:h-[580px]"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        pointer.current.set(((e.clientX - r.left) / r.width) * 2 - 1, ((e.clientY - r.top) / r.height) * 2 - 1);
      }}
      onPointerLeave={() => pointer.current.set(0, 0)}
      role="img"
      aria-label="3D preview of the Protiva app on a phone, surrounded by app screens"
    >
      <Canvas
        dpr={[1, 2]}
        frameloop={visible ? "always" : "never"}
        camera={{ position: [0, 0, 7.4], fov: 38 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 5]} intensity={1.4} />
        <Environment resolution={256}>
          <Lightformer intensity={2.2} position={[0, 5, 2]} scale={[10, 4, 1]} />
          <Lightformer intensity={1.2} color="#ffd9a0" position={[-5, 1, 1]} rotation-y={Math.PI / 2} scale={[10, 3, 1]} />
          <Lightformer intensity={1} position={[5, -1, 2]} rotation-y={-Math.PI / 2} scale={[10, 3, 1]} />
        </Environment>
        <Rig pointer={pointer}>
          <Phone pointer={pointer} />
          {SIDE_CARDS.map((c, i) => (
            <SideCard key={i} card={c} index={i} />
          ))}
        </Rig>
      </Canvas>
    </div>
  );
}
