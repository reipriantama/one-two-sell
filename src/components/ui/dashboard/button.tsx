import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const ButtonTitle = (props: any) => {
  return (
    <div className='flex items-center gap-1 py-2 px-4 rounded-2xl bg-navy-blue hover:bg-[#1f49b3] text-white'>
      <AiOutlinePlus className='text-base' />
      <p className='text-xs font-semibold'>{props.buttonText}</p>
    </div>
  );
};

export default ButtonTitle;
