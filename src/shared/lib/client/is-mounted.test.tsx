import { describe, expect, it, vi } from "vitest";
import useIsMounted from "./is-mounted";
import { render, renderHook } from "@testing-library/react";
import React from "react";

describe("useIsMounted", () => {
  it("should return a boolean value indicating if the component is mounted", () => {
    const { result } = renderHook(() => useIsMounted());
    expect(result.current.mounted).toBe(true);
  });

  it("should return a HOC that renders the component when mounted", () => {
    const { result } = renderHook(() => useIsMounted());
    const MockComponent = () => <div>Test</div>;
    const WrappedComponent = result.current.withClientMounted(MockComponent);
    const { container } = render(<WrappedComponent />);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveTextContent("Test");
  });

  it("should render the fallback component when not mounted", () => {
    const useEffectMock = vi
      .spyOn(React, "useEffect")
      .mockImplementation(() => {});
    const { result } = renderHook(() => useIsMounted());
    const MockComponent = () => <div>Test</div>;
    const FallbackComponent = () => <div>Fallback</div>;
    const WrappedComponent = result.current.withClientMounted(MockComponent, {
      fallback: FallbackComponent,
    });
    const { container } = render(<WrappedComponent />);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveTextContent("Fallback");
    expect(container.firstChild).not.toHaveTextContent("Test");
    useEffectMock.mockRestore();
  });

  it("should not render if fallback is not provided", () => {
    const useEffectMock = vi
      .spyOn(React, "useEffect")
      .mockImplementation(() => {});
    const { result } = renderHook(() => useIsMounted());
    const MockComponent = () => <div>Test</div>;
    const WrappedComponent = result.current.withClientMounted(MockComponent);
    const { container } = render(<WrappedComponent />);
    expect(container.firstChild).not.toBeInTheDocument();
    useEffectMock.mockRestore();
  });
});
