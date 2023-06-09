'use client'

import Image from 'next/image';

import Button from '@/components/atoms/button';
import Heading from '@/components/atoms/heading';
import withoutAuth from '@/utils/withoutAuth';

function Landing() {
    
  return (
    <main className='flex items-end gap-5'>
      <section className='w-[47%] flex-grow mb-5'>
        <Heading className='!text-left' >Joining The Reading club</Heading>
        <Button href='/login' className='uppercase mt-5'>
          Get started
        </Button>
      </section>
      <section className='w-[47%] flex-grow text-right flex justify-end'>
        <Image src={'/assets/banner.svg'}width={300} height={370} alt='banner image'/>
      </section>
    </main>
  )
}

export default withoutAuth(Landing)
