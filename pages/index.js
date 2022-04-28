import Navbar from '../components/navbar'
import HeadPanel from '../components/headpanel'
import HeadInfo from '../components/headinfo'

export default function Home() {
  return (
    <div>
      <HeadInfo title="Bash Elliott" />
      <HeadPanel />
      <Navbar />
    </div>
  )
}