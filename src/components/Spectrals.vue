<template>
  <div>
    <div class="container">
      <div class="spectrals">
        <div v-for="spectral in allSpectrals" :key="spectral.id" class="spectral">
          <div class="category_header">
            {{spectral.title}}
          </div>
          <div class="category_body">
            {{spectral.id}}
            Holly Moly
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'spectrals',
  computed: mapGetters(['allSpectrals']),
  methods: {
    ...mapActions(['fetchSpectrals'])
  },
  created() {
    this.fetchSpectrals()
  }
}
</script>
<style scoped>

</style>
