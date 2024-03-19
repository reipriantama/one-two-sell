import { Inter } from 'next/font/google';
import Layout from '@/components/layouts';
import FilterBar from '@/components/feature/landingPage/filterBar';
import Banner from '@/components/feature/landingPage/banner';
import SellerFav from '@/components/feature/landingPage/sellerFav';
import TitleCarousel from '@/components/feature/landingPage/titleCarousel';
import SelectedEvent from '@/components/feature/landingPage/selectedEvent';
import BestEvent from '@/components/feature/landingPage/bestEvent';
import eventData from '@/data/eventData.json';
import PopularWeek from '@/components/feature/landingPage/popularWeek';
import PopularCity from '@/components/feature/landingPage/popularCity';
import Button from '@/components/feature/ui/button';
import { MdOutlineChevronRight } from 'react-icons/md';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <FilterBar />
        <TitleCarousel />
        <SelectedEvent eventData={eventData} />
        <BestEvent eventData={eventData} />
        <Banner />
        <PopularWeek eventData={eventData} />
        <SellerFav />
        <PopularCity eventData={eventData} />
        <div className='flex justify-center pb-12'>
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
}
