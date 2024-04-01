import React from 'react';
import { FaRegImage } from 'react-icons/fa';

const InputDashboard = (props: any) => {
  const inputClassName = `${
    props.inputType === 'file' ? 'pl-12 file:hidden' : ''
  } `;
  return (
    <div className='space-y-1 relative'>
      <label htmlFor='name' className='text-[#222222] text-sm'>
        {props.labelText}
      </label>
      <input
        type={props.inputType}
        id='name'
        name='name'
        placeholder={props.placeholderText}
        className={`relative border-[1px] text-[#222222] rounded-[4px] p-4 text-base w-full
         ${inputClassName}`}
      />
      {props.inputType === 'file' && (
        <FaRegImage className='absolute top-[53px] left-4 -translate-y-1/2 size-5' />
      )}
    </div>
  );
};

export default InputDashboard;
