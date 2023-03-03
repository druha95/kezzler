/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import * as components from 'vuetify/components';
import 'vuetify/_styles.scss';

// Composables
import { createVuetify } from 'vuetify';

export default createVuetify({
  components,
  ssr: false,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#a9dafa',
          warning: '#FFE2B7',
          danger: '#F4C7C7',
          error: '#DC3545',
        },
      },
    },
  },
});
