import React from 'react'
import Profil from './Profil'
import { BsArrowRepeat } from 'react-icons/bs'

function Projects() {
  return (
    <div className="flex h-full w-full flex-row justify-around overflow-y-scroll  pl-2 text-lg scrollbar-hide">
      {/* Left */}
      <div className=" ">
        <div className="border-r border-gray-700/50 pr-2">
          <text className="text-white/70">
            <a className="text-white/10">65</a> <br />
            <a className="text-white/25">66</a> <br />
            <a className="text-white/50">67</a> <br />
            67 <br />
            68 <br />
            69 <br />
            70 <br />
            71 <br />
            72 <br />
            73 <br />
            74 <br />
            75 <br />
            76 <br />
            77 <br />
            78 <br />
            79 <br />
            80 <br />
            81 <br />
            82 <br />
            83 <br />
            84 <br />
            85 <br />
            86 <br />
            87 <br />
            88 <br />
            89 <br />
            90 <br />
            91 <br />
            92 <br />
            93 <br />
            94 <br />
            95 <br />
            96 <br />
            97 <br />
            98 <br />
            99 <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 animate-spin text-pink-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            01 <br />
            02 <br />
            03 <br />
            04 <br />
            05 <br />
            06 <br />
            07 <br />
            08 <br />
            09 <br />
            10 <br />
            <a className="md:text-white/50"> 11 </a> <br />
            <a className="md:text-white/25"> 12 </a> <br />
            <a className="md:text-white/10"> 13 </a>
            <br />
          </text>
        </div>
      </div>
      {/* Right */}

      <div className="my-auto w-[90%] md:w-[97%]">
        <Profil />
      </div>
    </div>
  )
}

export default Projects
