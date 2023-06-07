import Image from 'next/image';

import dateIcon from '@/public/assets/date.svg';
import removeIcon from '@/public/assets/remove.svg';

export default function Post() {
return (
    <article className="bg-[#302C3E] pt-6 px-3 pb-2 rounded-[14px] w-full  md:w-[590px] relative">
      <h2 className='capitalize text-3xl'>New Post</h2>
      <p className='text-[#656469] text-lg'>New Post description</p>
      <div className='flex gap-2 mt-2'>
        <Image src={dateIcon} alt=''/>
        <span className='text-[#656469] text-xs'>Monday, june 5, 2023</span>
      </div>
        <Image src={removeIcon} alt='' className='absolute right-4 top-3  cursor-pointer' />
      
    </article>
  )
}
