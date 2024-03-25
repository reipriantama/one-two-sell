import BreadcrumbUser from '@/components/feature/main/userPage/userTransaction/breadcrumb';
import UserTitle from '@/components/feature/main/userPage/userTransaction/userTitle';
import VoucherBidCard from '@/components/feature/main/userPage/voucherBidCard';
import Layout from '@/components/layouts/main';

const VoucherBid = () => {
  return (
    <div>
      <Layout className='py-12 px-[276px] space-y-6' title='User-Voucher-Bid'>
        <BreadcrumbUser breadcrumbText='Voucher Bid' />
        <VoucherBidCard />
      </Layout>
    </div>
  );
};

export default VoucherBid;
