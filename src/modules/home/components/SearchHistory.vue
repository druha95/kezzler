<template>
  <v-row v-if="searchHistory && searchHistory.length">
    <v-col cols="12">
      <v-card color="secondary">
        <v-card-title>
          Search History
        </v-card-title>
        <v-card-text>
          <div v-for="(item, index) in searchHistory" :key="index" class="mb-2">
            <v-btn
              :color="item.status === CodeStatus.Invalid ? 'error' : 'primary'"
              width="200px"
              variant="flat"
              @click="openPage(item)"
            >
              {{item.code}}
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapGetters } from 'vuex';
import { CodeStatus } from '@/interfaces/code.interfaces';

@Options({
  props: {
    code: String,
  },
  data() {
    return {
      CodeStatus,
    };
  },
  computed: {
    ...mapGetters({
      searchHistory: 'searchHistory',
    }),
  },
  methods: {
    openPage(historySearch) {
      this.$router.push({ path: '/code', query: { code: historySearch.code } });
    },
  },
})
export default class SearchHistory extends Vue {}
</script>
