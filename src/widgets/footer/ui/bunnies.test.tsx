import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Bunnies from "./bunnies";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import { en } from "@/shared/i18n";
import { act } from "react";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  cleanup();
  vi.runOnlyPendingTimers();
  vi.useRealTimers();
});

describe("Bunnies", () => {
  it("should render bunnies during Easter", () => {
    vi.setSystemTime(new Date("2025-04-20 23:59:59"));
    console.error = vi.fn();
    const { getByRole } = render(
      <NextIntlClientProvider locale="en" messages={en}>
        <Bunnies />
      </NextIntlClientProvider>,
    );
    expect(getByRole("img")).toBeInTheDocument();
  });

  it("should not render bunnies after Easter", () => {
    vi.setSystemTime(new Date("2025-04-21 00:00:00"));
    const { queryByRole } = render(
      <NextIntlClientProvider locale="en" messages={en}>
        <Bunnies />
      </NextIntlClientProvider>,
    );
    expect(queryByRole("img")).not.toBeInTheDocument();
  });

  it("should set bunnies free", async () => {
    vi.setSystemTime(new Date("2025-04-20 23:59:59"));
    const { getByRole, queryByTestId } = render(
      <NextIntlClientProvider locale="en" messages={en}>
        <Bunnies />
      </NextIntlClientProvider>,
    );
    const bunnyImage = getByRole("img");
    expect(bunnyImage).toBeInTheDocument();
    expect(queryByTestId("bunnies")).not.toBeInTheDocument();
    fireEvent.click(bunnyImage);
    expect(queryByTestId("bunnies")).toBeInTheDocument();
  });

  it("should hide bunnies after 50 seconds", () => {
    vi.setSystemTime(new Date("2025-04-20 13:59:59"));
    const { getByRole, queryByTestId } = render(
      <NextIntlClientProvider locale="en" messages={en}>
        <Bunnies />
      </NextIntlClientProvider>,
    );
    const bunnyImage = getByRole("img");
    fireEvent.click(bunnyImage);
    expect(queryByTestId("bunnies")).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(53000);
    });
    expect(queryByTestId("bunnies")).not.toBeInTheDocument();
  });

  it("should set maskImage to linear-gradient after 3 seconds", () => {
    vi.setSystemTime(new Date("2025-04-20 13:59:59"));
    const { getByRole, queryByTestId } = render(
      <NextIntlClientProvider locale="en" messages={en}>
        <Bunnies />
      </NextIntlClientProvider>,
    );
    const bunnyImage = getByRole("img");
    fireEvent.click(bunnyImage);
    expect(queryByTestId("bunnies")).toBeInTheDocument();
    act(() => {
      vi.advanceTimersByTime(10000);
    });
    expect(queryByTestId("bunnies")?.children[0]).toHaveStyle({
      maskImage: "linear-gradient(to right, black 80%, transparent 100%)",
    });
  });

  it("should ignore clicks if bunnies are already shown", () => {
    vi.setSystemTime(new Date("2025-04-20 13:59:59"));
    const { getByRole, queryByTestId } = render(
      <NextIntlClientProvider locale="en" messages={en}>
        <Bunnies />
      </NextIntlClientProvider>,
    );
    const bunnyImage = getByRole("img");
    fireEvent.click(bunnyImage);
    expect(queryByTestId("bunnies")).toBeInTheDocument();
    fireEvent.click(bunnyImage);
    expect(queryByTestId("bunnies")).toBeInTheDocument();
  });
});
