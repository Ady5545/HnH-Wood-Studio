"use client";
import {useState} from "react";
import {ProductPlaceholder} from "./product-placeholder";
export function StudioImage({src,alt,className=""}:{src?:string;alt:string;className?:string}){
  const [failed,setFailed]=useState(false);
  if(!src||failed) return <div className={className}><ProductPlaceholder label="HnH Wood Studio"/></div>;
  return <img src={src} alt={alt} onError={()=>setFailed(true)} className={"h-full w-full object-cover "+className}/>;
}
