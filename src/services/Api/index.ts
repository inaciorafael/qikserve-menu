import axios from "axios";

export const api = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://cdn-dev.preoday.com",
});
