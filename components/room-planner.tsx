"use client";

import {useMemo,useState} from "react";
import Link from "next/link";

const pieces=[["Sofa","Living"],["Dining table","Dining"],["Bed","Bedroom"],["Study desk","Study"],["Accent chair","Seating"],["Storage","Storage"]];
const rooms=["Living","Dining","Bedroom","Study"];
export function RoomPlanner(){
  const [room,setRoom]=useState("Living");
  const [selected,setSelected]=useState<string[]>(["Sofa"]);
  const options=pieces.filter(p=>p[1]===room||p[1]==="Seating"||p[1]==="Storage");
  const toggle=(name:string)=>setSelected(s=>s.includes(name)?s.filter(x=>x!==name):[...s,name]);
  const total=selected.length;
  return <main className="container py-16 md:py-24"><p className="eyebrow text-wood">Build your room</p><h1 className="display mt-4 max-w-4xl text-6xl md:text-8xl">Start with the room. Build from there.</h1><p className="mt-7 max-w-2xl text-base leading-7 text-ink/60">Choose a room, assemble a shortlist and keep the pieces that belong together. This is a planning layer, not a replacement for seeing the real furniture.</p>
    <div className="mt-14 grid gap-10 lg:grid-cols-[.72fr_1.28fr]"><aside className="border border-line p-5"><p className="eyebrow text-ink/45">01 · Room</p><div className="mt-4 grid gap-2">{rooms.map(r=><button key={r} onClick={()=>setRoom(r)} className={"flex items-center justify-between border px-4 py-3 text-left text-sm "+(room===r?"border-ink bg-ink text-paper":"border-line hover:bg-sand")}>{r}<span>↗</span></button>)}</div><p className="eyebrow mt-10 text-ink/45">02 · Pieces</p><p className="mt-2 text-sm text-ink/55">{total} selected</p></aside>
      <section><div className="grid gap-4 sm:grid-cols-2">{options.map(([name])=><button key={name} onClick={()=>toggle(name)} className={"min-h-48 border p-6 text-left transition "+(selected.includes(name)?"border-ink bg-sand":"border-line hover:bg-[#eee7de]")}><span className="eyebrow text-wood">HnH selection</span><h2 className="display mt-10 text-3xl">{name}</h2><p className="mt-2 text-sm text-ink/50">{selected.includes(name)?"Added to your room":"Add to room"}</p></button>)}</div><div className="mt-8 flex flex-col justify-between gap-5 border-t border-line pt-6 sm:flex-row sm:items-center"><p className="text-sm text-ink/55">Your room shortlist can become an enquiry when the final pieces are confirmed.</p><Link href="/contact" className="luxury-button inline-flex w-fit items-center bg-ink px-5 py-3 text-xs font-bold uppercase tracking-[.14em] text-paper">Talk to HnH</Link></div></section></div>
  </main>;
}
