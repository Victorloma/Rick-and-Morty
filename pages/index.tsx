import Head from 'next/head'
import List from '../components/List'
import { Layout, Menu, Typography } from 'antd'

const { Header, Content, Footer } = Layout

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Evolute task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Typography.Title style={{ textAlign: 'center' }} level={1}>
              The Rick and Morty universe
          </Typography.Title>
          <List />
      </main>
    </div>
  )
}