"use client";

import {useMemo,useState} from "react";
import {ArrowRight} from "lucide-react";

const finishes:Array<[string,number]>=[["Natural Oak",0],["Walnut",3500],["Smoked Oak",5000],["Custom Finish",7500]];
const sizes:Array<[string,number]>=[["Standard",0],["Compact",-1500],["Grand",6500]];
const upholstery:Array<[string,number]>=[["None",0],["Linen",2500],["Performance Fabric",4500],["Premium Fabric",6500]];

export function ProductConfigurator({basePrice}:{basePrice?:number|null}){
  const [finish,setFinish]=useState(finishes[0][0] as string);
  const [size,setSize]=useState(sizes[0][0] as string);
  const [fabric,setFabric]=useState(upholstery[0][0] as string);
  const price=useMemo(()=>{
    const add=(list:Array<[string,string|number]>,value:string)=>Number(list.find(x=>x[0]===value)?.[1]||0);
    return (basePrice||0)+add(finishes,finish)+add(sizes,size)+add(upholstery,fabric);
  },[basePrice,finish,size,fabric]);
  const unavailable=!basePrice;
  return <div className="border-y border-line py-7">
    <div className="grid gap-6 sm:grid-cols-3">
      <Option label="Finish" value={finish} values={finishes.map(x=>x[0] as string)} onChange={setFinish}/>
      <Option label="Size" value={size} values={sizes.map(x=>x[0] as string)} onChange={setSize}/>
      <Option label="Upholstery" value={fabric} values={upholstery.map(x=>x[0] as string)} onChange={setFabric}/>
    </div>
    <div className="mt-7 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between">
      <div><p className="eyebrow text-wood">Configured piece</p><p className="display mt-2 text-3xl">{unavailable?"Catalogue price":"₹"+price.toLocaleString("en-IN")}</p></div>
      <button type="button" disabled={unavailable} className="luxury-button inline-flex items-center justify-center gap-3 bg-ink px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-paper disabled:cursor-not-allowed disabled:bg-ink/25">Save configuration <ArrowRight size={15}/></button>
    </div>
  </div>;
}

function Option({label,value,values,onChange}:{label:string;value:string;values:string[];onChange:(v:string)=>void}){
  return <label className="block"><span className="eyebrow text-ink/45">{label}</span><select value={value} onChange={e=>onChange(e.target.value)} className="mt-3 w-full border border-line bg-paper px-3 py-3 text-sm outline-none focus:border-wood">{values.map(v=><option key={v}>{v}</option>)}</select></label>;
}
