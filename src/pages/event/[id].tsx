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
  const [eventDataRecomendation, setEventDataRecomendation] = useState([]);
  const [selectedTicketPrice, setSelectedTicketPrice] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [ticketData, setTicketData] = useState<any>({});

  const totalTicketPrice = selectedTicketPrice + count;
  const { query } = useRouter();

  const handleBuyTicket = () => {
    const dataToSend = {
      totalTicketPrice: totalTicketPrice,
      count: count,
    };

    setTicketData(dataToSend);
  };

  const handleTicketSelect = (price: number) => {
    setSelectedTicketPrice(price);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/eventData/${query.id}`);
        const data = await res.json();
        setEventData(data);
      } catch (error) {
        console.log('error fetching data', error);
      }
    };

    fetchData();
  }, [query.id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/eventData');
        let data = await res.json();

        if (query.id) {
          data = data.filter((item: any) => item.id.toString() !== query.id);
        }

        setEventDataRecomendation(data);
      } catch (error) {
        console.log('error fetching data', error);
      }
    };

    fetchData();
  }, [query.id]);

  return (
    <>
      <Layout className='py-12 space-y-12' title='Detail'>
        <div className='flex gap-6 px-12 '>
          <div className='flex-1'>
            {/* <div>breadcrumb</div> */}
            <div className='space-y-12'>
              <Description eventData={eventData} />
              <TermCondition />
            </div>
          </div>
          <div className='space-y-6'>
            <DetailCard eventData={eventData} />
            <DetailTicket
              onTicketSelect={handleTicketSelect}
              eventData={eventData}
            />
            <TicketAvailable
              selectedTicketPrice={selectedTicketPrice}
              handleBuyTicket={handleBuyTicket}
            />
            <BuyTicket ticketData={ticketData} />
          </div>
        </div>
        <RecomendationEvent eventData={eventDataRecomendation} />
        <div className='flex justify-center'>
          <Button
            buttonText='Lihat ke event lainnya'
            link='/event'
            outline
            className='font-semibold px-9'
            icon={<MdOutlineChevronRight className='size-' />}
          />
        </div>
      </Layout>
    </>
  );
};

export default DetailProductPage;
