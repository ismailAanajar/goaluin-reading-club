"use client"

import {
  FieldValues,
  useForm,
} from 'react-hook-form';
import { z } from 'zod';

import Button from '@/components/atoms/button';
import Heading from '@/components/atoms/heading';
import Input from '@/components/atoms/input';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '@/store';
import { signUp } from '@/store/userSlice';
import withoutAuth from '@/utils/withoutAuth';
import { zodResolver } from '@hookform/resolvers/zod';

function Register() {
    const loading = useAppSelector((state: RootState) => state.user.loading)
    const dispatch = useAppDispatch()

  const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string()
  });
  const {control, handleSubmit,  setError} = useForm({resolver: zodResolver(schema)});

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    dispatch(signUp(data))
    
  }

  //  useEffect(() => {
  //   if (error?.errors) {
      
  //     errorHandling({error, setError})
  //   }
  // }, [error])

  return (
    <section>
      <Heading className='mb-12' >Welcome To Goaluin</Heading>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 items-center'>
        <Input name='name' type='text' placeholder='name' control={control}/>
        <Input name='email' type='email' placeholder='john@example.com' control={control}/>
        <Input name='password' type='password' placeholder='password' control={control}/>
        <Button type='submit' loading={loading}>Login</Button>
      </form>
    </section>
  )
}


export default withoutAuth(Register)
