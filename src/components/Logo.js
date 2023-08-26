import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import HuLogo from './LogoSvg';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='mt-2 flex items-center justify-center'>
      <MotionLink
        href='/'
        className='flex h-24 items-center justify-center px-4 py-2 text-2xl font-bold text-light'
        whileHover={{
          scale: 1.15,
          transition: { ease: 'anticipate' },
        }}
      >
        <HuLogo />
      </MotionLink>
    </div>
  );
};

export default Logo;
