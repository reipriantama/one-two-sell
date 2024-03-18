import Image from 'next/image';

const SellerFav = () => {
  const profileData = [
    {
      name: 'Johnny Doe',
      location: 'Jakarta',
    },
    {
      name: 'Lorem',
      location: 'Bandung',
    },
    {
      name: 'Ipsum',
      location: 'Semarang',
    },
    {
      name: 'Dolor',
      location: 'Surabaya',
    },
    {
      name: 'Sit',
      location: 'Bali',
    },
    {
      name: 'Amet',
      location: 'Medan',
    },
  ];
  return (
    <div className='px-12 pb-12'>
      <div className='flex justify-between items-end mb-6'>
        <div className='text-2xl font-semibold'>Penjual Favorit</div>
        {/* link ke halaman lihat semua */}
        <div className='text-sm text-[#757575] font-medium'>Lihat Semua</div>
      </div>
      <div className='flex gap-6 mb-12'>
        {profileData.map((profile: any, index: number) => (
          <div className='flex flex-col items-center' key={index}>
            <Image
              className='rounded-full bg-[#E0E0E0]'
              src='/assets/layout/navbar/default.svg'
              alt='logo'
              width={204}
              height={204}
            />
            <div className='text-xl text-[#2D4074] font-semibold'>
              {profile.name}
            </div>
            <div className='text-[#848484] text-base'>{profile.location}</div>
          </div>
        ))}
      </div>
      <div className='flex gap-6'>
        <div className='w-[660px] h-[360px] bg-[#E0E0E0] rounded-xl'>left</div>
        <div className='flex flex-col gap-6'>
          <div className='w-[660px] h-[168px] bg-[#E0E0E0] rounded-xl'>
            right
          </div>
          <div className='flex gap-6'>
            <div className='w-[318px] h-[168px] bg-[#E0E0E0] rounded-xl'></div>
            <div className='w-[318px] h-[168px] bg-[#E0E0E0] rounded-xl'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellerFav;
