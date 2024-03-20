import CarouselCard from '../../ui/carousel/carouselCard';

const PopularCity = ({ eventData }: { eventData: any }) => {
  return (
    <div>
      <div className='pb-12'>
        <div className='px-12  flex justify-between items-end mb-6'>
          <div className='text-2xl font-semibold'>Populer di Jakarta</div>
          {/* link ke halaman lihat semua */}
          <div className='text-sm text-[#757575] font-medium'>Lihat Semua</div>
        </div>
        <CarouselCard eventData={eventData} className='' />
      </div>
    </div>
  );
};
export default PopularCity;
