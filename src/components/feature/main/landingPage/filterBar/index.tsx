import React from 'react';
import { IoFootballSharp } from 'react-icons/io5';
import Select from '../../../../ui/input';

const FilterBar = () => {
  const optionSport = [
    { value: '', label: 'Olahraga' },
    { value: 'basket', label: 'basket' },
    { value: 'Voli', label: 'Voli' },
    { value: 'Sepak Bola', label: 'Sepak Bola' },
  ];

  return (
    <div className='bg-[#FAFAFA] flex justify-between px-12 py-4'>
      <div className='ml-[72px]'>
        <Select iconSelect={<IoFootballSharp />} options={optionSport} />
      </div>
      <div>Right</div>
    </div>
  );
};

export default FilterBar;
