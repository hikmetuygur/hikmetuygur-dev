import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/developer-pic.jpg';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';

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
                  className='flex items-center rounded-lg border-2 border-solid border-transparent bg-dark p-2.5 px-6 text-lg font-semibold text-light hover:border-dark hover:bg-light hover:text-dark'
                  download={true}
                >
                  CV <LinkArrow className={'ml-1 w-6'} />
                </Link>
                <Link
                  href='mailto:uygurhikmet@gmail.com'
                  target={'_blank'}
                  className='ml-4 text-lg font-semibold capitalize text-dark underline hover:scale-110'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
