import "./assets/main.css";
import * as Sentry from "@sentry/vue";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

Sentry.init({
  app,
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
  integrations: [],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

app.use(router);

app.mount("#app");
