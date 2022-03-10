import React from 'react'
import { BsGithub, BsFacebook, BsInstagram } from 'react-icons/bs'
import Link from 'next/link'

function Footer() {
  return (
    <div className="flex items-center justify-between border-t border-slate-900 p-2 text-slate-600">
      <div className="flex items-center space-x-4 ">
        <p>find me in:</p>
        <Link href="https://www.facebook.com/aleksandar.georgiev.9461/">
          <a>
            <BsFacebook />
          </a>
        </Link>
        <Link href="https://github.com/AleksRG">
          <a>
            <BsGithub />
          </a>
        </Link>
        <Link href="https://www.instagram.com/_aleksandar.georgiev_/?hl=bg">
          <a>
            <BsInstagram />
          </a>
        </Link>
      </div>
      <span>{new Date().toDateString()}</span>
    </div>
  )
}

export default Footer
