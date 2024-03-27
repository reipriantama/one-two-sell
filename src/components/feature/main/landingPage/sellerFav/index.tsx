import TitleEvent from '@/components/ui/main/titleCarousel';
import Image from 'next/image';

const SellerFav = () => {
  const profileData = [
    {
      image: '/assets/main/landingPage/sellerFav/image1.png',
      name: 'Johnny Doe',
      location: 'Jakarta',
    },
    {
      image: '/assets/main/landingPage/sellerFav/image2.png',
      name: 'Lorem',
      location: 'Bandung',
    },
    {
      image: '/assets/main/landingPage/sellerFav/image3.png',
      name: 'Ipsum',
      location: 'Semarang',
    },
    {
      image: '/assets/main/landingPage/sellerFav/image4.png',
      name: 'Dolor',
      location: 'Surabaya',
    },
    {
      image: '/assets/main/landingPage/sellerFav/image5.png',
      name: 'Sit',
      location: 'Bali',
    },
    {
      image: '/assets/main/landingPage/sellerFav/image6.png',
      name: 'Amet',
      location: 'Medan',
    },
  ];
  return (
    <div className='px-12 pb-12'>
      <TitleEvent titleText='Penjual Favorit' />
      <div className='flex gap-6 mb-12 2xl:gap-12'>
        {profileData.map((profile: any, index: number) => (
          <div className='flex flex-col items-center' key={index}>
            <div className=''>
              <Image
                className='rounded-full bg-[#E0E0E0] size-[204px] 2xl:size-[265px] object-cover'
                src={profile.image}
                alt='logo'
                width={204}
                height={204}
              />
            </div>
            <div className='text-xl text-[#2D4074] font-semibold'>
              {profile.name}
            </div>
            <div className='text-[#848484] text-base'>{profile.location}</div>
          </div>
        ))}
      </div>
      <div className='flex gap-6'>
        <div className='2xl:w-[900px] w-[660px] h-[360px] bg-[#E0E0E0] rounded-xl'>
          <Image
            src='/assets/main/landingPage/sellerFav/imageConcert1.png'
            alt='logo'
            width={660}
            height={360}
            className='w-full h-full object-cover rounded-xl'
          />
        </div>
        <div className='flex flex-col gap-6'>
          <div className='2xl:w-[900px] w-[660px] h-[168px] bg-[#E0E0E0] rounded-xl'>
            <Image
              src='/assets/main/landingPage/sellerFav/imageConcert2.png'
              alt='logo'
              width={660}
              height={360}
              className='w-full h-full object-cover rounded-xl'
            />
          </div>
          <div className='flex gap-6'>
            <div className='2xl:w-[438px] w-[318px] h-[168px] bg-[#E0E0E0] rounded-xl'>
              <Image
                src='/assets/main/landingPage/sellerFav/imageConcert3.png'
                alt='logo'
                width={660}
                height={360}
                className='w-full h-full object-cover rounded-xl'
              />
            </div>
            <div className='2xl:w-[438px] w-[318px] h-[168px] bg-[#E0E0E0] rounded-xl'>
              <Image
                src='/assets/main/landingPage/sellerFav/imageConcert4.png'
                alt='logo'
                width={660}
                height={360}
                className='w-full h-full object-cover rounded-xl'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellerFav;
