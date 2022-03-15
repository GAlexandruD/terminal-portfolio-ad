import Hello from './Hello'
import Image from 'next/image'
import { BsGithub } from 'react-icons/bs'

const Project = () => {
  return (
    <>
      <div className="relative m-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-scroll border-b border-slate-800 p-4 scrollbar-hide">
        <div className="mt-4 flex w-full flex-row flex-wrap justify-around space-y-8 p-4 md:space-y-0 lg:space-x-20">
          <div className="mt-2 items-center">
            <div className="space-y-2 text-white/80">
              <p>(clone)</p>
              <h1 className="text-5xl">AirBnB</h1>
              <h2 className="text-2xl text-sky-700">
                Search for the best accomodation
              </h2>
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
          <div className="w-96 rounded-xl border border-slate-800 p-1 shadow-xl shadow-rose-900/10 lg:w-[450px]">
            <div className="flex flex-col items-center justify-between ">
              <div className="flex w-full flex-grow items-center justify-between pb-2">
                <a className="ml-2 text-slate-500">AirBnb clone</a>

                <span className="mr-2 text-xl text-slate-500">
                  <a href="https://github.com/GAlexandruD/airbnb-clone">
                    <BsGithub />
                  </a>
                </span>
              </div>
            </div>
            <div className="w-full rounded-lg bg-[#010409] text-slate-500">
              <div className="flex space-x-6 px-2">
                <div className=" pl-2">
                  <a
                    href="http://airbnb-clone-green-six.vercel.app/"
                    target="_blank"
                  >
                    <Image
                      src="/static/Airbnb_Logo_BUN.webp"
                      width="640"
                      height="400"
                      alt="project front page"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </a>

                  {/* <img
                    src="https://dummyimage.com/600x400/2276e3/ffffff"
                    alt=""
                  /> */}
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
      {/* End of project 1*/}

      <div className="relative m-auto flex flex-1 flex-col items-center justify-center overflow-y-scroll border-b border-slate-800 p-4 scrollbar-hide">
        <div className="mt-4 flex w-full flex-row-reverse flex-wrap justify-around space-y-8 p-4 md:space-y-0 ">
          <div className="mt-2 items-center">
            <div className="space-y-2 text-white/80">
              <p>(old project)</p>
              <h1 className="text-5xl">Nearby Coffee Shops</h1>
              <h2 className="text-2xl text-sky-700">
                Discover nearby coffee shops
              </h2>
              {/* <Hello /> */}

              <div className="relative m-auto flex flex-1 flex-col items-center justify-center">
                <span className="text-xl text-slate-600">
                  <span className="text-2xl text-sky-700">{'>'}</span>{' '}
                  <span className="text-slate-600">
                    {' Hosted online (vercel.com)'}
                  </span>
                  <br />
                  <span className="text-2xl text-sky-700">{'>'}</span>{' '}
                  {'Foursquare API for locations'}
                  <br />
                  <span className="text-2xl text-sky-700">{'>'}</span>{' '}
                  <span className="text-md">{'Unsplash API for images'}</span>
                  <br />
                  <span className="text-2xl text-sky-700">{'>'}</span>{' '}
                  <span className="text-md">{'Airtable database'}</span>
                </span>
              </div>
              {/* <Hello /> */}
            </div>
          </div>
          {/* Right side */}
          <div className="w-96 rounded-xl border border-slate-800 p-1 shadow-xl shadow-rose-900/10 lg:w-[450px]">
            <div className="flex flex-col items-center justify-between ">
              <div className="flex w-full flex-grow items-center justify-between pb-2">
                <a
                  className="ml-2 text-slate-500"
                  href="http://discover-coffee-shops.vercel.app/"
                >
                  Discover Coffee Shops
                </a>
                <span className="mr-2 text-xl text-slate-500">
                  <a href="https://github.com/GAlexandruD/discover-coffee-shops">
                    <BsGithub />
                  </a>
                </span>
              </div>
            </div>
            <div className="w-full rounded-lg bg-[#010409] text-slate-500">
              <div className="flex space-x-6 px-2">
                <div className=" pl-2">
                  <a
                    href="http://discover-coffee-shops.vercel.app/"
                    target="_blank"
                  >
                    <Image
                      src="/static/Discover-coffee-shops.png"
                      width="640"
                      height="400"
                      alt="project front page"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of project 2*/}
    </>
  )
}

export default Project
