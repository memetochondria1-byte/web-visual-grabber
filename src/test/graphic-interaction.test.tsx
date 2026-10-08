import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useGraphicInteraction } from "@/hooks/use-graphic-interaction";

const preference = vi.hoisted(() => ({ mode: "full" }));
vi.mock("@/components/download/MotionPreference", () => ({ useMotionPreference: () => preference.mode }));

function Graphic() {
  return <div data-testid="graphic" {...useGraphicInteraction()} />;
}

describe("Decorative interaction", () => {
  it("updates ink coordinates and clears them without moving the element", () => {
    preference.mode = "full";
    render(<Graphic />);
    const element = screen.getByTestId("graphic");
    vi.spyOn(element, "getBoundingClientRect").mockReturnValue({ left: 0, top: 0, width: 200, height: 100, right: 200, bottom: 100, x: 0, y: 0, toJSON: () => ({}) });
    const move = new Event("pointermove", { bubbles: true });
    Object.assign(move, { clientX: 200, clientY: 100, pointerType: "mouse" });
    fireEvent(element, move);
    expect(element.style.getPropertyValue("--graphic-x")).toBe("6px");
    expect(element.style.getPropertyValue("--scan-position")).toBe("85px");
    expect(element.style.transform).toBe("");
    fireEvent.pointerDown(element);
    expect(element.dataset.engaged).toBe("true");
    fireEvent.pointerUp(element);
    expect(element.dataset.engaged).toBe("false");
    expect(element.style.getPropertyValue("--graphic-x")).toBe("");
  });

  it("does not engage when reduced motion is enabled", () => {
    preference.mode = "reduced";
    render(<Graphic />);
    const element = screen.getByTestId("graphic");
    fireEvent.pointerDown(element);
    expect(element.dataset.engaged).not.toBe("true");
  });
});