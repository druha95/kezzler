<template>
  <v-row v-if="!code">
    <v-col cols="12">
      <v-alert
        color="secondary"
        text="Please enter your code to search code and trace info"
      ></v-alert>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="6" offset="3">
      <SearchBox v-bind:code="code" />
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="4">
      <CodeInfo v-bind:code="code" />
    </v-col>
    <v-col cols="6" offset="2">
      <CodeTrace v-bind:code="code" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SearchBox from '@/common/components/SearchBox.vue';
import CodeInfo from '@/modules/code-info/components/CodeInfo.vue';
import CodeTrace from '@/modules/code-info/components/CodeTrace.vue'; // @ is an alias to /src

@Options({
  components: {
    SearchBox,
    CodeInfo,
    CodeTrace,
  },
  data() {
    return {
      code: null,
    };
  },
  created() {
    this.code = this.$route.query.code;
  },
  watch: {
    '$route.query.code': function () {
      this.code = this.$route.query.code;
    },
  },
})
export default class CodeView extends Vue {}
</script>
