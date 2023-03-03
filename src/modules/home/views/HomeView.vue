<template>
  <v-row>
    <v-col cols="12">
      <v-alert
        color="secondary"
        text="Please enter your code to search code and trace info"
      ></v-alert>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="6" offset="3">
      <SearchBox />
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="4" offset="4">
      <SearchHistory />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SearchBox from '@/common/components/SearchBox.vue';
import SearchHistory from '@/modules/home/components/SearchHistory.vue'; // @ is an alias to /src

@Options({
  components: {
    SearchBox,
    SearchHistory,
  },
})
export default class HomeView extends Vue {}
</script>
