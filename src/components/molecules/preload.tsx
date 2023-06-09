"use client";

import { useEffect } from 'react';

import { useAppDispatch } from '@/store';
import { getUser } from '@/store/userSlice';

function Preloader() {
  const dispatch = useAppDispatch()
  useEffect(() =>{
  dispatch(getUser())
},[])
  return null;
}

export default Preloader;