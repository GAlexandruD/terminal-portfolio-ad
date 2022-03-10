import React from 'react'
import Link from 'next/link'
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiNodedotjs,
  SiTypescript,
} from 'react-icons/si'

function AboutMe() {
  return (
    <div className="h-full w-full items-center justify-around overflow-y-scroll pl-3 text-lg  scrollbar-hide md:flex md:flex-row">
      {/* Left */}
      <div className="flex space-x-6">
        <div className="border-r border-gray-700/50  pr-4">
          <text className="text-white/70">
            <span className="text-white/10">38</span> <br />
            <span className="text-white/25">39</span> <br />
            <span className="text-white/50">40</span> <br />
            41 <br />
            42 <br />
            43 <br />
            44 <br />
            45 <br />
            46 <br />
            47 <br />
            48 <br />
            <span className="md:text-white/50"> 50 </span> <br />
            <span className="md:text-white/25"> 51 </span> <br />
            <span className="md:text-white/10"> 52 </span>
            <br />
          </text>
        </div>
        <div className="my-auto pl-2">
          <span className="text-white/50">/**</span>
          <div className="h-74 border-l border-gray-700/50 pl-4">
            <text className="text-center text-white/50">
              {' '}
              <span className="">
                * Education: <br />
              </span>
              * 2020 - 2021 <span className="text-[#ffa000]">SoftUni </span>
              <br />
              <span className="text-sm text-sky-700 md:pl-8">
                Java Fundamentals
              </span>
              <br />* 2021 <span className="text-[#a435f0]">Udemy</span>
              <br />
              <Link href="https://www.udemy.com/course/the-complete-javascript-course/">
                <span className="text-sm text-sky-700 md:pl-8">
                  The Complete JavaScript Course: From Zero to Expert!
                </span>
              </Link>
              <br />{' '}
              <Link href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">
                <span className="text-sm text-sky-700  md:pl-8">
                  React - The Complete Guide (incl Hooks, React Router, Redux)
                </span>
              </Link>
              <br />* 2021{' '}
              <span className="text-amber-600">Zero to Full Stack Hero</span>
              <br />
              <Link href="https://www.papareact.com/">
                <span className="text-left text-sm text-sky-700 md:pl-8">
                  www.papareact.com
                </span>
              </Link>
              <br />
              */ <br />
            </text>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex space-x-6">
        <div className="border-r border-gray-700/50  pr-4">
          <text className="text-white/70">
            <span className="md:text-white/10">53</span> <br />
            <span className="md:text-white/25">54</span> <br />
            <span className="md:text-white/50">55</span> <br />
            56 <br />
            57 <br />
            58 <br />
            59 <br />
            60 <br />
            <span className="text-white/50"> 61 </span> <br />
            <span className="text-white/25"> 62 </span> <br />
            <span className="text-white/10"> 63 </span>
            <br />
            <span className="text-white/5"> 64 </span>
            <br />
          </text>
        </div>
        <div className="my-auto pl-2">
          <span className="text-white/50">/**</span>
          <div className="h-74 border-l border-gray-700/50 pl-4">
            <text className="text-center text-white/50">
              {' '}
              <span className="">
                * Skils: <br />
              </span>
              <span className="flex items-center space-x-2 ">
                <SiJavascript className="text-yellow-500" />{' '}
                <p className="px-2 text-white/80">JavaScript</p>
              </span>
              <span className="flex items-center space-x-2">
                <SiTypescript className="text-sky-400" />{' '}
                <p className="flex px-2 text-white/80">
                  TypeScript{' '}
                  <p className="animate-pulse pl-1 text-xs text-red-500">
                    loading...
                  </p>{' '}
                </p>
              </span>
              <span className="flex items-center space-x-2">
                <SiReact className="text-sky-600" />{' '}
                <p className="px-2 text-white/80">ReactJS</p>
              </span>
              <span className="flex items-center space-x-2">
                <SiNextdotjs className="text-white/70" />{' '}
                <p className="px-2 text-white/80">NextJS</p>
              </span>
              <span className="flex items-center space-x-2">
                <SiTailwindcss className="text-sky-400" />{' '}
                <p className="px-2 text-white/80">TailwindCss</p>
              </span>{' '}
              <span className="flex items-center space-x-2">
                <SiFirebase className="text-orange-400" />{' '}
                <p className="px-2 text-white/80">Firebase</p>
              </span>{' '}
              <span className="flex items-center space-x-2">
                <SiNodedotjs className="text-green-500" />{' '}
                <p className="px-2 text-white/80">NodeJS</p>
              </span>
              */
            </text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
