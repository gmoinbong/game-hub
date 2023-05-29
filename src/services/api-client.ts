import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f89c2a620378445e8e8c341668ccca83",
  }
});