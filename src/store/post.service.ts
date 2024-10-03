import axiosClient from "../utils/axiosClient"

type PostDto = {
  id: number
  title: string
  body: string
  userId: number
}

export const getPosts = async () => {
  const res = await axiosClient.get("/posts");
  return res;
}

export const getPostById = async (id: number) => {
  const res = await axiosClient.get(`/posts/${id}`);
  return res;
}

export const createPost = async (data: Omit<PostDto, "id">) => {
  const res = await axiosClient.post("/posts", data);
  return res;
}

export const updatePost = async (id: number, data: PostDto) => {
  const res = await axiosClient.post(`/posts/${id}`, data);
  return res;
}

export const deletePost = async (id: number) => {
  const res = await axiosClient.delete(`/posts/${id}`);
  return res;
}

const postService = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
}

export default postService;