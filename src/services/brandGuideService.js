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
  // return brandGuide
  async postBrandGuide(bgsName, subdomain) {
    let res = await axios.post(API + bgsName);
    return res.data;
  },
  // return imageUrl
  async uploadBrandGuideImage(bgsName) {
    let res = await axios.post(API + bgsName);
    return res.data;
  },
  //change backend get brandguide request with subdomain and data
  async isSubdomainAvailable() {
    let res = await axios.get(API + `${bgsName}?subdomain=true&nodata=true`);
    return res.status === 404;
  },
};
