/* Write a navbar Next component */

import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'

const Navbar = () => {
  return (
    <div className="navbar">
      <Script src="//pull.cappuccicons.com/cpf.js" />
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/">
            <a>
              <img
                className="navbar-logo-image"
                src="/images/logo.png"
                alt="Logo"
              />
            </a>
          </Link>
        </div>
        <div className="navbar-links">
          <Link href="https://www.youtube.com/channel/UChiRebGN9a1oSoG_QZj6LjQ">
            <a><i class="cp cp-youtube"></i></a>
          </Link>
          <Link href="https://github.com/raccter">
            <a><i class="cp cp-github-o"></i></a>
          </Link>
          <Link href="https://www.instagram.com/bash_elliott/">
            <a><i class="cp cp-instagram-o"></i></a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar