import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import HeadPanel from '../components/headpanel'
import HeadInfo from '../components/headinfo'

export default function Home() {
  return (
    <div>
      <HeadInfo title="Bash Elliott" />
      <HeadPanel />
      <Navbar/>
    </div>
  )
}
