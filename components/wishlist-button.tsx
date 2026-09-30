"use client";

import {Heart} from "lucide-react";
import {useEffect,useState} from "react";

export function WishlistButton({slug}:{slug:string}){
  const [saved,setSaved]=useState(false);
  useEffect(()=>{
    try{setSaved(JSON.parse(localStorage.getItem("hnh-wishlist")||"[]").includes(slug))}catch{}
  },[slug]);
  function toggle(){
    try{
      const list=JSON.parse(localStorage.getItem("hnh-wishlist")||"[]") as string[];
      const next=list.includes(slug)?list.filter(x=>x!==slug):[...list,slug];
      localStorage.setItem("hnh-wishlist",JSON.stringify(next));
      setSaved(next.includes(slug));
    }catch{}
  }
  return <button type="button" onClick={toggle} aria-label={saved?"Remove from wishlist":"Save to wishlist"} aria-pressed={saved} className={"grid h-11 w-11 place-items-center rounded-full border border-line transition "+(saved?"bg-sand":"hover:bg-sand")}>
    <Heart size={18} fill={saved?"currentColor":"none"}/>
  </button>;
}
