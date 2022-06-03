require('./src/index');

import * as Sentry from '@sentry/react-native';
import { Navigation } from 'react-native-navigation';

Sentry.init({
  dsn: 'https://10d1d8bd1bb44239a926bcd465ea635a@o87286.ingest.sentry.io/6362860',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
  debug: true,
  integrations: [
    new Sentry.ReactNativeTracing({
      // Pass instrumentation to be used as `routingInstrumentation`
      routingInstrumentation: new Sentry.ReactNativeNavigationInstrumentation(Navigation),
      // ...
    }),
  ],
});
