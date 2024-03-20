import Breadcrumb from '@/components/feature/detail/breadcrumb';
import BuyTicket from '@/components/feature/detail/buyTicket';
import Description from '@/components/feature/detail/description';
import DetailCard from '@/components/feature/detail/detailCard';
import DetailTicket from '@/components/feature/detail/detailTicket';
import RecomendationEvent from '@/components/feature/detail/recomendationEvent';
import TermCondition from '@/components/feature/detail/termCondition';
import TicketAvailable from '@/components/feature/detail/ticketAvailable';
import Button from '@/components/feature/ui/button';
import Layout from '@/components/layouts';
import eventData from '@/data/eventData.json';
import { MdOutlineChevronRight } from 'react-icons/md';

const DetailProductPage = () => {
  return (
    <>
      <Layout className='p-12 space-y-12' title='Detail'>
        <div className='flex gap-6 '>
          <div className='flex-1'>
            <Breadcrumb />
            <div className='space-y-12'>
              <Description />
              <TermCondition />
            </div>
          </div>
          <div className='space-y-6'>
            <DetailCard />
            <DetailTicket />
            <TicketAvailable />
            <BuyTicket />
          </div>
        </div>
        <RecomendationEvent eventData={eventData} />
        <div className='flex justify-center'>
          <Button
            buttonText='Lihat ke event lainnya'
            link='/event'
            outline
            className='px-9 font-semibold'
            icon={<MdOutlineChevronRight className='size-' />}
          />
        </div>
      </Layout>
    </>
  );
};
export default DetailProductPage;
