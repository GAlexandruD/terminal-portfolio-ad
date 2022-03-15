import React from 'react'
import { BsGithub, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { SiUdemy } from 'react-icons/si'
import Link from 'next/link'

function Footer() {
  return (
    <div className="flex items-center justify-between border-t border-slate-900 p-2 text-slate-600">
      <div className="flex items-center space-x-4 ">
        <p>find me on:</p>
        {/* <Link href="https://www.facebook.com/#/">
          <a>
            <BsFacebook />
          </a>
        </Link> */}
        <Link href="https://github.com/GAlexandruD">
          <a>
            <BsGithub />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/dragos-ghiugan-96492938">
          <a>
            <BsLinkedin />
          </a>
        </Link>

        <Link href="https://www.udemy.com/user/alexandru-dragos-2/">
          <a>
            <SiUdemy />
          </a>
        </Link>
        {/* <Link href="https://www.instagram.com/#">
          <a>
            <BsInstagram />
          </a>
        </Link> */}
      </div>
      <span className="invisible sm:visible">{new Date().toDateString()}</span>
    </div>
  )
}

export default Footer
