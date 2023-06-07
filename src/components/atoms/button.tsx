import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  
}

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const {className, ...rest} = props;
  return (
    <button className={`bg-button_bg text-primary cursor-pointer py-3 w-[125px] rounded-[20px] text-xs ${className}`} {...rest}/>
  )
}
