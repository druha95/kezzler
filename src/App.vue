<template>
  <v-app>
    <HeaderComponent />
    <ContainerComponent />
    <FooterComponent />
  </v-app>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import HeaderComponent from '@/core/components/HeaderComponent.vue';
import FooterComponent from '@/core/components/FooterComponent.vue';
import ContainerComponent from '@/core/components/ContainerComponent.vue';

@Options({
  components: {
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
  },
})

export default class App extends Vue {}
</script>

<style lang="scss">
body {
  font-size: 16px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
