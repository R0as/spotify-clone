import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from 'next/image'

export default function footer(){
    return (
        <footer className={`bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between`}>
            <div className={`flex items-center gap-3`}>
            <Image src="/album.jpg" width={56} height={56} alt="Capa album maquina do tempo matue"/>
            <div className={`flex flex-col`}>
                <strong className={`font-normal`}>777-666</strong>
                <span className={`text-xs text-zinc-400`}>Matuê</span>
            </div>
            </div>
            <div className={`flex flex-col items-center gap-2`}>
            <div className={`flex items-center gap-6`}>
                <Shuffle size={20} className={`text-zinc-200`}/>
                <SkipBack size={20} className={`text-zinc-200`}/>

                <button className={`w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black`}>
                    <Play fill='bg-black'/>
                </button>

                <SkipForward size={20} className={`text-zinc-200`}/>
                <Repeat size={20} className={`text-zinc-200`}/>
            </div>

            <div className={`flex items-center gap-2`}>
                <span className={` text-xs text-zinc-400`}>0:27</span>
                <div className={`h-1 rounded-full w-96 bg-zinc-600`}>
                <div className={`bg-zinc-200 w-20 h-1 rounded-full`}>
                </div>
                </div>
                <span className={` text-xs text-zinc-400`}>2:44</span>
            </div>
            </div>
            <div className={` flex items-center gap-4`}>
            <Mic2 size={20}/>
            <LayoutList size={20}/>
            <Laptop2 size={20}/>
            <div className={`flex items-center gap-2`}>
                <Volume size={20}/>
                <div className={`h-1 rounded-full w-24 bg-zinc-600`}>
                <div className={`bg-zinc-200 w-10 h-1 rounded-full`}>
                </div>
                </div>
            </div>
            <Maximize2 size={20}/>
            </div>
      </footer>
    )
}