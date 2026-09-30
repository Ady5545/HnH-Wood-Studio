"use client";

import {useState} from "react";
import {ArrowRight} from "lucide-react";
import {StudioImage} from "@/components/studio-image";

const materials=[
  {name:"Solid wood",copy:"Natural grain, warmth and a surface that becomes more characterful with time.",image:"/images/materials/solid-wood.jpg"},
  {name:"Natural finishes",copy:"Finishes chosen to keep the material tactile, calm and honest.",image:"/images/materials/natural-finish.jpg"},
  {name:"Upholstery",copy:"Soft layers and considered proportions that make a room feel lived in.",image:"/images/materials/upholstery.jpg"},
  {name:"Details",copy:"Hardware, edges and small decisions that quietly complete the piece.",image:"/images/materials/details.jpg"},
];

export function MaterialStories(){
 const [active,setActive]=useState(0);
 const item=materials[active];
 return <section data-tone="#f6f2eb" className="container py-24 md:py-32">
  <div className="grid gap-12 md:grid-cols-[.72fr_1.28fr] md:items-end">
   <div>
    <p className="eyebrow text-wood">Material stories</p>
    <h2 className="display mt-4 text-5xl md:text-6xl">The beauty is in what you can feel.</h2>
    <p className="mt-6 max-w-md text-sm leading-7 text-ink/60">A furniture piece is more than its silhouette. Grain, texture, finish and proportion shape the way it belongs in a home.</p>
    <div className="mt-9 border-t border-line">
      {materials.map((m,i)=><button key={m.name} onClick={()=>setActive(i)} className={`material-tab group flex w-full items-center justify-between border-b border-line py-5 text-left transition ${active===i?"text-ink":"text-ink/45"}`}>
        <span className="flex items-center gap-4"><span className="text-[10px] tracking-[.15em]">{String(i+1).padStart(2,"0")}</span><span className="display text-2xl">{m.name}</span></span>
        <ArrowRight size={16} className="transition duration-500 group-hover:translate-x-1"/>
      </button>)}
    </div>
   </div>
   <div className="relative overflow-hidden bg-sand">
    <div className="aspect-[1.12/1]"><StudioImage src={item.image} alt={item.name}/></div>
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/65 to-transparent p-7 pt-24 text-paper">
      <p className="eyebrow text-sand">{String(active+1).padStart(2,"0")} / {materials.length}</p>
      <p className="mt-2 max-w-lg text-sm leading-6 text-paper/80">{item.copy}</p>
    </div>
   </div>
  </div>
 </section>
}