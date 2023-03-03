<template>
  <v-row>
    <v-col cols="12">
      <v-progress-circular
        v-if="isLoading && code"
        model-value="20"
      ></v-progress-circular>

      <div v-if="!isLoading && code">
        <div v-if="error">
          <v-alert color="danger" v-bind:text="error"></v-alert>
        </div>

        <div v-if="!error && data">
          <v-card>
            <v-card-title
              :class="[
                data.result.status === CodeStatus.Invalid ? 'bg-danger' : 'bg-warning',
                'text-h6',
                'mb-2'
                ]"
            >
              {{ data.code }}
            </v-card-title>

            <v-card-text >
              <div v-if="data.result.status === CodeStatus.Invalid">
                Code Is Invalid
              </div>

              <div v-if="data.result.status !== CodeStatus.Valid">
                <div
                  class="text-error"
                  v-for="error in data.result.errors"
                  :key="error.id"
                >
                  {{ error.message }}
                </div>
              </div>

              <div v-if="data.metadata">
                <p>
                  <span class="font-weight-bold mr-2">Manufacturing Date</span>
                  <span>{{data.metadata.data.manufacturingDate}}</span>
                </p>
                <p>
                  <span class="font-weight-bold mr-2">Product Name</span>
                  <span>{{data.metadata.data.productName}}</span>
                </p>
                <p>
                  <span class="font-weight-bold mr-2">Expiry Date</span>
                  <span>{{data.metadata.data.expiryDate}}</span>
                </p>
                <p>
                  <span class="font-weight-bold mr-2">Intended Market</span>
                  <span>{{data.metadata.data.intendedMarket}}</span>
                </p>
                <p>
                  <span class="font-weight-bold mr-2">Customs Clearance Certificate Data</span>
                  <span>{{data.metadata.data.customsClearanceCertificateData}}</span>
                </p>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import store from '@/store';
import { Options, Vue } from 'vue-class-component';
import client from '@/api/client';
import { CodeStatus } from '@/interfaces/code.interfaces';

@Options({
  props: {
    code: String,
  },
  data() {
    return {
      error: '',
      isLoading: true,
      data: false,
      CodeStatus,
    };
  },
  mounted() {
    this.fetchCodeData();
  },
  watch: {
    code() {
      this.fetchCodeData();
    },
  },
  methods: {
    async fetchCodeData() {
      if (!this.code) {
        return;
      }

      this.isLoading = true;
      this.data = null;

      try {
        const { data: [code] } = await client.fetchCode({
          codes: [this.code],
        });

        this.data = code;
        this.isLoading = false;

        await store.dispatch('addCodeSearchHistory', {
          code: this.code,
          status: this.data.result.status,
        });
      } catch (err) {
        this.error = 'Something went wrong';
        this.isLoading = false;
      }
    },
  },
})
export default class CodeInfo extends Vue {
  code!: string
}
</script>
