import { useState, FormEvent, useEffect } from 'react';
import Button from '@/components/ui/main/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';

interface LoginModalProps {
  closeModal: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    if (isUserLoggedIn === 'true') {
      setUserLogin(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    const users: Array<{ email: string; userName: string; password: string }> =
      JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find(
      (user) =>
        user.userName === formData.userName &&
        user.password === formData.password
    );

    if (user) {
      if (userLogin) {
        alert('Anda sudah login');
      } else {
        localStorage.setItem('isUserLoggedIn', 'true');
        localStorage.setItem('userName', user.userName);
        setUserLogin(true);
        closeModal();
      }
    } else {
      alert('Username atau password salah');
    }
  };

  return (
    <div className='fixed z-20 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
      <div className='w-full max-w-[540px] bg-white p-9 space-y-12'>
        <div className='flex justify-between items-center'>
          <Image
            src='/assets/main/layout/navbar/oneTwoSellLogo.svg'
            alt='logo'
            width={72}
            height={72}
          />
          <IoClose
            className='size-[48px] text-navy-blue cursor-pointer'
            onClick={closeModal}
          />
        </div>
        <div className='space-y-6'>
          <div className='space-y-1'>
            <h1 className='text-5xl font-bold text-navy-blue'>
              Selamat Datang!
            </h1>
            <p className='text-xl text-navy-blue'>
              Silahkan masukan informasi anda untuk masuk
            </p>
          </div>
          <form onSubmit={handleLogin}>
            <div className='space-y-2 text-[#2D4074]'>
              <div className='space-y-1'>
                <label htmlFor='userName'>Username*</label>{' '}
                <input
                  type='text'
                  id='userName'
                  name='userName'
                  placeholder='Masukan username anda'
                  className='border-[1px] border-[#E3E3E3] rounded-[4px] p-4 text-base w-full'
                  value={formData.userName}
                  onChange={handleChange}
                />
              </div>
              <div className='space-y-1'>
                <label htmlFor='password'>Password*</label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Masukan password anda'
                  className='border-[1px] border-[#E3E3E3] rounded-[4px] p-4 text-base w-full'
                  value={formData.password}
                  onChange={handleChange}
                />
                <p className='text-xs text-end text-[#2D4074] cursor-pointer'>
                  Lupa Password?
                </p>
              </div>
            </div>
            <div className='space-y-4'>
              <Button
                buttonText='Login'
                className='w-full justify-center text-white bg-[#4A62A2] hover:border-[#4A62A2] hover:bg-[#2D4074]'
              />
              <p className='flex justify-center text-navy-blue'>
                Pengguna baru ?
                <Link href='?signUpModal=true' className='underline'>
                  {' '}
                  Daftar disini
                </Link>
              </p>
            </div>
          </form>
          <div className='space-y-2'>
            <p className='flex justify-center text-navy-blue'>
              atau masuk dengan
            </p>
            <Button
              buttonText='Masuk dengan Google'
              className='w-full justify-center text-white bg-[#4A62A2]  hover:border-[#4A62A2] hover:bg-[#2D4074]'
            />
          </div>
        </div>
        <p className='flex justify-center text-sm font-light'>
          Copyright © 2023 12 Sell
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
