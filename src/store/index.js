import { createStore } from "vuex";
import brandGuideService from "../services/brandGuideService";

const store = createStore({
  state() {
    brandGuides: [];
    currentBGSName: "";
    currentBGSImageUrl: "";
    currentBGSSubdomain: "";
    currentBGSPages: [];
    showSidebar: true;
  },
  mutations: {
    SET_BRANDGUIDES(state, brandGuides) {
      console.log(brandGuides);
      state.brandGuides = brandGuides;
    },
    SUBMIT_BRANDGUIDE(state, brandGuide) {
      state.brandGuides.push(brandGuide);
    },
    SET_CURRENTBRANDGUIDE(state, brandGuide) {
      state.currentBGSName = brandGuide.name;
      state.currentBGSImageUrl = brandGuide.imageUrl;
      state.currentBGSSubdomain = brandGuide.subdomain;
      state.currentBGSPages = brandGuide.pages;
    },
  },
  methods: {},
  getters: {
    getBrandGuides: (state) => state.brandGuides,
    getcurrentBGSName: (state) => state.currentBGSName,
    getcurrentBGSImageUrl: (state) => state.currentBGSImageUrl,
    getcurrentBGSSubdomain: (state) => state.currentBGSSubdomain,
    getcurrentBGSPages: (state) => state.currentBGSPages,
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
    async fetchBrandGuide({ commit, state }) {
      console.log("fetch brandguide " + state.currentBGSName);
      brandGuideService.getBrandGuide(state.currentBGSName).then((data) => {
        commit("SET_CURRENTBRANDGUIDE", data);
        console.log(data);
      });
    },
  },
});

export default store;
