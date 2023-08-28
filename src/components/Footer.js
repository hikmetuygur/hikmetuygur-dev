import Link from 'next/link';
import React from 'react';
import Layout from './Layout';
import { useRouter } from 'next/router';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      <span
        className={`
      ease absolute -bottom-0.5 left-0 inline-block h-[2px] bg-black transition-[width] duration-300 group-hover:w-full
      ${router.asPath === href ? 'w-full' : 'w-0'}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark text-lg font-medium'>
      <Layout className='py- flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>
          Build with <span className='px-1 text-2xl text-primary'>&#9825;</span>{' '}
          by&nbsp;
          <CustomLink href='/www.linkedin.com' title='Hikmet' />
        </div>
        <CustomLink href='mailto:uygurhikmet@gmail.com' title='Say Hello!' />
      </Layout>
    </footer>
  );
};

export default Footer;
