"use client";

import {Star} from "lucide-react";
import {useState} from "react";

export function ReviewsPanel(){
  const [showForm,setShowForm]=useState(false);
  return <section className="mt-20 border-t border-line pt-12">
    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div><p className="eyebrow text-wood">Reviews</p><h2 className="display mt-2 text-4xl">Tell us how the piece lives with you.</h2></div>
      <button onClick={()=>setShowForm(!showForm)} className="luxury-button border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.14em]">{showForm?"Close":"Share your experience"}</button>
    </div>
    <div className="mt-8 border border-line bg-[#eee7de] p-7 md:p-9">
      <div className="flex gap-1 text-wood">{[1,2,3,4,5].map(i=><Star key={i} size={15}/>)}</div>
      <h3 className="display mt-6 text-3xl">Your review becomes part of the story.</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/60">Share how you use your HnH piece, what you chose and what you love about living with it. Submitted reviews can be moderated before publication.</p>
    </div>
    {showForm&&<form className="mt-8 grid gap-4 border border-line p-6 sm:grid-cols-2">
      <input required className="border border-line bg-transparent px-4 py-3 outline-none" placeholder="Your name"/>
      <input type="email" required className="border border-line bg-transparent px-4 py-3 outline-none" placeholder="Email"/>
      <select className="border border-line bg-paper px-4 py-3 outline-none"><option>5 stars</option><option>4 stars</option><option>3 stars</option><option>2 stars</option><option>1 star</option></select>
      <input className="border border-line bg-transparent px-4 py-3 outline-none" placeholder="Product"/>
      <textarea required className="min-h-28 border border-line bg-transparent px-4 py-3 outline-none sm:col-span-2" placeholder="Tell us about your HnH piece"/>
      <button type="button" className="luxury-button w-fit bg-ink px-5 py-3 text-xs font-bold uppercase tracking-[.14em] text-paper">Submit for review</button>
    </form>}
  </section>;
}
