import { ComponentProps } from 'react';

import {
  Control,
  useController,
} from 'react-hook-form';

type Props = {
  control?: Control
} & ComponentProps<'textarea'>

function Textarea(props: Props) {

  const {field, fieldState} = useController({
    name: props.name || '', control: props.control
  })
  
  return (
    <>
      <textarea className='bg-input_bg text-input_color text-sm px-3 py-4 rounded-xl w-full md:w-[363px] outline-none' {...props} {...field}/>
      {fieldState.error &&<p className='text-red text-[10px] absolute -bottom-4 left-0' >{fieldState.error.message}</p>}
    </>
  )
}

export default Textarea