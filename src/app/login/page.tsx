"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  FieldValues,
  useForm,
} from 'react-hook-form';

import Button from '@/components/atoms/button';
import Heading from '@/components/atoms/heading';
import Input from '@/components/atoms/input';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '@/store';
import { signIn } from '@/store/userSlice';
import withoutAuth from '@/utils/withoutAuth';

function Login() {
    const loading = useAppSelector((state: RootState) => state.user.loading)

  const {control, handleSubmit} = useForm();
  const dispatch = useAppDispatch()
  const {replace} = useRouter()
  const onSubmit = (data: FieldValues) => {
    dispatch(signIn(data)).then(() => replace('/'))
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
        <div className="flex  justify-between gap-3">
          <Button loading={loading} type='submit'>Login</Button>
          <Button className='bg-input_bg text-[#fff]' type='submit'>
            <Link href='/register'>register</Link>
          </Button>
        </div>
      </form>
    </>
  )
}


export default withoutAuth(Login)