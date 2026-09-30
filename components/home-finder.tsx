"use client";
import {useMemo,useState} from "react";
import Link from "next/link";
import {ArrowRight,Check} from "lucide-react";

const steps=[
 {label:"Room",options:[["Living","A welcoming anchor for the room."],["Bedroom","A calmer, more considered setting."],["Dining","A table-led space for gathering."],["Study","Focused furniture with quiet character."]]},
 {label:"Style",options:[["Warm","Natural textures and softer forms."],["Minimal","Clean lines and visual breathing room."],["Statement","One defining piece with presence."],["Timeless","Balanced shapes made to stay relevant."]]},
 {label:"Material",options:[["Wood","Warm grain and tactile natural character."],["Fabric","Soft texture and a more relaxed feel."],["Mixed","Layered materials with visual contrast."],["Refined","Subtle finishes and considered details."]]},
 {label:"Purpose",options:[["Gather","Pieces that bring people comfortably together."],["Rest","Furniture that supports a quieter room."],["Work","Practical pieces with a composed presence."],["Accent","One piece that changes the feeling of a space."]]}
];

export function HomeFinder(){
 const [step,setStep]=useState(0);
 const [choices,setChoices]=useState(["Living","Warm","Wood","Gather"]);
 const current=steps[step];
 const choice=choices[step];
 const copy=useMemo(()=>current.options.find(o=>o[0]===choice)?.[1]||"",[current,choice]);
 const choose=(value:string)=>setChoices(prev=>prev.map((v,i)=>i===step?value:v));
 return <section data-tone="#e7ddd0" className="border-y border-line bg-sand py-24 md:py-32">
  <div className="container grid gap-12 md:grid-cols-[.7fr_1.3fr] md:items-end">
   <div><p className="eyebrow text-wood">Find your starting point</p><h2 className="display mt-4 text-5xl md:text-6xl">Tell us what the room needs.</h2><p className="mt-6 max-w-md text-sm leading-7 text-ink/60">Build a direction in four simple choices, then take that feeling into the collection.</p><div className="mt-8 flex flex-wrap gap-2">{steps.map((s,i)=><button key={s.label} onClick={()=>setStep(i)} className={`border px-4 py-2 text-[10px] font-bold uppercase tracking-[.16em] transition ${step===i?"border-ink bg-ink text-paper":"border-ink/20 hover:bg-paper"}`}>{i+1} · {s.label}</button>)}</div></div>
   <div><div className="mb-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-[.16em] text-ink/40"><span>Step {step+1} of {steps.length}</span><span>{steps[step].label}</span></div><div className="grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">{current.options.map(([title,desc])=><button key={title} onClick={()=>choose(title)} className={`group min-h-[150px] bg-paper p-6 text-left transition duration-500 hover:bg-[#f1e9df] ${choice===title?"ring-1 ring-inset ring-ink":""}`}><div className="flex items-start justify-between"><span className="display text-3xl">{title}</span>{choice===title&&<Check size={17}/>}</div><p className="mt-8 max-w-xs text-sm leading-6 text-ink/55">{desc}</p></button>)}</div><div className="mt-7 flex flex-col justify-between gap-5 border-t border-ink/15 pt-6 sm:flex-row sm:items-center"><p className="text-sm text-ink/65"><span className="font-bold text-ink">{choice}.</span> {copy}</p><div className="flex items-center gap-5"><button onClick={()=>setStep((step+1)%steps.length)} className="text-xs font-bold uppercase tracking-[.15em] text-ink/50 transition hover:text-ink">Next <ArrowRight size={14} className="ml-2 inline"/></button><Link href="/contact" data-cursor="ENQUIRE" className="luxury-button inline-flex shrink-0 items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.15em]">Talk to HnH <ArrowRight size={15}/></Link></div></div></div>
  </div>
 </section>
}