import Button from '@/components/ui/main/button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import LoginModal from './loginModal';
import SignUpModal from './signUpModal';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/router';
import { FaRegBell } from 'react-icons/fa';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { IoMdArrowDropdown } from 'react-icons/io';

const Navbar = (props: any) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setshowSignUpModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add isLoggedIn state
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown

  const router = useRouter();

  const closeModal = () => {
    setShowLoginModal(false);
    setshowSignUpModal(false);
    router.push('/', undefined, { shallow: true }); // clear query params
  };

  useEffect(() => {
    const { loginModal, signUpModal } = router.query;

    if (loginModal === 'true') {
      setShowLoginModal(true);
    }

    if (signUpModal === 'true') {
      setshowSignUpModal(true);
    }

    // Check if user is logged in
    const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    if (isUserLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
    if (!localStorage.getItem('isUserLoggedIn')) {
      setIsLoggedIn(false);
    }
  }, [router.query, isLoggedIn]);

  const openLoginModal = () => {
    setShowLoginModal(true);
    router.push('/?loginModal=true', undefined, { shallow: true });
  };

  const openSignUpModal = () => {
    setshowSignUpModal(true);
    router.push('/?signUpModal=true', undefined, { shallow: true });
  };

  const handleLogout = () => {
    localStorage.removeItem('isUserLoggedIn');
    setIsLoggedIn(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Toggle dropdown state
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
              src='/assets/main/layout/navbar/oneTwoSellLogo.svg'
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

        {isLoggedIn && (
          <>
            <div className='flex gap-2 items-center relative'>
              <FaRegBell className='size-6' />
              <MdOutlineAccountCircle className='size-6' />
              <Link
                href={`/user/${localStorage.getItem('userName')}`}
                className='font-semibold'
              >
                {localStorage.getItem('userName') || 'guest'}
              </Link>
              <button className='cursor-pointer' onClick={toggleDropdown}>
                <IoMdArrowDropdown />
              </button>
              {showDropdown && (
                <div className='absolute top-6 right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-10'>
                  <button
                    className='block w-full text-left px-4 py-2 hover:bg-gray-100'
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {!props.hidden && !isLoggedIn && (
          <div className='flex gap-4'>
            <Button
              buttonText='Daftar'
              className='w-[121px] flex justify-center text-navy-blue font-semibold'
              outline
              onClick={openSignUpModal}
            />
            <Button
              buttonText='Masuk'
              className='w-[121px] flex justify-center font-semibold'
              primary
              onClick={openLoginModal}
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
