import * as Sentry from "@sentry/react-router";
Sentry.init({
  dsn: "https://a45309c3fb13111ad008a06bfe27d029@o4510702520369152.ingest.de.sentry.io/4510737372086352",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});