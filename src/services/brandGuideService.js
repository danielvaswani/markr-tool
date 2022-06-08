import axios from "axios";
const API = import.meta.env.VITE_API + "/api/brandguides/";

export default {
  async getBrandGuides() {
    let res = await axios.get(API);
    return res.data;
  },
  async getBrandGuide(bgsName) {
    let res = await axios.get(API + bgsName);
    return res.data;
  },
  async postBrandGuide(bgsName) {
    let res = await axios.post(API + bgsName);
    return res.data;
  },
};
