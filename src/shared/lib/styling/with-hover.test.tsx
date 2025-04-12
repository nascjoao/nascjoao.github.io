import { describe, expect, it } from "vitest";
import withHover from "./with-hover";
import { render } from "@testing-library/react";

describe("withHover", () => {
  it("should add hover styles to the component", () => {
    const MockComponent = (props: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props} />
    );

    const WrappedComponent = withHover(MockComponent);
    const { container } = render(<WrappedComponent className="test-class" />);

    expect(container.firstChild).toHaveClass("hover:bg-gray-200");
    expect(container.firstChild).toHaveClass("dark:hover:bg-gray-700");
    expect(container.firstChild).toHaveClass("cursor-pointer");
    expect(container.firstChild).toHaveClass("test-class");
  });
});
