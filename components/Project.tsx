import Hello from './Hello'
import Image from 'next/image'

const Project = () => {
  return (
    <div className="relative m-auto flex w-full flex-1 flex-col items-center justify-center overflow-y-scroll scrollbar-hide">
      <div className="mt-4 flex flex-wrap justify-around space-y-8 p-4 sm:w-full md:space-y-0 lg:space-x-20">
        <div className="mt-2 items-center">
          <div className="space-y-2 text-white/80">
            <p>Hello! I&apos;am</p>
            <h1 className="text-5xl">Alexandru Dragos</h1>
            <h2 className="text-2xl text-sky-700">React Developer</h2>
            <Hello />
          </div>
        </div>
        {/* Right side */}
        <div className="w-96 rounded-xl border border-slate-800 p-4 shadow-xl shadow-pink-700/40 lg:w-[450px]">
          <Image
            src="/public/static/Airbnb_Logo_BUN.webp"
            layout="fill"
            alt=""
            objectFit="contain"
            objectPosition="left"
          />
        </div>
      </div>
    </div>
  )
}

export default Project
