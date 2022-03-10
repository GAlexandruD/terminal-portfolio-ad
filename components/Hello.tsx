import React from 'react'
import Typist from 'react-typist'

function Hello() {
  return (
    <div className="relative m-auto flex flex-1 flex-col items-center justify-center">
      <Typist>
        <span className="text-xl text-slate-600">
          <span className="text-2xl">{'>'}</span>{' '}
          <span className="text-sky-700"> Location:</span> Bucharest, Romania
          <br />
          <span className="text-2xl">{'>'}</span>{' '}
          <span className="text-sky-700"> Email: </span>
          AleksRDev@gmail.com
          <br />
          <span className="text-2xl">{'>'}</span>{' '}
          <span className="text-sky-700"> Phone: </span>
          <span className="text-md">+359 895 629 829</span>
        </span>
      </Typist>
    </div>
  )
}

export default Hello
