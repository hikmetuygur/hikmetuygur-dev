import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { GithubIcon, LinkedInIcon, XIcon } from './Icons';
import { motion } from 'framer-motion';

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

const NavBar = () => {
  const [navBarBgColor, setNavBarBgColor] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setNavBarBgColor(true);
    } else {
      setNavBarBgColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header
      className={`fixed top-0 z-10 flex h-24 w-full items-center justify-between px-32 py-8 font-medium transition-all duration-300 ease-in-out
      ${
        navBarBgColor
          ? 'bg-light bg-opacity-90 shadow-md backdrop-blur-md'
          : 'bg-light'
      }`}
    >
      <Logo />
      <nav>
        <CustomLink href='/home' title='Home' className='mr-4' />
        <CustomLink href='/about' title='About' className='mx-4' />
        <CustomLink href='/projects' title='Projects' className='mx-4' />
        <CustomLink href='/articles' title='Articles' className='ml-4' />
      </nav>

      <nav className='flex flex-wrap items-center justify-center'>
        <motion.a
          href='https://www.x.com'
          target={'_blank'}
          className='mr-3 mt-[4px] w-7'
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <XIcon />
        </motion.a>
        <motion.a
          href='https://www.linkedin.com'
          target={'_blank'}
          className='mx-3 w-7'
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href='https://www.github.com'
          target={'_blank'}
          className='ml-3 w-7'
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
        >
          <GithubIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default NavBar;
