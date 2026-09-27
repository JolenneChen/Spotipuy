"use client"
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
export interface Track {
    id: number;
    title: string;
    name: string;
    image: string;
    album: string;
    duration: number;
    preview?: string;
}

interface PlayerContextType {
    currentTrack: Track | null;
    isPlaying: boolean;
    playTrack: (track: Track) => void;
    togglePlayPause: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    useEffect(() => {
        const fetchDefaultTrack = async () => {
            try {
                const response = await fetch('/api/deezer/Preview');
                const data = await response.json();
                setCurrentTrack(data.track);
            }
            catch (error) {
                console.error('Error fetching default track:', error);
            }
        };
        fetchDefaultTrack();
    }, []);
    const playTrack = (track: Track) => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
        setCurrentTrack(track);
        if (track.preview) {
            const audio = new Audio(track.preview);
            audioRef.current = audio;
            audio.play().then(() => {
                setIsPlaying(true);
            }).catch((error) => {
                console.error('Error playing track:', error);
            });
            audio.onended = () => {
                setIsPlaying(false);
            }

        }
        else {
            setIsPlaying(false);

        }
    };
    const togglePlayPause = () => {
        if (!audioRef.current && currentTrack?.preview) {
            playTrack(currentTrack);
            return;
        }
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } 
            else {
                audioRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch(e => console.error("playback error:", e));
            }
        }
    };
    return (
        <PlayerContext.Provider value={{ currentTrack, isPlaying, playTrack, togglePlayPause }}>
            {children}
        </PlayerContext.Provider>
    );
};

export const usePlayer = () => {
    const context = useContext(PlayerContext);
    if (!context) {
        throw new Error('usePlayer must be used within a PlayerProvider');
    }
    return context;
};