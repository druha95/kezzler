<template>
  <v-toolbar
    color="teal-darken-4"
    image="https://picsum.photos/1920/1080?random"
  >
    <nav class="navigation">
      <router-link
        v-for="link in links"
        v-bind:key="link.to"
        v-bind:to="link.to"
        v-slot="{ href, navigate, isActive, isExactActive }"
      >
        <li
          class="navigation__item"
        >
          <a
            :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']"
            class="navigation__link"
            :href="href"
            @click="navigate"
          >{{ link.text }}</a>
        </li>
      </router-link>
    </nav>
  </v-toolbar>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  created() {
    this.links = [
      {
        to: '/',
        text: 'Kezzler',
      },
      {
        to: '/code',
        text: 'Code',
      },
    ];
  },
})
export default class HeaderComponent extends Vue {}
</script>

<style lang="scss">
@import '@/assets/styles/variables';

.navigation {
  display: flex;

  &__item {
    list-style: none;
    margin-left: 1rem;
  }

  &__link {
    text-decoration: none;
    color: $text-primary;
    font-weight: bold;

    &:hover,
    &.router-link-active,
    &.router-link-exact-active {
      text-decoration: underline;
    }
  }

  a {
    text-decoration: none;
  }
}
</style>
