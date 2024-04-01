import Link from 'next/link';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const ButtonTitle = (props: any) => {
  const buttonClassName = `flex ${
    props.verification
      ? 'w-gap-1 py-2 px-4 rounded-2xl bg-[#129555] hover:bg-[#129555] text-white'
      : ''
  }`;
  return (
    <Link
      href={props.link}
      className={`flex items-center gap-1 py-2 px-4 rounded-2xl
       bg-navy-blue hover:bg-[#1f49b3] text-white ${buttonClassName}`}
    >
      <AiOutlinePlus className='text-base' />
      <p className='text-xs font-semibold'>{props.buttonText}</p>
    </Link>
  );
};

export default ButtonTitle;
