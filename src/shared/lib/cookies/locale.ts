"use server";

import { COOKIE_NAME, defaultLocale } from "../../config/locale";
import { cookies } from "next/headers";
import { Locale } from "../../models";

export async function getUserLocale(): Promise<Locale> {
  return ((await cookies()).get(COOKIE_NAME)?.value as Locale) || defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}
