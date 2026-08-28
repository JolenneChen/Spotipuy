"use client"
import React, { useEffect, useRef } from 'react'
import { HeartIcon, ShuffleIcon, RepeatIcon, SkipBackIcon, PlayIcon, SkipForwardIcon, MicrophoneStageIcon, QueueIcon, DevicesIcon, SpeakerHighIcon, PauseIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import { Slider } from './ui/slider'
import { Button } from '@base-ui/react'
import { useState } from 'react'


const MusicPlayer = () => {
    const audio = useRef<HTMLAudioElement | null>(null);
    const [PreviewUrl, setPreviewUrl] = useState<string | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying)
        if (!PreviewUrl) return;
        if (!audio.current) {
            audio.current = new Audio(PreviewUrl);
            audio.current.play();
        } else {
            if (isPlaying) {
                audio.current.pause();
                setIsPlaying(false);
            } else {
                audio.current.play();
                setIsPlaying(true);
            }
        }
    }



    useEffect(() => {
        const fetchPreviewUrl = async () => {
            try {
                const response = await fetch('/api/deezer/Preview');
                const data = await response.json();
                setPreviewUrl(data.track.preview);
            } catch (error) {
                console.error('Error fetching preview URL:', error);
            }
        };
        fetchPreviewUrl();
    }, []);



    return (


        <footer>
            <div className='absolute bottom-0 left-0 w-full h-30 bg-[#1c2027] flex justify-between items-center px-4'>
                <div className="grid grid-cols-4">
                    <div className="flex items-center col-span-1">
                        <Image src="/Images/StarBoyboy.jpg" alt="Album" width={80} height={50} />
                    </div>
                    <div className="col-span-2 px-4">
                        <h1 className="text-white font-serif text-[20px] hover:underline hover:cursor-pointer">Starboy</h1>
                        <p className="text-gray-400 font-light text-[14px] hover:underline hover:cursor-pointer">The Weeknd</p>
                    </div>
                    <div className="col-span-1 pt-5 hover:text-[#2FC45D]">
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
                        onClick={handlePlayPause}
                    >
                        {isPlaying ? <PauseIcon size={24} /> : <PlayIcon size={24} />}
                    </Button>
                    <Button className="text-gray-400 hover:text-white transition-colors cursor-pointer duration-200 scale-110 active:scale-95"><SkipForwardIcon size={24} /></Button>
                    <Button className="text-gray-400 hover:text-white transition-colors cursor-pointer duration-200 scale-110 active:scale-95"><RepeatIcon size={24} /></Button>
                </div>
                <div className="flex gap-6 justify-center items-center">
                    <MicrophoneStageIcon size={24} />
                    <QueueIcon size={24} />
                    <DevicesIcon size={24} />
                    <SpeakerHighIcon size={24} />
                    <div className="w-24"><Slider></Slider></div>


                </div>
            </div>

        </footer>

    )
}

export default MusicPlayer