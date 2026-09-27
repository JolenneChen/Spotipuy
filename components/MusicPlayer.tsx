"use client"
import React, { useEffect, useRef } from 'react'
import { HeartIcon, ShuffleIcon, RepeatIcon, SkipBackIcon, PlayIcon, SkipForwardIcon, MicrophoneStageIcon, QueueIcon, DevicesIcon, SpeakerHighIcon, PauseIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import { Slider } from './ui/slider'
import { Button } from '@base-ui/react'
import { useState } from 'react'
import { usePlayer } from '@/context/PlayerContext'


const MusicPlayer = () => {
    const { currentTrack, isPlaying, togglePlayPause } = usePlayer();

    

    return (


        <footer>
            <div className='absolute bottom-0 left-0 w-full h-30 bg-[#1c2027] flex justify-between items-center px-4'>
                <div className="grid grid-cols-4">
                    {currentTrack?.image?(
                    <div className="flex items-center col-span-1">
                        <Image src={currentTrack?.image} alt="Album" width={80} height={50} />
                    </div>
                    ):(
                        <div className='w-16 h-16 bg-neutral-800 rounded-md flex-shrink-0'></div>
                    )}
                    <div className="col-span-2 px-4">
                        <h1 className="text-white font-serif text-[20px] hover:underline hover:cursor-pointer">{currentTrack?.title||"Select Title"}</h1>
                        <p className="text-gray-400 font-light text-[14px] hover:underline hover:cursor-pointer">{currentTrack?.name||"Explore Music"}</p>
                    </div>
                    <div className="col-span-1 pt-5 text-white hover:text-[#2FC45D]">
                        <HeartIcon size={24} />
                    </div>
                </div>
                <div className="flex gap-6 justify-center ">
                    <Button className="text-gray-400 hover:text-white transition-colors cursor-pointer duration-200 scale-110 active:scale-95">
                        <ShuffleIcon size={24} />
                    </Button>
                    <Button className="text-gray-400 hover:text-white transition-colors cursor-pointer duration-200 scale-110 active:scale-95"><SkipBackIcon size={24} /></Button>

                    <Button
                        className="text-gray-400 hover:text-white transition-colors cursor-pointer duration-200 scale-110 active:scale-95"
                        onClick={togglePlayPause}
                    >
                        {isPlaying ? <PauseIcon size={24} /> : <PlayIcon size={24} />}
                    </Button>
                    <Button className="text-gray-400 hover:text-white transition-colors cursor-pointer duration-200 scale-110 active:scale-95"><SkipForwardIcon size={24} /></Button>
                    <Button className="text-gray-400 hover:text-white transition-colors cursor-pointer duration-200 scale-110 active:scale-95"><RepeatIcon size={24} /></Button>
                </div>
                <div className="flex gap-6 justify-center items-center ">
                    <MicrophoneStageIcon size={24} className='text-white'/>
                    <QueueIcon size={24} className='text-white'/>
                    <DevicesIcon size={24} className='text-white' />
                    <SpeakerHighIcon size={24} className='text-white'/>
                    <div className="w-24"><Slider className="text-white bg-white" /></div>


                </div>
            </div>

        </footer>

    )
}

export default MusicPlayer