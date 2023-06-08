"use client";

import { useRef } from 'react';

import { store } from '@/store';
import { setPosts } from '@/store/postSlice';

function Preloader({ posts }: { posts: Post[] }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setPosts(posts));
    loaded.current = true;
  }

  return null;
}

export default Preloader;