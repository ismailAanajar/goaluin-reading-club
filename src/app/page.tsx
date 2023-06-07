import Image from 'next/image';

import Button from '@/components/atoms/button';
import Heading from '@/components/atoms/heading';
import bannerImg from '@/public/assets/banner.svg';

export default function Landing() {
  return (
    <main className='flex items-end gap-5'>
      <section className='w-[47%] flex-grow mb-5'>
        <Heading level={1}>Joining The Reading club</Heading>
        <Button className='uppercase mt-5'>Get started</Button>
      </section>
      <section className='w-[47%] flex-grow text-right flex justify-end'>
        <Image src={bannerImg}width={300} height={370} alt='banner image'/>
      </section>
    </main>
  )
}
