import { useState, FormEvent } from 'react';
import Button from '@/components/ui/main/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';

interface SignUpModalProps {
  closeModal: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    email: '',
    userName: '', 
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const signUp = (e: FormEvent) => {
    e.preventDefault();

    const users: Array<{ email: string; userName: string; password: string }> =
      JSON.parse(localStorage.getItem('users') || '[]');

    const isExistingUser = users.some(
      (user) =>
        user.email === formData.email || user.userName === formData.userName // Ubah "name" menjadi "userName"
    );

    if (isExistingUser) {
      alert('Email atau username sudah terdaftar');
      return;
    }

    const newUser = {
      email: formData.email,
      userName: formData.userName,
      password: formData.password,
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Pendaftaran berhasil');
    closeModal();
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
              Silahkan masukan informasi anda untuk daftar
            </p>
          </div>
          <form onSubmit={signUp} className='space-y-4'>
            <div className='space-y-2 text-[#2D4074]'>
              <div className='space-y-1'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  placeholder='Masukan email anda'
                  className='border-[1px] border-[#E3E3E3] rounded-[4px] p-4 text-base w-full'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className='space-y-1'>
                <label htmlFor='userName'>Username</label>{' '}
                {/* Ubah "name" menjadi "userName" */}
                <input
                  type='text'
                  id='userName' // Ubah "name" menjadi "userName"
                  name='userName' // Ubah "name" menjadi "userName"
                  placeholder='Masukan username anda'
                  className='border-[1px] border-[#E3E3E3] rounded-[4px] p-4 text-base w-full'
                  value={formData.userName} // Ubah "name" menjadi "userName"
                  onChange={handleChange}
                />
              </div>
              <div className='space-y-1'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='Masukan password anda'
                  className='border-[1px] border-[#E3E3E3] rounded-[4px] p-4 text-base w-full'
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='space-y-4'>
              <Button
                buttonText='Daftar'
                className='w-full justify-center text-white bg-[#4A62A2] hover:border-[#4A62A2] hover:bg-[#2D4074]'
              />
              <p className='flex justify-center text-navy-blue'>
                Sudah punya akun ?
                <Link
                  href='/?loginModal=true'
                  className='underline'
                  onClick={closeModal}
                >
                  {' '}
                  Klik disini
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
              className='w-full justify-center text-white bg-[#4A62A2] hover:border-[#4A62A2] hover:bg-[#2D4074]'
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

export default SignUpModal;
