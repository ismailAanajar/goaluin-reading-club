"use client"

import Button from '@/components/atoms/button';
import Post from '@/components/molecules/post';
import { useAppSelector } from '@/store';
import withAuth from '@/utils/withAuth';

async function  Landing() {
  const posts = useAppSelector(state => state.user.userInfo.posts)
  
  

  return (
    <main className='flex flex-col gap-5 w-full md:w-auto items-center'>
       {
        posts.map(post => <Post key={post.id} {...post} /> )
       }
       <Button href='/post/create'>
        New Post
       </Button>
    </main>
  )
}

export default withAuth(Landing)
