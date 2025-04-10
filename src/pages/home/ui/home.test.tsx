import { afterEach, describe, expect, it, vi } from "vitest";
import Home from "./home";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import { setUserLocale } from "@/shared/lib/cookies";
import { en } from "@/shared/i18n";
import { flatObject } from "@/shared/lib/objects";

vi.mock(import("next-intl/server"), async (importOriginal) => ({
  ...(await importOriginal()),
  getLocale: async () => "en",
  getTranslations: vi
    .fn()
    .mockResolvedValue(vi.fn((key: string) => flatObject(en)[key])),
}));

afterEach(() => {
  cleanup();
});

vi.mock("@/shared/lib/cookies", () => ({
  setUserLocale: vi.fn(),
}));

const Component = async () => {
  return (
    <NextIntlClientProvider locale="en" messages={en}>
      {await Home()}
    </NextIntlClientProvider>
  );
};

describe("Home", () => {
  it("should render a select for language selection", async () => {
    const { getByRole } = render(await Component());
    const select = getByRole("combobox");
    expect(select).toBeInTheDocument();
  });

  it("should render two options", async () => {
    const { getByRole, getAllByRole } = render(await Component());
    fireEvent.click(getByRole("combobox"));
    expect(getAllByRole("option")).toHaveLength(2);
  });

  it("should change the preferred language when an option is selected", async () => {
    const { getByRole } = render(await Component());
    fireEvent.click(getByRole("combobox"));
    fireEvent.click(getByRole("option", { name: "🇧🇷 Português" }));
    expect(setUserLocale).toHaveBeenCalledWith("pt-br");
  });
});
