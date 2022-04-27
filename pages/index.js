import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import HeadPanel from '../components/headpanel'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
        <HeadPanel title="yeet" bg="images/station.JPG"/>
      <Navbar/>
    </div>
  )
}
