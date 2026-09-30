"use client";
import {useState} from "react";
import {ProductPlaceholder} from "./product-placeholder";
export function ProductDetailImage({src,alt}:{src?:string;alt:string}){
  const [failed,setFailed]=useState(false);
  if(!src||failed) return <ProductPlaceholder label="HnH Wood Studio"/>;
  return <img src={src} alt={alt} onError={()=>setFailed(true)} className="h-full w-full object-cover"/>;
}
