import {
  HTMLAttributes,
  ReactNode,
} from 'react';

type HeadingLevel = 1 | 2;

type HeadingProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>

function Heading({  children, className, ...rest }: HeadingProps) {

  return <h1 className={`capitalize text-[60px] leading-[73px] ${className}`} {...rest}>{children}</h1>;
}

export default Heading;
