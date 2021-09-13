import axios from "axios";

const API_URL = "http://localhost:8080/api/posts";

class PostService {
  getPosts() {
    return axios.get(API_URL);
  }
}

export default new PostService();
