import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type Posts = {
  posts: Post[] 
}

const initialState: Posts = {
  posts: []
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;