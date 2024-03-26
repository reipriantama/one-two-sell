import React from 'react';

const InputDashboard = (props: any) => {
  return (
    <div className='space-y-1'>
      <label htmlFor='name' className='text-[#222222] text-sm'>
        {props.labelText}
      </label>
      <input
        type='text'
        id='name'
        name='name'
        placeholder={props.placeholderText}
        className='border-[1px] text-[#222222] rounded-[4px] p-4 text-base w-full'
      />
    </div>
  );
};

export default InputDashboard;
