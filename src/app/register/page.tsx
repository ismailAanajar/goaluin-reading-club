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
  const {push} = useRouter()
  const onSubmit = (data: FieldValues) => {
    dispatch(signUp(data)).then(() => push('/login'))
    
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
        <div className="flex  justify-between gap-3">
          <Button loading={loading} type='submit'>Register</Button>
          <Button href='/login' className='bg-input_bg !text-[#fff]' >
            Login
          </Button>
        </div>
      </form>
    </section>
  )
}


export default withoutAuth(Register)
