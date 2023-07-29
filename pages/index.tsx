import Head from 'next/head'
import List from '../components/List'
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
          <h1 className='Chewy'>
              The Rick and Morty universe
          </h1>
          <List />
      </main>
    </div>
  )
}