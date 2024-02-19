import i18n, { type Config } from "sveltekit-i18n";
import { dev } from "$app/environment";
import lang from "./lang.json";

export const defaultLocale = "en";

export const config: Config = {
  log: {
    level: dev ? "warn" : "error",
  },
  translations: {
    en: { lang },
    ko: { lang },
    zh: { lang },
  },
  loaders: [
    // English
    {
      locale: "en",
      key: "common",
      loader: async () => (await import("./en/common.json")).default,
    },
    // Chinese (Simplified)
    {
      locale: "zh",
      key: "common",
      loader: async () => (await import("./zh/common.json")).default,
    },
    // Korean
    {
      locale: "ko",
      key: "common",
      loader: async () => (await import("./ko/common.json")).default,
    },
  ],
};

export const {
  t,
  loading,
  locales,
  locale,
  translations,
  loadTranslations,
  addTranslations,
  setLocale,
  setRoute,
} = new i18n(config);
