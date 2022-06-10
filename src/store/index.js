import { createStore } from "vuex";
import brandGuideService from "../services/brandGuideService";

const store = createStore({
  state() {
    brandGuides: [];
    currentBGSName: [];
    currentBrandGuide: {};
    showSidebar: true;
  },
  mutations: {
    SET_BRANDGUIDES(state, brandGuides) {
      state.brandGuides = brandGuides;
    },
    SUBMIT_BRANDGUIDE(state, brandGuide) {
      state.brandGuides.push(brandGuide);
    },
    SET_CURRENTBRANDGUIDE(state, brandGuide){
      state.currentBrandGuide = brandGuide;
      console.log(state.currentBrandGuide)
    }
  },
  methods: {},
  getters: {
    getBrandGuides: (state) => state.brandGuides,
    getcurrentBrandGuide: (state) => state.currentBrandGuide,
    getcurrentBGSName: (state) => state.currentBGSName
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
      brandGuideService.postBrandGuide(payload).then((data) => {
        commit("SUBMIT_BRANDGUIDE", data);
      });
    },
    async fetchBrandGuide({ commit, state }){
      brandGuideService.getBrandGuide(state.currentBGSName)
      .then((data) => {
        commit("SET_CURRENTBRANDGUIDE", data);
        console.log(data)
      });
        
    }
  },
});

export default store;
