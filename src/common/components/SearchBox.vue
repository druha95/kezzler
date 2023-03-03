<template>
  <v-row>
    <v-col cols="9">
      <v-text-field
        v-model="currentCode"
        label="Code"
        hide-details="auto"
      ></v-text-field>
    </v-col>

    <v-col cols="3">
      <v-btn
        color="primary"
        height="100%"
        variant="flat"
        v-bind:disabled="!currentCode"
        @click="searchCode"
      >
        Search
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    code: String,
  },
  data() {
    return {
      currentCode: '',
      error: '',
    };
  },
  mounted() {
    this.currentCode = this.code;
  },
  methods: {
    searchCode() {
      this.$router.push({ path: '/code', query: { code: this.currentCode } });
    },
  },
})
export default class SearchBox extends Vue {
  code!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search-box {
  display: flex;
}
</style>
