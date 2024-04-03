import BuyTicket from '@/components/feature/main/detail/buyTicket';
import Description from '@/components/feature/main/detail/description';
import DetailCard from '@/components/feature/main/detail/detailCard';
import DetailTicket from '@/components/feature/main/detail/detailTicket';
import RecomendationEvent from '@/components/feature/main/detail/recomendationEvent';
import TermCondition from '@/components/feature/main/detail/termCondition';
import TicketAvailable from '@/components/feature/main/detail/ticketAvailable';
import Button from '@/components/ui/main/button';
import Layout from '@/components/layouts/main';
import { MdOutlineChevronRight } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const DetailProductPage = () => {
  const [eventData, setEventData] = useState([]);
  const { query } = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/eventData?id=${query.id}`);
        const data = await res.json();
        setEventData(data);
      } catch (error) {
        console.log('error fetching data', error);
      }
    };

    fetchData();
  }, [query.id]);

  console.log(query.id);

  return (
    <>
      <Layout className='py-12 space-y-12' title='Detail'>
        <div className='px-12 flex gap-6 '>
          <div className='flex-1'>
            {/* <div>breadcrumb</div> */}
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
