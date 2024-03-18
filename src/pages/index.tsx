import { Inter } from 'next/font/google';
import Layout from '@/components/layouts';
import FilterBar from '@/components/feature/landingPage/filterBar';
import Banner from '@/components/feature/landingPage/banner';
import SellerFav from '@/components/feature/landingPage/sellerFav';
import TitleCarousel from '@/components/feature/landingPage/titleCarousel';
import SelectedEvent from '@/components/feature/landingPage/selectedEvent';
import BestEvent from '@/components/feature/landingPage/bestEvent';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Layout className>
        <FilterBar />
        <TitleCarousel />
        <SelectedEvent />
        <BestEvent />
        <Banner />
        <SellerFav />
        <h1>ini HomePage</h1>
      </Layout>
    </div>
  );
}
