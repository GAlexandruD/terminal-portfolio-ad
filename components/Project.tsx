import Hello from './Hello'
import Image from 'next/image'

const Project = () => {
  return (
    <>
      <div className="relative m-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-scroll rounded-xl border border-slate-800 p-4 shadow-xl shadow-sky-900/40 scrollbar-hide">
        <div className="mt-4 flex flex-row flex-wrap justify-around space-y-8 p-4 sm:w-full md:space-y-0 lg:space-x-20">
          <div className="mt-2 items-center">
            <div className="space-y-2 text-white/80">
              <p>(clone)</p>
              <h1 className="text-5xl">AirBnB</h1>
              <h2 className="text-2xl text-sky-700">Complex Next.js project</h2>
              {/* <Hello /> */}

              <div className="relative m-auto flex flex-1 flex-col items-center justify-center">
                <span className="text-xl text-slate-600">
                  <span className="text-2xl text-sky-700">{'>'}</span>{' '}
                  <span className="text-slate-600">
                    {' Hosted online (vercel.com)'}
                  </span>
                  <br />
                  <span className="text-2xl text-sky-700">{'>'}</span>{' '}
                  {'Tailwind CSS for styling'}
                  <br />
                  <span className="text-2xl text-sky-700">{'>'}</span>{' '}
                  <span className="text-md">
                    {'Custom map from Mapbox.com'}
                  </span>
                </span>
              </div>

              {/* <Hello /> */}
            </div>
          </div>
          {/* Right side */}
          <div className="w-96 rounded-xl border border-slate-800 p-4 shadow-xl shadow-gray-800/40 lg:w-[450px]">
            <div className="flex flex-col items-center justify-between ">
              <div className="flex w-full flex-grow items-center justify-between pb-2">
                <span className="text-amber-500">
                  {' '}
                  Newest Project: <a className="text-slate-500">AirBnb clone</a>
                </span>
                <span className="text-sm text-slate-500"> 36 commits</span>
              </div>
            </div>
            <div className="w-full rounded-lg bg-[#010409] text-slate-500">
              <div className="flex space-x-6 px-2">
                <div className=" pl-2">
                  <img
                    src="https://dummyimage.com/600x400/2276e3/ffffff"
                    alt=""
                  />
                </div>
              </div>
              {/* <button className="mb-4 w-full bg-amber-600/90 text-left text-[#010409]">
                <a
                  href="https://airbnb-clone-green-six.vercel.app/"
                  target="_blank"
                >
                  <span className="px-4 text-sm font-semibold">
                    see the project
                  </span>
                </a>
              </button> */}
            </div>

            {/* <Image
              src="/public/static/Airbnb_Logo_BUN.webp"
              layout="fill"
              alt=""
              objectFit="contain"
              objectPosition="left"
            /> */}
          </div>
        </div>
      </div>
      {/* End of project */}

      <div className="relative m-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-scroll scrollbar-hide">
        <div className="mt-4 flex flex-row-reverse flex-wrap justify-around space-y-8 p-4 sm:w-full md:space-y-0 ">
          <div className="mt-2 items-center">
            <div className="space-y-2 text-white/80">
              <p>(clone)</p>
              <h1 className="text-5xl">AirBnB</h1>
              <h2 className="text-2xl text-sky-700">Complex Next.js project</h2>
              {/* <Hello /> */}

              <div className="relative m-auto flex flex-1 flex-col items-center justify-center">
                <span className="text-xl text-slate-600">
                  <span className="text-2xl text-sky-700">{'>'}</span>{' '}
                  <span className="text-slate-600">
                    {' Hosted online (vercel.com)'}
                  </span>
                  <br />
                  <span className="text-2xl text-sky-700">{'>'}</span>{' '}
                  {'Tailwind CSS for styling'}
                  <br />
                  <span className="text-2xl text-sky-700">{'>'}</span>{' '}
                  <span className="text-md">
                    {'Custom map from Mapbox.com'}
                  </span>
                </span>
              </div>

              {/* <Hello /> */}
            </div>
          </div>
          {/* Right side */}
          <div className="w-96 rounded-xl border border-slate-800 p-4 shadow-xl shadow-pink-700/40 lg:w-[450px]">
            <img src="https://dummyimage.com/600x400/ba66ba/ffffff" />
            {/* <Image
              src="/public/static/Airbnb_Logo_BUN.webp"
              layout="fill"
              alt=""
              objectFit="contain"
              objectPosition="left"
            /> */}
          </div>
        </div>
      </div>
      {/* End of project */}
    </>
  )
}

export default Project
