import Breadcrumb from '@/components/feature/detail/breadcrumb';
import Description from '@/components/feature/detail/description';
import DetailCard from '@/components/feature/detail/detailCard';
import DetailTicket from '@/components/feature/detail/detailTicket';
import RecomendationEvent from '@/components/feature/detail/recomendationEvent';
import Button from '@/components/feature/ui/button';
import Layout from '@/components/layouts';
import eventData from '@/data/eventData.json';
import { MdOutlineChevronRight } from 'react-icons/md';

const DetailProductPage = () => {
  return (
    <div>
      <Layout className='p-12'>
        <div className='flex gap-6'>
          <div className='flex-1'>
            <Breadcrumb />
            <Description />
          </div>
          <div className='space-y-6'>
            <DetailCard />
            <DetailTicket />
          </div>
        </div>
        <RecomendationEvent eventData={eventData} />
        <div className='flex justify-center'>
          <Button
            buttonText='Lihat ke event lainnya'
            outline
            className='px-9 font-semibold'
            icon={<MdOutlineChevronRight className='size-' />}
          />
        </div>
      </Layout>
    </div>
  );
};
export default DetailProductPage;
