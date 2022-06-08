import { createStore } from "vuex";
import brandGuideService from "../services/brandGuideService";

const store = createStore({
  state() {
    brandGuides: [];
    currentBGSIndex: [];
    showSidebar: true;
  },
  mutations: {
    SET_BRANDGUIDES(state, brandGuides) {
      state.brandGuides = brandGuides;
    },
    SUBMIT_BRANDGUIDE(state, brandGuide) {
      state.brandGuides.push(brandGuide);
    },
  },
  methods: {},
  getters: {
    getBrandGuides: (state) => state.brandGuides,
  },
  setters: {},
  actions: {
    async fetchBrandGuides({ commit }) {
      // Use the eventService to call the getEventSingle() method
      brandGuideService
        .getBrandGuides()
        .then((data) => commit("SET_BRANDGUIDES", data));
    },
    async addBrandGuide({ commit }, payload) {
      console.log();
      brandGuideService.postBrandGuide(payload).then((data) => {
        commit("SUBMIT_BRANDGUIDE", data);
      });
    },
  },
});

export default store;
