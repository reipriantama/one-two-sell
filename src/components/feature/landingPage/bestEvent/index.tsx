import CarouselCard from '../../ui/carousel/carouselCard';

const BestEvent = ({ eventData }: { eventData: any }) => {
  return (
    <div className=' py-12 bg-navy-blue text-white'>
      <div className='px-12 flex justify-between items-end mb-6'>
        <div className='text-2xl font-semibold'>Event Terlaris</div>
        {/* link ke halaman lihat semua */}
        <div className='text-sm text-[#D9E9E3] font-medium'>Lihat Semua</div>
      </div>
      <div>
        <CarouselCard eventData={eventData} className='text-white' />
      </div>
    </div>
  );
};

export default BestEvent;
