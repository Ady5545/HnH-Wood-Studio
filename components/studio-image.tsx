"use client";

import Image from "next/image";
import {useState} from "react";
import {ProductPlaceholder} from "./product-placeholder";

export function StudioImage({src,alt,className=""}:{src?:string;alt:string;className?:string}){
  const [failed,setFailed]=useState(false);
  if(!src||failed) return <div className={"relative h-full w-full "+className}><ProductPlaceholder label="HnH Wood Studio"/></div>;
  return <div className={"relative h-full w-full "+className}><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" onError={()=>setFailed(true)} className="object-cover"/></div>;
}
