import axios from 'axios';

const state = {
  spectrals: []
};

const getters = {
  allSpectrals: (state) => state.spectrals
};

const actions = {
  async fetchSpectrals({ commit }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    commit('setSpectrals', response.data);
  }
};

const mutations = {
  setSpectrals: (state, spectrals) => (state.spectrals = spectrals)
};

export default {
  state,
  getters,
  actions,
  mutations
}
