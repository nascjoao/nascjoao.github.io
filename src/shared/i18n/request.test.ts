import { describe, it, expect, vi, Mock } from "vitest";
import { getMessages } from "./request";
import { getUserLocale } from "../lib/cookies";

vi.mock("../lib/cookies", () => ({
  getUserLocale: vi.fn(),
}));

vi.mock("../i18n/en.json", () => ({
  default: { greeting: "Hello" },
}));

vi.mock("../i18n/pt-br.json", () => ({
  default: { greeting: "Olá" },
}));

describe("getMessages", () => {
  it("deve retornar mensagens em inglês se o locale for 'en'", async () => {
    const result = await getMessages({ locale: "en" });

    expect(result.locale).toBe("en");
    expect(result.messages).toEqual({ greeting: "Hello" });
  });

  it("deve retornar mensagens em português se o locale for 'pt-br'", async () => {
    const result = await getMessages({ locale: "pt-br" });

    expect(result.locale).toBe("pt-br");
    expect(result.messages).toEqual({ greeting: "Olá" });
  });

  it("deve chamar getUserLocale() se nenhum locale for passado", async () => {
    (getUserLocale as Mock).mockResolvedValue("en");

    const result = await getMessages({});

    expect(getUserLocale).toHaveBeenCalled();
    expect(result.locale).toBe("en");
    expect(result.messages).toEqual({ greeting: "Hello" });
  });
});
