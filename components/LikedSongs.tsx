"use client"
import React from 'react'
import { Heart, HeartIcon } from '@phosphor-icons/react'


const LikedSongs = () => {
  return (
    <div className="w-full h-full min-h-screen bg-[#141414]">
      <div className="bg-linear-to-t to-[#6465b4] from-[#16022c] w-full h-75 p-10 flex items-center gap-8">
        
        <div className=" bg-linear-to-tl to-[#571edd] from-[#bad0d6] min-w-55 shrink-0 h-full flex items-center justify-center ml-10 ">
          <HeartIcon size={70} className="text-white mr-3 h-full" />
        </div>
        <div className="text-white">
          <p className="text-sm">Playlist</p>
          <h1 className="text-5xl font-bold">Liked Songs</h1>
        </div>

      </div>
    </div>
  )
}

export default LikedSongs