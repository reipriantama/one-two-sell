import LoginCard from '@/components/feature/dashboard/loginPage';
import Image from 'next/image';

const Dashboard = () => {
  const backgroundImageUrl = '/assets/dashboard/login/backgroundLogin.png';

  return (
    <div className='bg-[#2D4074] relative'>
      <div
        className='flex h-screen grayscale'
        style={{
          background: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          // mixBlendMode: 'multiply',
        }}
      ></div>
      <div className='absolute top-[356px] left-[351px]'>
        <Image
          src='/assets/dashboard/login/logo.svg'
          alt='logo'
          width={108}
          height={108}
        />
      </div>
      <LoginCard className='absolute top-9 right-9' />
    </div>
  );
};
export default Dashboard;
