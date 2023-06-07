"use client"

import {
  FieldValues,
  useForm,
} from 'react-hook-form';

import Button from '@/components/atoms/button';
import Heading from '@/components/atoms/heading';
import Input from '@/components/atoms/input';

type CredentialsType = {
  name: string;
  password: string;
}

export default function Login() {

  const {control, handleSubmit} = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    
  }
  return (
    <section>
      <Heading className='mb-12' >Welcome Back</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 items-center'>
        <Input name='email' type='email' placeholder='john@example.com' control={control}/>
        <Input name='password' type='password' placeholder='password' control={control}/>
        <Button type='submit'>Login</Button>
      </form>
    </section>
  )
}
