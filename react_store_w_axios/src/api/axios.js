import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3000/posts",
  baseURL: import.meta.env.VITE_API_URL + "/posts",
});

// axios.get("http://localhost:3000/posts") 
// instance.get("")

export default instance;
