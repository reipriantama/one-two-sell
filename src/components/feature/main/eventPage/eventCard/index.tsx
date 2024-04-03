import Image from 'next/image';
import Link from 'next/link';
import { EventDataType } from '@/types/eventData.type';

interface EventCardProps {
  eventData: EventDataType[];
  price: (price: number) => string;
}

const EventCard: React.FC<EventCardProps> = ({ eventData, price }) => {
  return (
    <div className='grid grid-cols-3 gap-x-6 gap-y-6'>
      {eventData?.map((data) => (
        <div key={data.id}>
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
            <div className={`text-xl `}>
              <Link href={`/event/${data.id}`}>{data.title}</Link>
            </div>
            <div className='text-[#848484] text-sm font-normal'>
              {data.location}
            </div>
          </div>
          <div className={`text-lg text-[#4A62A2] font-bold `}>
            {price(data.price)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventCard;
