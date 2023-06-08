import axios from 'axios';
import { FieldValues } from 'react-hook-form';

import customAxios from '@/lib';
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

const initialState: User = {
  userInfo:{
    name: null,
  email: null,
  },
  loading: false,
  token: null
};
export const getUser = createAsyncThunk('getUser', async (_,{rejectWithValue}) => {

  const user = await customAxios.get<User>('profile');

   return user.data ; 
})

export const signIn = createAsyncThunk('auth/singIn', async (data:FieldValues, {dispatch, rejectWithValue}) => {
  
 try {
    await axios.get("http://localhost:8000/sanctum/csrf-cookie");
   const resp = await customAxios.post<{token: string}>('auth/login', data)
   //@ts-ignore
   if (resp.data?.token) {
     localStorage.setItem('token', resp.data.token);
     await dispatch(getUser())
   } 
   return resp.data.token as string | null;
 } catch (error) {
   rejectWithValue(error)
 }
  
})
export const signUp = createAsyncThunk('auth/signUp', async (data:FieldValues, {rejectWithValue}) => {
  try {
    const resp = await customAxios.post('auth/register', data)
    return resp.data.message
  } catch (error) {
    return rejectWithValue(error)
  }
  
   
})

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.userInfo.name = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUser.pending, state => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action:PayloadAction<User>) => {
        
        state.userInfo = action.payload.userInfo
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false
      })

      /**** Sign in */
    builder.addCase(signIn.pending, state => {
      state.loading = true
    })
    builder.addCase(signIn.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.token = payload
    })
    builder.addCase(signIn.rejected, (state, {payload}:any) => {
      state.loading = false;
      // state.error = payload.error
    })
    /**** Sign in */
    
    /**** Sign up */
    builder.addCase(signUp.pending, state => {
      state.loading = true
    })
    builder.addCase(signUp.fulfilled, (state, {payload}) => {
      state.loading = false
    })
    builder.addCase(signUp.rejected, (state, {payload}:any) => {
      state.loading = false;
    })
    /**** Sign up */
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;