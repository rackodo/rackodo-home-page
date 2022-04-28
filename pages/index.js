import Navbar from '../components/navbar'
import HeadPanel from '../components/headpanel'
import HeadInfo from '../components/headinfo'
import Info from '../components/info'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeadInfo title="Bash Elliott"/>
      <HeadPanel />
      <Info />
      <Footer />
    </div>
  )
}