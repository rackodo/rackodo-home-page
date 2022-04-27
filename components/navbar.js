/* Write a navbar Next component */

import Image from 'next/image'
import Link from 'next/link'

const Navbar = ({mode}) => {
  return (
    <div className="navbar ${mode}">
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
          <Link href="/works">
            <a>My Works</a>
          </Link>
          <Link href="/about">
            <a>About Me</a>
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