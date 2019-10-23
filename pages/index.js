import Head from 'next/head'
import Link from 'next/link'
import '../styles/main.css'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <li>
      <Link href="/drumkit">
        <a>React Drum Kit</a>
      </Link>
    </li>

  </div>
)

export default Home
