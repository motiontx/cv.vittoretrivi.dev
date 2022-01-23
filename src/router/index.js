import Router from "vue-router";
import Resume from "@/components/Resume";

const locales = ["en", "es"];

function getBrowserLocale() {
  const browserLocales =
    navigator.languages === undefined
      ? [navigator.language]
      : navigator.languages;

  if (!browserLocales) {
    return undefined;
  }

  return browserLocales.map((locale) => {
    return locale.trim().split(/-|_/)[0];
  })[0];
}

function setLocale(to, from, next) {
  let { locale } = to.params;
  if (locale && locales.includes(locale)) {
    next();
  } else {
    const defaultLocale = getBrowserLocale();
    defaultLocale && defaultLocale === "es"
      ? next({ path: "/es", replace: true })
      : next({ path: "/en", replace: true });
  }
}

const routes = [
  {
    name: "Resume",
    path: "/:locale?",
    component: Resume,
    beforeEnter: setLocale,
    beforeUpdate: setLocale,
  },
];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
