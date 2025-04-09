import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "../lib/cookies";

export async function getMessages({ locale }: { locale?: string }) {
  const finalLocale = locale || (await getUserLocale());
  return {
    locale: finalLocale,
    messages: (await import(`../i18n/${finalLocale}.json`)).default,
  };
}

export default getRequestConfig(getMessages);
