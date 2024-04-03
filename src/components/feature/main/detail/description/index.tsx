import Image from 'next/image';

const Description = (eventData: any) => {
  console.log(eventData.eventData.image);
  return (
    <div className='space-y-12'>
      <div className='w-full bg-[#E0E0E0] h-[306px] rounded-xl'>
        <Image
          src={eventData.eventData.image}
          alt='logo'
          width={384}
          height={480}
          className='rounded-xl bg-gray-500 h-[306px] w-full object-cover object-top'
        />
      </div>
      <div className='space-y-4'>
        <div className='text-2xl font-semibold'>Deskripsi</div>
        <p className='text-justify text-[#667085] leading-7'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};
export default Description;
