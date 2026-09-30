"use client";

import Link from "next/link";
import {useState} from "react";
import type {MouseEvent} from "react";
import type {Product} from "@/lib/products";
import {ArrowUpRight} from "lucide-react";
import {ProductPlaceholder} from "./product-placeholder";
import {ImageReveal} from "./image-reveal";

export function ProductCard({product}:{product:Product}){
  const [imageFailed,setImageFailed]=useState(false);
  const moveSpotlight=(event:MouseEvent<HTMLDivElement>)=>{
    const rect=event.currentTarget.getBoundingClientRect();
    const x=((event.clientX-rect.left)/rect.width)*100;
    const y=((event.clientY-rect.top)/rect.height)*100;
    event.currentTarget.style.setProperty("--spot-x",`${x}%`);
    event.currentTarget.style.setProperty("--spot-y",`${y}%`);
  };
  return <Link href={"/shop/"+product.slug} data-cursor="VIEW" className="group block luxury-lift">
    <ImageReveal className="film-grain overflow-hidden">
      <div onMouseMove={moveSpotlight} className="product-spotlight relative aspect-[4/5] overflow-hidden">
        <div className="luxury-image h-full">
          {product.image && !imageFailed ? <img src={product.image} alt={product.name} onError={()=>setImageFailed(true)} className="h-full w-full object-cover"/> : <ProductPlaceholder label="HnH Wood Studio"/>}
        </div>
      </div>
    </ImageReveal>
    <div className="flex items-start justify-between gap-4 border-b border-line py-5">
      <div>
        <p className="eyebrow text-wood">{product.category}</p>
        <h3 className="display mt-1 text-2xl">{product.name}</h3>
        {product.description&&<p className="mt-2 max-w-xs text-sm leading-6 text-ink/60">{product.description}</p>}
      </div>
      <ArrowUpRight className="mt-1 shrink-0 transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" size={19} strokeWidth={1.5}/>
    </div>
  </Link>;
}
