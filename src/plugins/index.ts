import type { App } from "vue";

import { pinia } from "@/plugins/pinia.ts";
import router from "@/router";
import uiPlugin from "@nuxt/ui/vue-plugin";

export function registerPlugins(app: App): void {
  app.use(router).use(pinia).use(uiPlugin);
}
