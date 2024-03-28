import React from 'react';

const TextAreaDashboard = (props: any) => {
  return (
    <div className='space-y-1'>
      <label htmlFor='name' className='text-[#222222] text-sm'>
        {props.labelTextArea}
      </label>
      <textarea
        id='name'
        name='name'
        placeholder={props.placeholderTextArea}
        className={`border-[1px] text-[#222222] rounded-[4px] p-4 text-base w-full ${props.className}`}
      />
    </div>
  );
};

export default TextAreaDashboard;
