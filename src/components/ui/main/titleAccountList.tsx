import React from 'react';

const TitleAccountList = (props: any) => {
  return (
    <h1 className='text-xl font-bold pb-2 border-b-[1px]'>
      {props.titleText}
    </h1>
  );
};

export default TitleAccountList;
