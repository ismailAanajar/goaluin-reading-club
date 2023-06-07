import React, { ReactNode } from 'react';

type HeadingLevel = 1 | 2;

type HeadingProps<T extends HeadingLevel> = {
  level: T;
  children: ReactNode;
};

function Heading<T extends HeadingLevel>({ level, children }: HeadingProps<T>) {
  const HeadingComponent = `h${level}` as keyof JSX.IntrinsicElements;

  return <HeadingComponent className='capitalize text-[60px] leading-[73px]'>{children}</HeadingComponent>;
}

export default Heading;
