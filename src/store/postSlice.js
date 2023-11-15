import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postData: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getAllPosts: (state, actions) => {
      state.postData = actions.payload;
    },
  },
});

export const { getAllPosts } = postSlice.actions;

export default postSlice.reducer;
