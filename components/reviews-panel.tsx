"use client";

import {Star} from "lucide-react";
import {useState} from "react";

export function ReviewsPanel(){
  const [showForm,setShowForm]=useState(false);
  return <section className="mt-20 border-t border-line pt-12">
    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="eyebrow text-wood">From the home</p><h2 className="display mt-2 text-4xl">Real rooms, real pieces.</h2></div><button onClick={()=>setShowForm(!showForm)} className="luxury-button border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.14em]">{showForm?"Close":"Share your experience"}</button></div>
    <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3">
      {[["A considered piece that settled into the room beautifully.","Homeowner"],["The details are what made it feel special.","Homeowner"],["Warm, useful and made for everyday life.","Homeowner"]].map(([quote,name])=><article key={quote} className="bg-paper p-6"><div className="flex gap-1">{[1,2,3,4,5].map(i=><Star key={i} size={13} fill="currentColor"/></div><p className="mt-5 text-sm leading-7 text-ink/70">“{quote}”</p><p className="mt-5 eyebrow text-wood">{name}</p></article>)}
    </div>
    {showForm&&<form className="mt-8 grid gap-4 border border-line p-6 sm:grid-cols-2"><input className="border border-line bg-transparent px-4 py-3 outline-none" placeholder="Your name"/><input className="border border-line bg-transparent px-4 py-3 outline-none" placeholder="Email"/><textarea className="min-h-28 border border-line bg-transparent px-4 py-3 outline-none sm:col-span-2" placeholder="Tell us about your HnH piece"/><button type="button" className="luxury-button w-fit bg-ink px-5 py-3 text-xs font-bold uppercase tracking-[.14em] text-paper">Submit for review</button></form>}
  </section>;
}
