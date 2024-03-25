import Head from 'next/head';
import React from 'react';
import NavbarDashboard from './navbar';
import Footer from '../main/footer';
import FooterDashboard from './footer';

const LayoutDashboard = (props: any) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div>
        <NavbarDashboard />
        <div className={`${props.className}`}>{props.children} </div>
        <FooterDashboard />
      </div>
    </>
  );
};

export default LayoutDashboard;
