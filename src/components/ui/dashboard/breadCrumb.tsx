import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const BreadCrumbDashboard = (props: any) => {
  const { query } = useRouter();
  const isString = (text: any): text is string => {
    return typeof text === 'string';
  };

  let formattedSlug = '';

  if (isString(query.slug)) {
    formattedSlug = query.slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
  return (
    <div className='flex gap-1 items-center'>
      <Link href={props.breadCrumbLink} className='text-[#989898] text-sm'>
        {props.breadCrumbTextLink}
      </Link>
      <Image
        src={'/assets/dashboard/accountListDetail/arrowRight.svg'}
        alt='logo'
        width={24}
        height={24}
      />
      <p className='text-[#4A62A2] text-sm font-bold'>
        {formattedSlug ? <>{formattedSlug}</> : <>{props.breadCrumbText}</>}
      </p>
    </div>
  );
};

export default BreadCrumbDashboard;
