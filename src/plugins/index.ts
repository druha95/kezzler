import type { App } from 'vue';
import { loadFonts } from './webfontloader';
import vuetify from './vuetify';
import router from '../router';
import store from '../store';

// eslint-disable-next-line import/prefer-default-export
export const registerPlugins = (app: App) => {
  loadFonts();
  app
    .use(vuetify)
    .use(router)
    .use(store);
};
