import { axiosInstance } from "../../Axios/axiosInstance";
import { getPostsAPiUrl } from "../apis/posts";

export const getPostsApi = async () => {
  return await axiosInstance.get(getPostsAPiUrl);
};
