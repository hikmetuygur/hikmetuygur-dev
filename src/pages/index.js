import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/developer-pic.jpg';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import { useRouter } from 'next/router';
import HireMe from '@/components/HireMe';
import lightBulbImage from '../../public/images/lightbulb.svg';

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Hikmet Uygur</title>
        <meta
          name='description'
          content="Hikmet's personal developer web page."
        />
      </Head>
      <main className='flex min-h-screen w-full items-center text-dark'>
        <Layout>
          <div className='flex w-full items-center justify-between'>
            <div className='w-2/5'>
              <Image
                src={profilePic}
                alt='An image created by AI from prompt.'
                className='rounded-full'
              />
            </div>
            <div className='flex w-1/2 flex-col items-center self-center'>
              <AnimatedText
                text='Turning Vision Into Reality With Code And Design.'
                className='!text-left !text-7xl'
              />
              <p className='my-4 text-base font-medium'>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className='mt-2 flex items-center self-start'>
                <Link
                  href='/Hikmet-Uygur-CV.pdf'
                  target={'_blank'}
                  className='flex items-center rounded-lg border-2 border-solid border-transparent bg-dark p-2.5 px-6 text-lg font-semibold text-light transition-colors duration-300 ease-in-out hover:border-dark hover:bg-light hover:text-dark'
                  download={true}
                >
                  CV <LinkArrow className={'ml-2 w-6'} />
                </Link>
                <CustomLink
                  href='mailto:uygurhikmet@gmail.com'
                  target={'_blank'}
                  className='ml-8 text-lg font-semibold capitalize text-dark'
                  title='Contact'
                />
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div>
          <Image
            src={lightBulbImage}
            alt='light bulb'
            className='h-auto w-full'
          />
        </div>
      </main>
    </>
  );
}
