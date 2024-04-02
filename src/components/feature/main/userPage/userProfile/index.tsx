import Image from 'next/image';
import React from 'react';
import Button from '../../../../ui/main/button';
import { useRouter } from 'next/router';

const UserProfile = () => {
  const { query } = useRouter();

  console.log(query);
  return (
    <div className='p-10 flex justify-between border-2 rounded-2xl shadow-sm '>
      <div className='flex gap-6  flex-1'>
        <div className=''>
          <Image
            src='/assets/main/landingPage/sellerFav/imageConcert1.png'
            alt='logo'
            width={200}
            height={200}
            className='rounded-full bg-[#D9D9D9] size-[200px] object-cover'
          />
        </div>
        <div className='space-y-12 mr-[72px]'>
          <div className='flex gap-[156px]'>
            <p className='text-[34px] font-semibold'>{query.slug}</p>
            {/* <div>
              <Image
                src='assets/main/user/userProfile/verified.svg'
                alt='logo'
                width={44}
                height={44}
                className='rounded-full size-[44px] object-cover'
              />
            </div> */}
          </div>
          <div className='space-y-'>
            <div className='flex gap-9'>
              <div className='space-y-1 w-[160px]'>
                <p className='text-[#9E9E9E] text-sm'>Email</p>
                <p className='text-[#212121]'>johndoe@mail.com</p>
              </div>
              <div className='space-y-1 w-[160px]'>
                <p className='text-[#9E9E9E] text-sm'>Nomor Telefon</p>
                <p className='text-[#212121]'>081231235423</p>
              </div>
            </div>
            <div className='flex gap-9 '>
              <div className='space-y-1 w-[160px]'>
                <p className='text-[#9E9E9E] text-sm'>Saldo Penjualan</p>
                <p className='text-[#212121]'>Rp 850.000,-</p>
              </div>
              <div className='space-y-1 w-[160px]'>
                <p className='text-[#9E9E9E] text-sm'>Nomor Rekening</p>
                <p className='text-[#212121]'>BCA 27‑9300‑3056</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button
        buttonText='Edit Profil'
        className='text-[#4A62A2] text-[16px] py-3 px-9 font-semibold'
        outline
      />
    </div>
  );
};

export default UserProfile;
