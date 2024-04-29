import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from 'lucide-react'
import Image from 'next/image';
import Sidebar from '@/components/sidebar';
import Footer from '@/components/footer';
import Ultimas from '@/components/Ultimas';
import MadeFor from '@/components/MadeFor';

export default function Home() {
  return (
    <div className={`h-screen flex flex-col`}>
      <div className={`flex flex-1`}>
        
        <Sidebar/>

        <main className={`flex-1 p-6`}>
          <div className={`flex items-center gap-3`}>
            <button className={`rounded-full bg-black/40 p-1`}> 
              <ChevronLeft/>
            </button>
            <button className={`rounded-full bg-black/40 p-1`}>
              <ChevronRight/>
            </button>
          </div>

          <Ultimas/>

          <MadeFor/>
        </main>
      </div>

      <Footer/>
    </div>
  );
}
