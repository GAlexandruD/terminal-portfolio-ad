import React from 'react'
import { WindupChildren, Pace } from 'windups'

function Hello() {
  return (
    <div className="h-full w-full pb-1">
      <div className="relative flex flex-1 flex-col items-center justify-center pb-10">
        <WindupChildren>
          <span className="h-4 text-lg text-slate-600 md:h-full md:text-xl">
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
    </div>
  )
}

export default Hello
