import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function Contact() {
    return(
        <div>
            <Head>
                <title>Contact Info</title>
            </Head>
            <Navbar />
        </div>
    )
}