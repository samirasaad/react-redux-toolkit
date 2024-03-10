import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Axios/axiosInstance";
import { getPostsApi } from "../../network/requests/posts";

const initialState = {
  postsList: [],
  isLoading: false,
  error: null,
};

export const getPostsThunk = createAsyncThunk("posts/getPosts", async () => {
  const res = await axiosInstance.get("/posts");
  // const res = getPostsApi();
  return res.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostsThunk.pending, (state) => {
      state.isLoading = true;
      console.log("pending");
    });
    builder.addCase(getPostsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.postsList = action.payload;
      // logging state inside reducer will give proxy
      // current s alternative from redux toolkit to do so
      console.log("state", current(state));
      console.log("fullfilled");
    });
    builder.addCase(getPostsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default postsSlice.reducer;
