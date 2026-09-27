import Image from 'next/image'
import React from 'react'

const ListCard = [
  { id:1, image: "/Images/Playlist1.jpg", title: "Playlist 1", artist: "Playlist - User" },
  { id:2, image: "/Images/Malcolm.jpg", title: "Daily Mix 2", artist: "Malcolm Todd, Clairo, Takayoshi and more" },
  { id:3, image: "/Images/Laufey.jpg", title: "Daily Mix 3", artist: "Laufey, beabadoobee, BTS and more" },
]


function PlaylistCard({ song }) {
  return (
    <div className="text-white cursor-pointer  max-w-50 hover:bg-[#232527] text-[19px] font-serif rounded-xl">
      <Image
        src={song.image}
        alt={song.title}
        width={220}
        height={280}
        className="p-4 rounded-4xl"
      />

      <div className="pl-2 pb-2">
        <p>{song.title}</p>
        <p className="text-gray-400 text-sm">
          {song.artist}
        </p>
      </div>
    </div>
  )
}

export default function Recplaylist() {
  return (
    <div className="w-full h-full ">

      <p className="text-3xl font-bold text-white">Recents</p>
      <div className="grid grid-flow-col auto-cols-55 gap-4 mt-8 ">
        {ListCard.map((song) => (
          <PlaylistCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  )
}

