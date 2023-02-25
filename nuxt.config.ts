/*
 * Copyright (C) 2023 Vilten,s.r.o. - All Rights Reserved
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Viliam Tencer <vilten@vilten.sk>, 23. 02. 2023
 */
export default defineNuxtConfig({
  ssr: false,
  vite: {
    optimizeDeps: {
      exclude: ["date-fns"],
    },
  },
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
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' }
      ],
      script: [{ src: "/js/bootstrap.bundle.min.js", type: "text/javascript" }],
    },
  },
  css: [
    "@/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "@/node_modules/simplebar-vue/dist/simplebar.min.css",
    "@/node_modules/animate.css/animate.min.css",
  ],
  plugins: [
    "@/plugins/simplebar.plugin.js",
    "@/plugins/bootstrap.plugin.js",
    "@/plugins/mitt.plugin.js",
  ],
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
