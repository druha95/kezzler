<template>
  <v-footer class="bg-grey-lighten-1">
    <v-row justify="center" no-gutters>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Kezzler</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class FooterComponent extends Vue {}
</script>
