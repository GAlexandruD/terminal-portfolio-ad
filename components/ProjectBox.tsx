import React from 'react'

function ProjectBox() {
  return (
    <div className="w-96 rounded-xl border border-slate-800 p-4 shadow-lg shadow-slate-600/40 lg:w-[450px]">
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
            <a>/**</a>
            <div className="border-l border-gray-700/50 pl-4">
              <span className="text-center">
                {' '}
                * Next.js
                <br />* Server Side Rendering
                <br />* React Hooks
                <br />* Custom map from Mapbox.com
                <br />* Tailwind CSS for styling
                <br />* Hosted online
                <br />
              </span>
            </div>
            <a>*/</a>
          </div>
        </div>
        <button className="mb-4 w-full bg-amber-600/90 text-left text-[#010409]">
          <a href="https://airbnb-clone-green-six.vercel.app/" target="_blank">
            <span className="px-4 text-sm font-semibold">see the project</span>
          </a>
        </button>
      </div>
    </div>
  )
}

export default ProjectBox
