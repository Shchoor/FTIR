import Vue from 'vue';
import Vuex from 'vuex';
import spectrals from './modules/spectrals';

//load Vuex
Vue.use(Vuex);

//create Store
export default new Vuex.Store({
  modules: {
    spectrals
  }
});
