import React, { useState } from 'react'
import Code from './Code'

function Profile() {
  const [see, setSee] = useState('demo')
  const code = `Loading code...`

  return (
    <div>
      <div className="flex border-b border-slate-900 px-2 text-sm tracking-tight">
        <button
          className="cursor-pointer rounded-md px-4 py-1 text-sky-700"
          onClick={() => setSee('demo')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </button>
        <p
          className="cursor-pointer px-4 py-1 text-amber-500"
          onClick={() => setSee('code')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </p>
      </div>
      {see === 'demo' ? (
        <div className="mt-24 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="order-last mt-20 grid grid-cols-3 text-center text-slate-600 md:order-first md:mt-0">
              <div>
                <p className="text-xl font-bold">71.5M</p>
                <p className="text-gray-500">Followers</p>
              </div>
              <div>
                <p className="text-xl font-bold ">248</p>
                <p className="text-gray-500">Photos</p>
              </div>
              <div>
                <p className="text-xl font-bold ">100K</p>
                <p className="text-gray-500">Comments</p>
              </div>
            </div>
            <div className="relative">
              <img
                className="absolute inset-x-0 top-0 mx-auto -mt-24 flex h-48 w-48 items-center justify-center rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                alt=""
              />
            </div>
            <div className="mt-32 flex justify-between space-x-8 md:mt-0 md:justify-center">
              <button className="transform rounded bg-sky-700 py-2 px-4 font-medium uppercase text-white/70 shadow transition hover:-translate-y-0.5 hover:bg-sky-800 hover:shadow-lg">
                connect
              </button>
              <button className="transform rounded bg-gray-800 py-2 px-4 font-medium uppercase text-white/70 shadow transition hover:-translate-y-0.5 hover:bg-gray-900 hover:shadow-lg">
                message
              </button>
            </div>
          </div>
          <div className="mt-20 border-b border-slate-900 pb-12 text-center">
            <h1 className="text-4xl font-medium text-sky-700">AirBnB clone</h1>
            <p className="mt-3 font-light text-gray-600">Built with Next.js</p>

            <p className="mt-8 text-gray-500">Digital creator</p>
            <p className="mt-2 text-gray-500">
              Local Private University, Chivasso
            </p>
          </div>

          <div className="mt-12 flex flex-col justify-center">
            <p className="text-center font-light text-gray-600 lg:px-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              inventore cupiditate amet error deleniti temporibus, corrupti non
              quibusdam autem. Excepturi mollitia provident sit magni quasi
              alias consequuntur molestiae eligendi ullam.
            </p>
            <button className="mt-4 py-2 px-4 font-medium text-sky-700">
              See it online
            </button>
          </div>
        </div>
      ) : (
        <Code code={code} language={'javascript'} />
      )}
    </div>
  )
}

export default Profile
