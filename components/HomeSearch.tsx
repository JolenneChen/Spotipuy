"use client"
import { MagnifyingGlassIcon } from "@phosphor-icons/react"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePlayer } from "@/context/PlayerContext"

interface Track {
    id: number;
    title: string;
    name: string;
    image: string;
    album: string;
    duration: number;
}

interface CardProps {
    id: number;
    image: string;
    title: string;
    bg: string;
}

const DurationFormatter = (duration: number): string => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

const HomeSearchCard = ({ params }: { params: CardProps }) => {
    return (
        <div className={`text-white cursor-pointer bg-[${params.bg}] font-serif rounded-xl`}>
            <Image
                src={params.image}
                alt={params.title}
                width={220}
                height={280}
                className="p-4 rounded-2xl"
            />

            <div className="px-2 pb-2">
                <p>{params.title}</p>
            </div>
        </div>
    )
}

const SearchCard = () => {
    const [query, setQuery] = useState("")
    const [tracks, setTracks] = useState<Track[]>([])

    const { playTrack ,currentTrack, isPlaying } = usePlayer();

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/deezer/Search?q=${query}`);
            const data = await response.json();
            const fetchedTracks: Track[] = data.data || []
            console.log("Fetched tracks:", fetchedTracks);
            setTracks(fetchedTracks);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    const ListCard:
        CardProps[] = [
            { id: 1, image: "/Images/StarBoyboy.jpg", title: "Podcast", bg: "#dadada" },
            { id: 2, image: "/Images/Malcolm.jpg", title: "Live Events", bg: "#ffffff" },
            { id: 3, image: "/Images/Laufey.jpg", title: "Made For You", bg: "#ffffff" },
            { id: 4, image: "/Images/Laufey.jpg", title: "Made For You", bg: "#ffffff" },
            { id: 5, image: "/Images/Laufey.jpg", title: "Made For You", bg: "#ffffff" },
        ]


    return (

        <div className="w-full min-h-screen  p-10 bg-[#121212] space-y-5">
            <form onSubmit={handleSearch}>
                <div className="relative flex items-center w-1/3 h-12 bg-[#2b2a2a] rounded-lg p-4">
                    <MagnifyingGlassIcon size={28} className="text-white cursor-pointer "  ></MagnifyingGlassIcon>
                    <input type="text" placeholder="Search for Artists, Songs, or Podcasts" className="w-full h-12 bg-[#2b2a2a] text-white rounded-lg p-4 focus:outline-none" value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>
            </form>
            <div className="relative">
                <div className="absolute top-0 left-0 z-0 max-w-1/3 max-h-100 overflow-y-auto space-y-4 bg-black z-50">
                    {tracks.map((track, index) => (

                        <div
                            key={track.id}
                            onClick={() => playTrack(track)}
                        >   <div className=" flex text-white  hover:bg-[#25282c] rounded-xl font-serif justify-between w-full">
                                <div className="flex text-white  hover:bg-[#25282c] rounded-xl font-serif ">
                                    <div className="relative">
                                        <Image src={track.image} alt={track.title} width={70} height={80} className="max-w-15px h-full object-cover p-2" />
                                    </div>
                                    <div className="p-2 mt-1">
                                        <p>{track.title}</p>
                                        <p className="text-sm text-gray-400">{track.name}</p>
                                    </div>
                                </div>
                                <div className="mt-6 mr-12">
                                    <p>{DurationFormatter(track.duration)}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                <div className="">
                    <h1 className='font-bold text-3xl text-white'>Recent Searches</h1>
                    <div className="flex gap-15">
                        <div className="left-0 gap-4 mt-4 text-center">
                            <Image src="/Images/StarBoyBoy.jpg" alt="Recent Search" width={100} height={100} className="rounded-full" />
                            <p className="text-white">The Weeknd</p>
                            <p className="text-gray-400">Artist</p>
                        </div>
                        <div className="left-0 gap-4 mt-4 text-center">
                            <Image src="/Images/StarBoyBoy.jpg" alt="Recent Search" width={100} height={100} className="rounded-full" />
                            <p className="text-white">The Weeknd</p>
                            <p className="text-gray-400">Artist</p>
                        </div>
                        <div className="left-0 gap-4 mt-4 text-center">
                            <Image src="/Images/StarBoyBoy.jpg" alt="Recent Search" width={100} height={100} className="rounded-full" />
                            <p className="text-white">The Weeknd</p>
                            <p className="text-gray-400">Artist</p>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-white text-3xl font-bold">Browse All</p>
                        <div className="grid grid-flow-col auto-cols-55 gap-4 mt-8 ">
                            {ListCard.map((card) => (
                                <HomeSearchCard key={card.id} params={card} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchCard
