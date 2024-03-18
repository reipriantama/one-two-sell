import Button from '@/components/feature/ui/button';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='border-b-[1px] border-[#F0F0F0] '>
      <div className='px-12 bg-navy-blue'>
        <div className='flex justify-end gap-6 py-[10px] text-white text-xs'>
          <div>Tentang Kami</div>
          <div>Jual Tiket</div>
          <div>Artikel</div>
          <div>Pusat Bantuan</div>
          <div>Syarat & Ketentuan</div>
        </div>
      </div>
      <div className='flex justify-between items-center px-12 py-4'>
        <div className='flex gap-6'>
          <Image
            src='/assets/layout/navbar/oneTwoSellLogo.svg'
            alt='logo'
            width={48}
            height={48}
          />
          <div className='relative flex'>
            <input
              type='search'
              name=''
              id=''
              placeholder='Cari event impianmu disini'
              className='w-[604px] border-[1px] border-[#E3E3E3] rounded-[4px] px-3 py-4 text-[14px] '
            />
            <AiOutlineSearch className='absolute right-4 top-1/2 translate-y-[-50%] size-6 text-navy-blue' />
          </div>
        </div>
        <div className='flex gap-4'>
          <Button buttonText='Daftar' className='w-[121px]' outline />
          <Button buttonText='Masuk' className='w-[121px]' primary />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
