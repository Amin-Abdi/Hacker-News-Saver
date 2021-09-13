import axios from "axios";

const API_URL = "https://hn.algolia.com/api/v1/search?query=java";

class PostService {
  getPosts() {
    return axios.get(API_URL);
  }
}

export default new PostService();
