import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from 'antd';
import CharacterCard from '../components/CharacterCard'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Evolute task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            The Rick and Morty universe
        </h1>
        <Button type="primary">Button</Button>
        <CharacterCard />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
