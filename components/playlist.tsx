
import { playlists } from "@/app/data/playlists"
import Image from "next/image"

export default function Playlists() {
  return (
    <div>
      <div>
        {playlists.map((playlist) => (
          <div key={playlist.id} className="flex items-center gap-4">
            <Image
              src={playlist.image}
              alt={playlist.title}
              width={190}
              height={190}
            />

            <div>
              <p className="font-bold text-3xl">{playlist.title}</p>
              <p className="text-gray-400">
                {playlist.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}