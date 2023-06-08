"use client"

import {
  FieldValues,
  useForm,
} from 'react-hook-form';
import { z } from 'zod';

import Button from '@/components/atoms/button';
import Heading from '@/components/atoms/heading';
import Input from '@/components/atoms/input';
import { zodResolver } from '@hookform/resolvers/zod';

export default function Login() {

  const schema = z.object({
    email: z.string().email(),
    password: z.string()
  });
  const {control, handleSubmit,  setError} = useForm({resolver: zodResolver(schema)});

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    
  }

  //  useEffect(() => {
  //   if (error?.errors) {
      
  //     errorHandling({error, setError})
  //   }
  // }, [error])

  return (
    <>
      <Heading className='' >Welcome Back</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 items-center'>
        <Input name='email' type='email' placeholder='john@example.com' control={control}/>
        <Input name='password' type='password' placeholder='password' control={control}/>
        <Button type='submit'>Login</Button>
      </form>
    </>
  )
}
