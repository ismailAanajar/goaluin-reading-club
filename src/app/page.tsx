"use client"
import Post from '@/components/molecules/post';
import Preloader from '@/components/molecules/preload';
import withAuth from '@/utils/withAuth';

async function  Landing() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  // store.dispatch(setPosts(data))
  return (
    <main className='flex flex-col gap-5 w-full md:w-auto'>
        <Preloader posts={data}/>
       <Post/> 
       <Post/> 
       {
        // JSON.stringify(store.getState().posts.posts,null,2)
       }
    </main>
  )
}

export default withAuth(Landing)
