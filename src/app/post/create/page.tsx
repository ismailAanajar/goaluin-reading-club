"use client"

import {
  FieldValues,
  useForm,
} from 'react-hook-form';

import Button from '@/components/atoms/button';
import Heading from '@/components/atoms/heading';
import Input from '@/components/atoms/input';
import Textarea from '@/components/atoms/textarea';

function CreatePost() {
  const {control, handleSubmit} = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    
  }
  return (
    <main>
      <Heading>New Post</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 items-center'>
        <Input type="text" name="title" placeholder="Title" control={control}/>
        <Textarea placeholder='Description' name='description' control={control}/>
        <Button type='submit'>Create</Button>
      </form>
    </main>
  )
}

export default CreatePost