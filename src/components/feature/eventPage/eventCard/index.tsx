import Image from 'next/image';

const EventCard = ({ eventData }: { eventData: any }) => {
  return (
    <div className='grid grid-cols-3 gap-x-6 gap-y-6'>
      {eventData?.map((data: any, index: number) => (
        <div key={index}>
          <div className='mb-3'>
            <Image
              src={data.image}
              alt='logo'
              width={318}
              height={240}
              className='rounded-xl bg-gray-500 h-[240px] w-full object-cover'
            />
          </div>
          <div className='flex flex-col gap-1 text-[#4A62A2] font-semibold mb-3'>
            <div className={`text-sm font-semibold`}>{data.date}</div>
            <div className={`text-xl `}>{data.title}</div>
            <div className='text-[#848484] text-sm font-normal'>
              {data.location}
            </div>
          </div>
          <div className={`text-lg text-[#4A62A2] font-bold `}>
            {data.price}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
