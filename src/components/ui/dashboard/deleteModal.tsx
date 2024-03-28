import Image from 'next/image';
import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Button from '../main/button';

const DeleteModal = (props: any) => {
  return (
    <div className='fixed z-10 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
      <div className='w-full max-w-[540px] bg-white p-9 space-y-12 rounded-xl'>
        <div className='flex justify-end items-center'>
          <IoClose
            className='size-10 text-navy-blue cursor-pointer'
            onClick={props.onClick}
          />
        </div>
        <div className='flex flex-col justify-center items-center space-y-6'>
          <div className='border border-red-500 rounded-full p-8 '>
            <FaRegTrashAlt className='size-[80px] text-red-500 ' />
          </div>
          <h1 className='text-2xl font-bold'>Are you sure ? </h1>
          <p className='text-xl'>Do you really want to delete these ?</p>
          <div className='flex w-full justify-between gap-6'>
            <div className='flex-1'>
              <Button
                buttonText='Cancel'
                className='w-full justify-center'
                outline
                onClick={props.closeModal}
              />
            </div>
            <div className='flex-1'>
              <Button
                buttonText='Delete'
                className='w-full justify-center'
                danger
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
