import Image from 'next/image';

import dateIcon from '@/public/assets/date.svg';
import {
  RootState,
  useAppSelector,
} from '@/store';

import Button from '../atoms/button';

export default function Post({id,title, description, created_at, deletePost}:Post&{deletePost: (id:number | null) => void}) {
    const loading = useAppSelector((state: RootState) => state.posts.loading)

return (
    <article className="bg-[#302C3E] pt-6 px-3 pb-2 rounded-[14px] w-full  md:w-[590px] relative">
      <h2 className='capitalize text-3xl'>{title}</h2>
      <p className='text-[#656469] text-lg'>{description}</p>
      <div className='flex gap-2 mt-2'>
        <Image src={dateIcon} alt=''/>
        <span className='text-[#656469] text-xs'>{
          new Intl.DateTimeFormat('en-US', {
              weekday: 'long',
              month: 'long',
              year: 'numeric',
              day: 'numeric',
            }).format(new Date(created_at))
        }</span>
      </div>
        <Button loading={loading}>
          
        </Button>
      
    </article>
  )
}
