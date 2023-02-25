import SimplebarVue from "simplebar-vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(SimplebarVue);
});
