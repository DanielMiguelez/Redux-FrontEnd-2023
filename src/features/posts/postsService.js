import axios from "axios";

const API_URL = "http://localhost:8080";

const getAll = async () => {
  const res = await axios.get(API_URL + "/posts/getPosts");
  return res.data;
};

const getPostById = async (id) => {
  const res = await axios.get(API_URL + "/posts/getPostById/" + id);
  return res.data;
};

const getOnePostByName = async (title) => {
  const res = await axios.get(API_URL + "/posts/getOnePostByName/" + title);
  return res.data;
};

const postsService = {
  getAll,
  getPostById,
  getOnePostByName
};

export default postsService;
