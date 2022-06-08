import { createStore } from "vuex";
import brandGuideService from "../services/brandGuideService";

const store = createStore({
  state() { 
    brandGuides: []
  },
  mutations: {
    SET_BRANDGUIDES(state, brandGuides) {
          state.brandGuides = brandGuides
      }
  },
  methods: {},
  getters: {
    getBrandGuides: (state) => state.brandGuides
  },
  setters: {},
  actions: {
    async fetchBrandGuides({commit}) {
      // Use the eventService to call the getEventSingle() method
      brandGuideService.getBrandGuides()
      .then(
        (data) => commit('SET_BRANDGUIDES', data )
      );
    }
  },
});

export default store;
