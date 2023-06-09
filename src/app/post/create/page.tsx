"use client"

import { useRouter } from 'next/navigation';
import {
  FieldValues,
  useForm,
} from 'react-hook-form';
import { z } from 'zod';

import Button from '@/components/atoms/button';
import Heading from '@/components/atoms/heading';
import Input from '@/components/atoms/input';
import Textarea from '@/components/atoms/textarea';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '@/store';
import { createPost } from '@/store/postSlice';
import withAuth from '@/utils/withAuth';
import { zodResolver } from '@hookform/resolvers/zod';

function CreatePost() {
  const loading = useAppSelector((state: RootState) => state.posts.loading)
  const dispatch = useAppDispatch()
  const {push} = useRouter()
  const schema = z.object({
    title: z.string().min(3),
    description: z.string().min(10),
  });
  const {control, handleSubmit} = useForm({resolver: zodResolver(schema)});

  const onSubmit = (data: FieldValues) => {
    dispatch(createPost(data)).then(() => push('/'))
  }
  return (
    <main>
      <Heading>New Post</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 items-center'>
        <Input type="text" name="title" placeholder="Title" control={control}/>
        <Textarea placeholder='Description' name='description' control={control}/>
        <Button loading={loading} type='submit'>Create</Button>
      </form>
    </main>
  )
}

export default withAuth(CreatePost)