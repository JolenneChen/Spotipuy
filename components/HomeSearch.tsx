import Image from 'next/image'
import React from 'react'



interface CardProps {
    id: number;
    image: string;
    title: string;
    bg: string;
}


export const HomeSearchCard= ({ params }:{params: CardProps}) => {
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
const ListCard:
CardProps[]=[
  { id:1, image: "/Images/StarBoyboy.jpg", title: "Podcast", bg:"#dadada" },
  { id:2, image: "/Images/Malcolm.jpg", title: "Live Events", bg: "#ffffff" },
  { id:3, image: "/Images/Laufey.jpg", title: "Made For You", bg: "#ffffff" },
]


    return (
        <div className="w-full  space-y-10">
            <h1 className='font-bold text-3xl '>Recent Searches</h1>
            <div className="flex gap-15">
                <div className="left-0 gap-4 mt-4 text-center">
                    <Image src="/Images/StarBoyBoy.jpg" alt="Recent Search" width={100} height={100} className="rounded-full" />
                    <p>The Weeknd</p>
                    <p className="text-gray-400">Artist</p>
                </div>
                <div className="left-0 gap-4 mt-4 text-center">
                    <Image src="/Images/StarBoyBoy.jpg" alt="Recent Search" width={100} height={100} className="rounded-full" />
                    <p>The Weeknd</p>
                    <p className="text-gray-400">Artist</p>
                </div>
                <div className="left-0 gap-4 mt-4 text-center">
                    <Image src="/Images/StarBoyBoy.jpg" alt="Recent Search" width={100} height={100} className="rounded-full" />
                    <p>The Weeknd</p>
                    <p className="text-gray-400">Artist</p>
                </div>
            </div>
            <div className="">
                <p className="text-white text-3xl font-bold">Browse All</p>
                <div className="grid grid-cols-5rows-2 grid-flow-col auto-cols-55 gap-4 mt-8 ">
                    {ListCard.map((card) => (
                        <HomeSearchCard key={card.id} params={card} />
                    ))}
                </div>
            </div>

        </div>
    )
}
export default SearchCard