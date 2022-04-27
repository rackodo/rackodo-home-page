import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function About() {
    return(
        <div>
            <Head>
                <title>About Me</title>
            </Head>
            <Navbar />
        </div>
    )
}