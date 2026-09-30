"use client";

import {useState} from "react";
import {ArrowUpRight} from "lucide-react";
import Link from "next/link";
import {StudioImage} from "@/components/studio-image";

const rooms=[
 {name:"Gather",room:"Living",copy:"Low, generous forms that give the room somewhere to come together.",image:"/images/rooms/living.jpg"},
 {name:"Dine",room:"Dining",copy:"A considered centre for everyday meals and longer evenings.",image:"/images/rooms/dining.jpg"},
 {name:"Rest",room:"Bedroom",copy:"Quiet proportions, warm surfaces and a calmer visual rhythm.",image:"/images/rooms/bedroom.jpg"},
 {name:"Work",room:"Study",copy:"A focused setting with practical pieces that still feel personal.",image:"/images/rooms/study.jpg"},
];

export function RoomVisualizer(){
 const [active,setActive]=useState(0);
 const item=rooms[active];
 return <section data-tone="#eee7de" className="border-y border-line bg-[#eee7de] py-24 md:py-32">
  <div className="container">
   <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
    <div><p className="eyebrow text-wood">Designed for the way you live</p><h2 className="display mt-4 max-w-3xl text-5xl md:text-6xl">Start with the room.</h2></div>
    <p className="max-w-sm text-sm leading-7 text-ink/60">Browse the collection through the spaces it is made to inhabit.</p>
   </div>
   <div className="mt-12 grid gap-7 lg:grid-cols-[1.35fr_.65fr]">
    <div className="relative overflow-hidden bg-sand">
      <div className="aspect-[16/10]"><StudioImage src={item.image} alt={item.room}/></div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-7 pt-28 text-paper md:p-10 md:pt-36">
       <p className="eyebrow text-sand">{item.room}</p><h3 className="display mt-2 text-4xl md:text-5xl">{item.name}</h3><p className="mt-3 max-w-lg text-sm leading-6 text-paper/75">{item.copy}</p>
      </div>
    </div>
    <div className="grid border border-line bg-paper sm:grid-cols-2 lg:grid-cols-1">
      {rooms.map((r,i)=><button key={r.room} onClick={()=>setActive(i)} className={`group flex min-h-[112px] items-center justify-between border-b border-line p-6 text-left transition last:border-b-0 ${active===i?"bg-sand":"hover:bg-[#f1e9df]"}`}>
       <span><span className="eyebrow text-wood">{String(i+1).padStart(2,"0")}</span><span className="display mt-2 block text-3xl">{r.room}</span></span>
       <ArrowUpRight size={17} className="transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"/>
      </button>)}
    </div>
   </div>
   <div className="mt-8 text-right"><Link href="/shop" data-cursor="EXPLORE" className="luxury-button inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.16em]">Explore all pieces <ArrowUpRight size={15}/></Link></div>
  </div>
 </section>
}