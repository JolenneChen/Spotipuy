"use client"
import { HeartIcon } from '@phosphor-icons/react'
import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-full ">
      <h1 className="text-3xl font-bold text-white">Good Evening</h1>
      <div className="grid grid-cols-4 gap-4 mt-8 ">
        <div className=" p-4 rounded-lg space-y-4">
            <div className="text-white  bg-gray-800 cursor-pointer  hover:bg-[#25282c] text-[19px] font-serif flex rounded-xl pr-25"> <HeartIcon className=" mr-3 rounded-l-xl bg-linear-to-tl to-[#353786] from-[#bad0d6] h-full" size={75} /> <p className='mt-2 py-5 '>Liked Songs</p></div>
            <div className="text-white  bg-gray-800 cursor-pointer  hover:bg-[#25282c] text-[19px] font-serif flex rounded-xl pr-25"> <HeartIcon className=" mr-3 rounded-l-xl bg-linear-to-tl to-[#353786] from-[#bad0d6] h-full" size={75} /> <p className='mt-2 py-5 '>Playlist 4</p></div>
        </div>
        <div className=" p-4 rounded-lg space-y-4">
            <div className="text-white  bg-gray-800 cursor-pointer  hover:bg-[#25282c] text-[19px] font-serif flex rounded-xl pr-25"> <HeartIcon className=" mr-3 rounded-l-xl bg-linear-to-tl to-[#353786] from-[#bad0d6] h-full" size={75} /> <p className='mt-2 py-5 '>Playlist 1</p></div>
            <div className="text-white  bg-gray-800 cursor-pointer  hover:bg-[#25282c] text-[19px] font-serif flex rounded-xl pr-25"> <HeartIcon className=" mr-3 rounded-l-xl bg-linear-to-tl to-[#353786] from-[#bad0d6] h-full" size={75} /> <p className='mt-2 py-5 '>Playlist 5</p></div>
        </div>
        <div className="p-4 rounded-lg space-y-4">
            <div className="text-white  bg-gray-800 cursor-pointer  hover:bg-[#25282c] text-[19px] font-serif flex rounded-xl pr-25"> <HeartIcon className=" mr-3 rounded-l-xl bg-linear-to-tl to-[#353786] from-[#bad0d6] h-full" size={75} /> <p className='mt-2 py-5 '>Playlist 2</p></div>
            <div className="text-white  bg-gray-800 cursor-pointer  hover:bg-[#25282c] text-[19px] font-serif flex rounded-xl pr-25"> <HeartIcon className=" mr-3 rounded-l-xl bg-linear-to-tl to-[#353786] from-[#bad0d6] h-full" size={75} /> <p className='mt-2 py-5 '>Playlist 6</p></div>
        </div>
        <div className="p-4 rounded-lg space-y-4">
            <div className="text-white  bg-gray-800 cursor-pointer  hover:bg-[#25282c] text-[19px] font-serif flex rounded-xl pr-25"> <HeartIcon className=" mr-3 rounded-l-xl bg-linear-to-tl to-[#353786] from-[#bad0d6] h-full" size={75} /> <p className='mt-2 py-5 '>Playlist 3</p></div>
            <div className="text-white  bg-gray-800 cursor-pointer  hover:bg-[#25282c] text-[19px] font-serif flex rounded-xl pr-25"> <HeartIcon className=" mr-3 rounded-l-xl bg-linear-to-tl to-[#353786] from-[#bad0d6] h-full" size={75} /> <p className='mt-2 py-5 '>Playlist 7</p></div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero