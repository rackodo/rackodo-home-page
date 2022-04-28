import Navbar from '../components/navbar'
import HeadPanel from '../components/headpanel'
import HeadInfo from '../components/headinfo'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeadInfo title="Bash Elliott"/>
      <HeadPanel />
    </div>
  )
}