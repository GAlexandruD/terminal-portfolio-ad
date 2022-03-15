import React from 'react'
import { WindupChildren, Pace } from 'windups'

function Hello() {
  return (
    <div className="relative m-auto flex flex-1 flex-col items-center justify-center">
      <WindupChildren>
        <span className="text-xl text-slate-600 sm:text-lg">
          <span className="text-2xl">{'>'}</span>{' '}
          <span className="text-sky-700 sm:text-lg">
            <Pace ms={40}>{' Location:'}</Pace>
          </span>
          <Pace ms={40}>{'Bucharest, Romania'}</Pace>
          <br />
          <span className="text-2xl">{'>'}</span>{' '}
          <span className="text-sky-700 sm:text-lg">
            <Pace ms={40}>{' Email: '}</Pace>
          </span>
          <Pace ms={40}>{'AlexandruD@gmail.com'}</Pace>
          <br />
          <span className="text-2xl">{'>'}</span>{' '}
          <span className="text-sky-700 sm:text-lg">
            <Pace ms={40}>{' Phone: '}</Pace>
          </span>
          <span className="text-md">
            <Pace ms={40}>{'+40 721 652 001'}</Pace>
          </span>
        </span>
      </WindupChildren>
    </div>
  )
}

export default Hello
