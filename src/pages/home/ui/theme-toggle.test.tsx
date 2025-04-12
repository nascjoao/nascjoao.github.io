import { describe, expect, it, vi, afterEach, beforeEach } from "vitest";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import React from "react";
import ThemeToggle from "./theme-toggle";

let theme = "light";
const setThemeMock = vi.fn();

vi.mock(import("next-themes"), async (importOriginal) => {
  const original = await importOriginal();
  return {
    ...original,
    useTheme: () => ({
      ...original.useTheme(),
      theme,
      setTheme: setThemeMock,
    }),
  };
});

beforeEach(() => {
  theme = "light";
  vi.clearAllMocks();
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: query.includes("light"),
    addListener: vi.fn(),
    removeListener: vi.fn(),
  }));
});

afterEach(() => {
  cleanup();
});

function ThemeWrapper() {
  setThemeMock.mockImplementation((newTheme: string) => {
    theme = newTheme;
  });

  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
}

describe("ThemeToggle", () => {
  it("should render the Moon icon when the theme is dark", () => {
    theme = "dark";
    const { getByRole } = render(<ThemeWrapper />);
    const icon = getByRole("img", { name: "Switch to light mode" });
    expect(icon).toBeInTheDocument();
  });

  it("should render the Sun icon when the theme is light", () => {
    const { getByRole } = render(<ThemeWrapper />);
    const icon = getByRole("img", { name: "Switch to dark mode" });
    expect(icon).toBeInTheDocument();
  });

  it("should call setTheme and toggle correctly", () => {
    const { getByRole, rerender } = render(<ThemeWrapper />);
    const button = getByRole("button");

    fireEvent.click(button);
    expect(setThemeMock).toHaveBeenCalledWith("dark");

    rerender(<ThemeWrapper />);

    expect(
      getByRole("img", { name: "Switch to light mode" }),
    ).toBeInTheDocument();

    fireEvent.click(button);
    expect(setThemeMock).toHaveBeenCalledWith("light");

    rerender(<ThemeWrapper />);

    expect(
      getByRole("img", { name: "Switch to dark mode" }),
    ).toBeInTheDocument();
  });
});
