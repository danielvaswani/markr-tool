import { createStore } from 'vuex';
import pickedcolor from './pickedcolor';

export const storeConfig = {
  modules: {
    pickedcolor,
  },
   mutations: {},
  methods: {},
  getters: {},
  setters: {},
  actions: {},
};

const store = createStore(storeConfig);

export default store;
