"use client"
import { WaveformIcon, HouseIcon, MagnifyingGlassIcon, PlaylistIcon, HeartIcon, PlusSquareIcon, } from "@phosphor-icons/react"
import { Button } from "./ui/button"
import Link from "next/link"
import { playlists } from "@/app/data/playlists"
import Image from "next/image"

const SideBar = () => {
    return (
        <div className="flex min-h-svh sticky top-0">
            <div className="w-70 bg-[#181b20]">
                <div className="inline-flex p-8 pb-0">
                    <WaveformIcon size={40} className="text-[#2FC45D] font-bold" />
                    <h1 className="ml-2  text-3xl font-bold text-[#2FC45D]">Spotipuy</h1>
                </div>
                <nav className="mt-8 p-2 space-y-3">
                    

                    <Link href="/" className="text-white hover:bg-[#25282c] p-2 pl-10 rounded-xl text-[21px] font-serif flex"> <HouseIcon className=" mr-2" size={28} /> Home</Link>

                    <Link href="/Liked" className="text-white  hover:bg-[#25282c] p-2 pl-10 rounded-xl text-[21px] font-serif flex"> <HeartIcon className=" mr-2 bg-linear-to-tl rounded-xs to-[#8d54d8] from-[#d781e4] " size={28} /> Liked Songs</Link>

                    <Link href="/Search" className=" text-white  hover:bg-[#25282c] p-2 pl-10 rounded-xl text-[21px] font-serif flex">
                        <MagnifyingGlassIcon size={28} className="text-white" /> Search</Link>

                    {playlists.map((playlist) => (
                        <Link
                            key={playlist.id}
                            href={`/Playlists/${playlist.id}`}
                        >
                            <div className="flex text-white  hover:bg-[#25282c] rounded-xl font-serif ">
                                <div className="relative">
                                <Image src={playlist.image} alt={playlist.title} width={70} height={80} className="max-w-15px h-full object-cover p-2" />
                                </div>
                                <div className="p-2 mt-1">
                                    <p>{playlist.title}</p>
                                    <p className="text-sm text-gray-400">{playlist.desc}</p>
                                </div>
                            </div>
                            
                        </Link>
                    ))}

                    

                </nav>
                <div className="px-8 py-4">
                    <Button className=" bg-transparent text-xl hover:bg-[#25282c] rounded-none p-2"> <PlusSquareIcon size={28} /> Create Playlist</Button>
                </div>
                {/* <div className=" absolute bottom-0 left-0 flex gap-10 text-center h-20">
                    <hr />
                    <p>Cookies</p>
                    <p>Privacy</p>

                </div> */}
            </div>



        </div>
    )
}

export default SideBar