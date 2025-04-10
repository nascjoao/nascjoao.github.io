import { describe, expect, it, Mock, vi } from "vitest";
import { getUserLocale, setUserLocale } from "./locale";
import { cookies } from "next/headers";
import { COOKIE_NAME } from "../../config";

vi.mock("next/headers", () => ({
  cookies: vi.fn().mockResolvedValue({
    get: vi.fn(),
    set: vi.fn(),
  }),
}));

describe("getUserLocale", () => {
  it("should return the default locale", async () => {
    expect(await getUserLocale()).toBe("en");
  });

  it("should return the user locale", async () => {
    ((await cookies()).get as Mock).mockReturnValueOnce({
      value: "pt-br",
    });
    expect(await getUserLocale()).toBe("pt-br");
  });
});

describe("setUserLocale", () => {
  it("should set the user locale", async () => {
    await setUserLocale("pt-br");
    expect((await cookies()).set).toHaveBeenCalledWith(COOKIE_NAME, "pt-br");
  });
});
