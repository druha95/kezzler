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

        <div v-if="!error">
          <v-card>
            <v-card-title class="text-h6 bg-secondary mb-2">
              {{ data.self.code }}
            </v-card-title>

            <v-card-text>
              <div>
                <p>
                  <span class="font-weight-bold mr-2">Package Type</span>
                  <span>{{data.self.packageType.name}}</span>
                </p>
                <p>
                  <span class="font-weight-bold mr-2">Material</span>
                  <span>{{data.self.packageType.material}}</span>
                </p>
                <p>
                  <span class="font-weight-bold mr-2">Type</span>
                  <span>{{data.self.packageType.type}}</span>
                </p>
              </div>
            </v-card-text>
          </v-card>
          <v-timeline align="start">
            <v-timeline-item
              v-for="event in data.events.event"
              :key="event.eventTime"
            >
              <v-card>
                <v-card-title class="text-h6 bg-secondary mb-2">
                  {{ formatDateTime(event.eventTime) }}
                </v-card-title>
                <v-card-text class="bg-white text--primary">
                  <div>
                    <p>
                      <span class="font-weight-bold mr-2">Name</span>
                      <span>{{event.location.name}}</span>
                    </p>
                    <p>
                      <span class="font-weight-bold mr-2">Country</span>
                      <span>{{event.location.country.name}}</span>
                      <span>({{event.location.country.code}})</span>
                    </p>
                  </div>
                  <v-btn
                    color="primary"
                    variant="outlined"
                    class="mt-2"
                    @click="toggleModal(true, event.location.coordinates)"
                  >
                    Location
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </div>
      </div>
    </v-col>
  </v-row>

  <v-dialog
    v-model="modalOpened"
    width="auto"
  >
    <v-card v-if="selectedLocation">
      <div style="height:600px; width:800px">
        <l-map
          ref="map"
          :zoom="10"
          :center="[selectedLocation.latitude, selectedLocation.longitude]"
        >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
          ></l-tile-layer>
          <l-marker
            :lat-lng="[selectedLocation.latitude, selectedLocation.longitude]"
          ></l-marker>
        </l-map>
      </div>
      <v-card-actions>
        <v-btn
          color="primary"
          block
          @click="toggleModal(false, null)">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import client from '@/api/client';
import { TraceError, TraceLocation } from '@/interfaces/trace.interfaces';
import { ErrorResponse } from '@/interfaces/common.interfaces';
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet';
import { formatDateTime } from '@/helpers/dateFormat';

@Options({
  components: {
    LMap,
    LMarker,
    LTileLayer,
  },
  props: {
    code: String,
  },
  data() {
    return {
      error: null,
      isLoading: true,
      data: null,
      modalOpened: false,
      selectedLocation: null,
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
      this.error = null;

      try {
        const { data } = await client.fetchTrace(this.code);
        this.data = data;
        this.isLoading = false;
      } catch (err) {
        const error = err as ErrorResponse<TraceError>;

        const message = error.response ? error.response.data.message : null;

        this.error = `Trace is not available: ${message}`;
        this.isLoading = false;
      }
    },

    toggleModal(isOpened: boolean, selectedLocation: TraceLocation | null = null) {
      this.modalOpened = isOpened;
      this.selectedLocation = selectedLocation;
    },

    formatDateTime(date: number): string {
      return formatDateTime(date);
    },
  },
})
export default class CodeTrace extends Vue {
  code!: string
}
</script>
