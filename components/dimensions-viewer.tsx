"use client";

import {useState} from "react";

export function DimensionsViewer({dimensions="W 180 × D 85 × H 78 cm"}:{dimensions?:string}){
  const [mode,setMode]=useState<"front"|"side">("front");
  return <section className="mt-10 border border-line bg-[#eee7de] p-6 md:p-8">
    <div className="flex items-end justify-between gap-4"><div><p className="eyebrow text-wood">Dimensions</p><h2 className="display mt-2 text-3xl">Know the footprint.</h2></div><div className="flex gap-1 border border-line bg-paper p-1"><button onClick={()=>setMode("front")} className={"px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] "+(mode==="front"?"bg-ink text-paper":"")}>Front</button><button onClick={()=>setMode("side")} className={"px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em] "+(mode==="side"?"bg-ink text-paper":"")}>Side</button></div></div>
    <div className="mt-8 flex min-h-[250px] items-center justify-center overflow-hidden border border-line bg-paper">
      <div className={"relative border-2 border-wood/70 bg-sand/50 transition-all duration-500 "+(mode==="front"?"h-40 w-72":"h-40 w-44")}>
        <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-ink/55">{mode==="front"?"W 180 cm":"D 85 cm"}</span>
        <span className="absolute -right-20 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs text-ink/55">H 78 cm</span>
        <div className="absolute inset-4 border border-wood/30"/>
      </div>
    </div>
    <p className="mt-5 text-sm leading-7 text-ink/60">Reference footprint: {dimensions}. Always confirm final dimensions before ordering a made-to-measure piece.</p>
  </section>;
}
