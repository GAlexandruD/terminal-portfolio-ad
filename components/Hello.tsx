import React from 'react'
import { WindupChildren } from 'windups'

function Hello() {
  return (
    <div className="relative m-auto flex flex-1 flex-col items-center justify-center">
      <WindupChildren>
        <span className="text-xl text-slate-600">
          <span className="text-2xl">{'>'}</span>{' '}
          <span className="text-sky-700">{' Location:'}</span>
          {'Bucharest, Romania'}
          <br />
          <span className="text-2xl">{'>'}</span>{' '}
          <span className="text-sky-700">{' Email: '}</span>
          {'AlexandruD@gmail.com'}
          <br />
          <span className="text-2xl">{'>'}</span>{' '}
          <span className="text-sky-700">{' Phone: '}</span>
          <span className="text-md">{'+40 721 652 001'}</span>
        </span>
      </WindupChildren>
    </div>
  )
}

export default Hello
