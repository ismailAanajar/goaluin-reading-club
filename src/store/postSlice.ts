import { FieldValues } from 'react-hook-form';

import customAxios from '@/lib';
import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import { getUser } from './userSlice';

export const createPost = createAsyncThunk('createPost', async (data: FieldValues,{rejectWithValue, dispatch}) => {

  const user = await customAxios.post('post/create', data);
  dispatch(getUser())
   return user.data ; 
})
export const destroyPost = createAsyncThunk('destroyPost', async (id: number | null,{rejectWithValue, dispatch}) => {

  const user = await customAxios.delete('post/delete/'+id);
  dispatch(getUser())
   return user.data ; 
})

type Posts = {
  loading: boolean 
}

const initialState: Posts = {
  loading: false
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    
  },
  extraReducers: builder => {
   builder
      .addCase(createPost.pending, state => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state) => {
                state.loading = false;

      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false
      })
      .addCase(destroyPost.pending, state => {
        state.loading = true;
      })
      .addCase(destroyPost.fulfilled, (state) => {
                state.loading = false;

      })
      .addCase(destroyPost.rejected, (state, action) => {
        state.loading = false
      })
    }   
});

export const {  } = postSlice.actions;
export default postSlice.reducer;