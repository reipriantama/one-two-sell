import { TfiReload } from 'react-icons/tfi';
import { IoChevronDownSharp } from 'react-icons/io5';
import Image from 'next/image';

const SideBarEvent = () => {
  const firstFilters = ['Lokasi', 'Jenis Event'];
  const secondFilters = ['Format', 'Topik'];
  const thirdFilters = ['Waktu', 'Harga'];

  return (
    <div className='px-12 pt-6 w-[270px] border-r-[1px] border-[#D9D9D9] h-screen sticky top-0'>
      <div className='flex justify-between items-center pb-9 border-b-[1px] border-[#D9D9D9] mb-6'>
        <div className='font-bold text-2xl text-[#141414]'>Filter</div>
        <Image
          src='/assets/main/event/sideBar/restart_alt.svg'
          alt='filter'
          width={24}
          height={24}
        />
      </div>

      {/* gunakan accordion https://ui.shadcn.com/docs/components/accordion */}
      <div className='flex flex-col pb-9 border-b-[1px] border-[#D9D9D9] mb-6 gap-6'>
        {firstFilters.map((data, index) => (
          <div key={index} className='flex justify-between items-center'>
            <div className='text-[#2D4074] text-xl'>{data}</div>
            <IoChevronDownSharp />
          </div>
        ))}
      </div>
      <div className='flex flex-col pb-9 border-b-[1px] border-[#D9D9D9] mb-6 gap-6'>
        {secondFilters.map((data, index) => (
          <div key={index} className='flex justify-between items-center'>
            <div className='text-[#2D4074] text-xl'>{data}</div>
            <IoChevronDownSharp />
          </div>
        ))}
      </div>
      <div className='flex flex-col pb-9 border-b-[1px] border-[#D9D9D9] mb-6 gap-6'>
        {thirdFilters.map((data, index) => (
          <div key={index} className='flex justify-between items-center'>
            <div className='text-[#2D4074] text-xl'>{data}</div>
            <IoChevronDownSharp />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarEvent;

//   const filterData = [
//     'Lokasi',
//     'Jenis Event',
//     'Format',
//     'Topik',
//     'Waktu',
//     'Harga',
//   ];
