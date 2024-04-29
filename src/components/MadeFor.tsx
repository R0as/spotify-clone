import Image from "next/image";

export default function MadeFor(){
    return (
        <div>
            <h2 className={` font-semibold text-2xl mt-10`}>Made for Henrique Roas</h2>

          <div className={`grid grid-cols-8 gap-4 mt-4`}>
            <a href="#" className={`bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10`}>
              <Image src="/album.jpg" className={`w-full`}width={104} height={104} alt="Capa album maquina do tempo matue"/>
              <strong className={`font-semibold`}>Daily mix 1</strong>
              <span className={`text-sm text-zinc-400`}>Matuê, teto, wiu entre outros</span>
            </a>            
            <a href="#" className={`bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10`}>
              <Image src="/album.jpg" className={`w-full`}width={104} height={104} alt="Capa album maquina do tempo matue"/>
              <strong className={`font-semibold`}>Daily mix 1</strong>
              <span className={`text-sm text-zinc-400`}>Matuê, teto, wiu entre outros</span>
            </a>            
            <a href="#" className={`bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10`}>
              <Image src="/album.jpg" className={`w-full`}width={104} height={104} alt="Capa album maquina do tempo matue"/>
              <strong className={`font-semibold`}>Daily mix 1</strong>
              <span className={`text-sm text-zinc-400`}>Matuê, teto, wiu entre outros</span>
            </a>            
            <a href="#" className={`bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10`}>
              <Image src="/album.jpg" className={`w-full`}width={104} height={104} alt="Capa album maquina do tempo matue"/>
              <strong className={`font-semibold`}>Daily mix 1</strong>
              <span className={`text-sm text-zinc-400`}>Matuê, teto, wiu entre outros</span>
            </a>            
            <a href="#" className={`bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10`}>
              <Image src="/album.jpg" className={`w-full`}width={104} height={104} alt="Capa album maquina do tempo matue"/>
              <strong className={`font-semibold`}>Daily mix 1</strong>
              <span className={`text-sm text-zinc-400`}>Matuê, teto, wiu entre outros</span>
            </a>            
          </div>
        </div>
    )
}