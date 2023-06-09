'use client'

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/atoms/button';
import Heading from '@/components/atoms/heading';
import bannerImg from '@/public/assets/banner.svg';
import withoutAuth from '@/utils/withoutAuth';

function Landing() {
    
  return (
    <main className='flex items-end gap-5'>
      <section className='w-[47%] flex-grow mb-5'>
        <Heading className='!text-left' >Joining The Reading club</Heading>
        <Button className='uppercase mt-5'>
          <Link href='/login'>Get started</Link>
        </Button>
      </section>
      <section className='w-[47%] flex-grow text-right flex justify-end'>
        <Image src={bannerImg}width={300} height={370} alt='banner image'/>
      </section>
    </main>
  )
}

export default withoutAuth(Landing)
