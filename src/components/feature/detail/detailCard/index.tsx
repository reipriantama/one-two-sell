import { CiCalendar } from 'react-icons/ci';
import { FaRegClock } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md';

const DetailCard = () => {
  return (
    <div
      className='xl:w-[432px]
    border-2 rounded-xl p-6'
    >
      <div className='text-xl text-navy-blue font-semibold mb-9'>
        Parade Sihir - Bandung
      </div>
      <div className='flex flex-col gap-3 text-[#A6A6A6] text-base font-medium border-dashed border-b-2 pb-6 mb-6'>
        <div className='flex gap-2 items-center'>
          <CiCalendar className='size-5 text-navy-blue' />{' '}
          <div>18 May, 2023</div>
        </div>
        <div className='flex gap-2 items-center'>
          <FaRegClock className='size-5 text-navy-blue' />{' '}
          <div>7.30 - 09.00 PM</div>
        </div>
        <div className='flex gap-2 items-center'>
          <MdOutlineLocationOn className='size-5 text-navy-blue' />{' '}
          <div>Lapangan Pussenif - Bandung</div>
        </div>
      </div>
      <div className='flex flex-col gap-1 text-[#848484]'>
        <div>Penjual :</div>
        <div className='flex gap-2 items-center'>
          <div className='size-9 bg-[#D9D9D9] rounded-full'></div>
          <div>Johnny Doe</div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
