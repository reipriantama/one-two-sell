import Image from 'next/image';

const Banner = () => {
  return (
    <div className='p-12 '>
      <div className='bg-[#E0E0E0] w-full h-[200px] rounded-xl'>
        <Image
          src='/assets/main/landingPage/banner/imageBanner.png'
          alt='banner'
          width={200}
          height={200}
          className='w-full h-full object-cover rounded-xl'
        />
      </div>
    </div>
  );
};
export default Banner;
