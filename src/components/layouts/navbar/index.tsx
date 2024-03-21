import Button from '@/components/feature/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import LoginModal from './loginModal';
import SignUpModal from './signUpModal';
import { cn } from '@/lib/utils';

const Navbar = (props: any) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setshowSignUpModal] = useState(false);

  const closeModal = () => {
    setShowLoginModal(false);
    setshowSignUpModal(false);
  };

  return (
    <div className='border-b-[1px] border-[#F0F0F0] '>
      {!props?.hidden && (
        <div className='px-12 bg-navy-blue'>
          <div className='flex justify-end gap-6 py-[10px] text-white text-xs'>
            <div>Tentang Kami</div>
            <div>Jual Tiket</div>
            <div>Artikel</div>
            <div>Pusat Bantuan</div>
            <div>Syarat & Ketentuan</div>
          </div>
        </div>
      )}
      <div
        className={cn(
          'flex justify-between items-center px-12 py-4',
          props.hidden && 'px-[276px]'
        )}
      >
        <div className='flex gap-6'>
          <Link href='/'>
            <Image
              src='/assets/layout/navbar/oneTwoSellLogo.svg'
              alt='logo'
              width={48}
              height={48}
            />
          </Link>
          {!props?.hidden && (
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
          )}
        </div>

        {!props.hidden && (
          <div className='flex gap-4'>
            <Button
              buttonText='Daftar'
              className='w-[121px] flex justify-center text-navy-blue font-semibold'
              outline
              onClick={() => setshowSignUpModal(true)}
            />
            <Button
              buttonText='Masuk'
              className='w-[121px] flex justify-center font-semibold'
              primary
              onClick={() => setShowLoginModal(true)}
            />
          </div>
        )}
        {showLoginModal && <LoginModal closeModal={closeModal} />}
        {showSignUpModal && <SignUpModal closeModal={closeModal} />}
      </div>
    </div>
  );
};

export default Navbar;
