import { boot } from 'quasar/wrappers';

import messages from 'src/i18n';
import { adaptiveValue } from 'src/utils';
import { createI18n } from 'vue-i18n';

export type MessageLanguages = keyof typeof messages;
export type MessageSchema = (typeof messages)['ruXs'];

/* eslint-disable @typescript-eslint/no-empty-interface */
declare module 'vue-i18n' {
  // noinspection JSUnusedGlobalSymbols
  export interface DefineLocaleMessage extends MessageSchema {
  }

  // noinspection JSUnusedGlobalSymbols
  export interface DefineDateTimeFormat {
  }

  // noinspection JSUnusedGlobalSymbols
  export interface DefineNumberFormat {
  }
}

export function getAdaptiveLocale(): MessageLanguages {
  // TODO
  return adaptiveValue('ruXs', 'ruSm', 'ruMd', 'ruLg', 'ruXl');
}

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: getAdaptiveLocale(),
    legacy: false,
    messages
  });
  app.use(i18n);
});
