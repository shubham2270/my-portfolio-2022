import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

import Layout from 'src/components/Layout';

export default function About() {
  return (
    <>
      <Head>
        <title>About page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        I have been working as front-end developer since 2019, I’ve always been someone who has both a creative and a
        logical side. I have done Graphic web design/Development course from Arena Animation and also taken Full Stack
        Web Development course available online so that I can take my web skills to next level and also keep learning
        new technologies.
      </main>
    </>
  );
}
