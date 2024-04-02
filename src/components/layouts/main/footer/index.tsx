import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  const cityData = [
    'Jakarta',
    'Bandung',
    'Surabaya',
    'Bali',
    'Yogyakarta',
    'Medan',
    'Semua Kota',
  ];

  const eventData = [
    'Festival',
    'Konser',
    'Olahraga',
    'Workshop & Seminar',
    'Teater & Komedi',
    'Atraksi',
    'Semua Kategori',
  ];

  return (
    <div className=' '>
      <div className='p-12 flex justify-center bg-gradient-footer text-white'>
        <div className='flex gap-6'>
          <div className='w-[204px]'>
            <h1 className='text-xl font-semibold mb-6'>Kantor Kami</h1>
            <p className='text-sm'>
              Lorem Ipsum Dolor Sit Amet <br /> JL Perak Barat No. 22, Jakarta
              22560, Indonesia
            </p>
          </div>
          <div className='w-[204px]'>
            <h1 className='text-xl font-semibold mb-6'>Hubungi Kami</h1>
            <p className='text-sm flex items-center mb-3'>
              <FaPhoneAlt className='inline mr-2' /> 021 57906373 <br />
            </p>
            <p className='text-sm flex items-center mb-6'>
              <IoMdMail className='inline mr-2' /> info@123sell.id
            </p>
            <div className='flex gap-4'>
              <Image
                src='/assets/layout/footer/instagram.png'
                alt='logo'
                width={24}
                height={24}
              />
              <Image
                src='/assets/layout/footer/facebook.png'
                alt='logo'
                width={24}
                height={24}
              />
              <Image
                src='/assets/layout/footer/youtube.png'
                alt='logo'
                width={24}
                height={24}
              />
              <Image
                src='/assets/layout/footer/twitter.png'
                alt='logo'
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className='w-[204px]'>
            <h1 className='text-xl font-semibold mb-6'>Lokasi Event</h1>

            <div className='text-sm'>
              {cityData.map((item, index) => (
                <div key={index} className='mb-3'>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className='w-[204px]'>
            <h1 className='text-xl font-semibold mb-6'>Jenis Event</h1>
            <div className='text-sm'>
              {eventData.map((item, index) => (
                <div key={index} className='mb-3'>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center py-5 bg-white text-navy-blue text-sm'>
        Copyright © 2023 12 Sell
      </div>
    </div>
  );
};

export default Footer;
