/*
 * Copyright (C) 2023 Vilten,s.r.o. - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Viliam Tencer <vilten@vilten.sk>, 23. 02. 2023
 */
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
        },
        {
          hid: "description",
          name: "description",
          content: process.env.npm_package_description || "",
        },
      ],
    },
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: ["en", "sk"],
    defaultLocale: "sk",
    onLanguageSwitched: () => {
      setTimeout(() => {
        window.location.reload();
      }, 10);
    },
    strategy: "prefix",
    vueI18n: {
      fallbackLocale: "sk",
      silentTranslationWarn: true,
      silentFallbackWarn: true,
      messages: {
        en: require("./locales/en.json"),
        sk: require("./locales/sk.json"),
      },
    },
  },
});
