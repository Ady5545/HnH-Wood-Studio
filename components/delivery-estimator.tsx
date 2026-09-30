"use client";

import {useMemo,useState} from "react";

export function DeliveryEstimator(){
  const [pin,setPin]=useState("");
  const result=useMemo(()=>{
    if(pin.length!==6)return null;
    const prefix=Number(pin.slice(0,3));
    if(!Number.isFinite(prefix))return null;
    if(prefix>=201&&prefix<=203)return "Greater Noida / NCR — local delivery estimate";
    return "Delivery availability — confirm with HnH";
  },[pin]);
  return <section className="mt-10 border border-line p-6 md:p-8"><p className="eyebrow text-wood">Delivery</p><h2 className="display mt-2 text-3xl">Check your area.</h2><div className="mt-6 flex flex-col gap-3 sm:flex-row"><input value={pin} onChange={e=>setPin(e.target.value.replace(/\D/g,"").slice(0,6))} inputMode="numeric" placeholder="PIN code" className="border border-line bg-transparent px-4 py-3 outline-none sm:max-w-xs"/><div className="flex items-center border border-line bg-[#eee7de] px-4 py-3 text-sm text-ink/60">{result||"Enter a 6-digit PIN"}</div></div><p className="mt-4 text-xs leading-6 text-ink/45">Final delivery timing and charges are confirmed against the selected piece, destination and installation requirements.</p></section>;
}
