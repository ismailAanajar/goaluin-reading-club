import { ComponentProps } from 'react';

import {
  Control,
  useController,
} from 'react-hook-form';

export type InputProps = {
  control?: Control
} & ComponentProps<'input'>

function Input(props: InputProps) {

  const {field, fieldState} = useController({
    name: props.name || '', control: props?.control
  })
  
  return (
    <div className='relative'>
      <input className='bg-input_bg text-input_color text-sm px-3 py-4 rounded-xl w-[363px] outline-none' {...props} {...field}/>
      {fieldState.error &&<p className='text-red text-[9px] absolute -bottom-3 left-2 ' >{fieldState.error.message}</p>}
    </div>
  )
}

export default Input