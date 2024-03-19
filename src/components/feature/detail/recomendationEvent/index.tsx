import CarouselCard from '../../ui/carousel/carouselCard';

const RecomendationEvent = ({ eventData }: { eventData: any }) => {
  return (
    <div className=''>
      <div className=' pb-12'>
        <div className='flex justify-between items-end mb-6'>
          <div className='text-2xl font-semibold'>Rekomendasi Event Serupa</div>
          {/* link ke halaman lihat semua */}
          <div className='text-sm text-[#757575] font-medium'>Lihat Semua</div>
        </div>
        <CarouselCard eventData={eventData} className='' />
      </div>
    </div>
  );
};

export default RecomendationEvent;
