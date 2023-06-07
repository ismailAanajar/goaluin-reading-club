import {
  HTMLAttributes,
  ReactNode,
} from 'react';

type HeadingLevel = 1 | 2;

type HeadingProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>

function Heading({  children, className, ...rest }: HeadingProps) {

  return <h1 className={`capitalize md:text-[60px] text-[40px] leading-[73px] text-center mb-12  ${className} `} {...rest}>{children}</h1>;
}

export default Heading;
