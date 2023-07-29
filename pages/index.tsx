import Head from 'next/head'
import List from '../components/List'
import { Typography } from 'antd'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Evolute task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Header />
          <Typography.Title style={{ textAlign: 'center' }} level={1}>
              The Rick and Morty universe
          </Typography.Title>
          <List />
      </main>
    </div>
  )
}