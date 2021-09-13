import axios from "axios";

const API_URL = "http://localhost:8080/api/posts";

class PostService {
  //I need a GET POST DELETE

  //This is for fetching all the posts
  getPosts() {
    return axios.get(API_URL);
  }

  //Delete saved Post
  deletePost(postId) {
    return axios.delete(API_URL + "/" + postId);
  }
}

export default new PostService();
