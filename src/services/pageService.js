import axios from "axios";
const API = import.meta.env.VITE_API + "/api/brandguides/";

export default {
  async postPage(bgsName, pageName) {
    let res = await axios.post(API + `${bgsName}/${pageName}`);
    return res.data;
  },
  async putPage(bgsName, pageName, field, toValue) {
    let res = await axios.post(
      API + `${bgsName}/${pageName}?field=${field}&toValue=${value}`
    );
    return res.data;
  },
  async deletePage(bgsName, pageName) {},
};
