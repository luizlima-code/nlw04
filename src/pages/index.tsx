import Head from 'next/head';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/CountDown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';


import styles from '../styles/pages/Home.module.css';
import React from 'react';
import { ChallengerBox } from '../components/ChallengerBox';
import { CountdowProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
  <div className={styles.container}>
    <Head>
      <title>Início | Moveit</title>
    </Head>
    <ExperienceBar/>
    <CountdowProvider>
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengerBox />
        </div>
      </section>
    </CountdowProvider>
  </div>
  )
}
