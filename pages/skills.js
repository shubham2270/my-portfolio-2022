import Head from 'next/head';
import Image from 'next/image';

import Skills from 'src/components/Skills';

import styles from '../styles/Home.module.scss';

export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Skills page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Skills />
      </main>
    </>
  );
}
