<template>
  <v-main>
    <v-container fluid>
      <router-view/>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class ContainerComponent extends Vue {}
</script>
