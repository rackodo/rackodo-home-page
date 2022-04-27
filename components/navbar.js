/* Write a navbar Next component */

import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/">
            <a>
              <img
                className="navbar-logo-image"
                src="/favicon.ico"
                alt="Logo"
              />
            </a>
          </Link>
        </div>
        <div className="navbar-links">
          <Link href="/">
            <a>My Works</a>
          </Link>
          <Link href="/about">
            <a>About me</a>
          </Link>
          <Link href="/contact">
            <a>Contact Info</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar