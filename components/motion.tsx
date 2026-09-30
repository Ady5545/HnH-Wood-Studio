"use client";
import { useEffect, useRef } from "react";
export function Parallax({children,className=""}:{children:React.ReactNode;className?:string}){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{const el=ref.current;if(!el)return;let raf=0;
 const on=()=>{cancelAnimationFrame(raf);raf=requestAnimationFrame(()=>{const r=el.getBoundingClientRect();const y=Math.max(-28,Math.min(28,(window.innerHeight/2-(r.top+r.height/2))*0.035));el.style.setProperty("--parallax-y",y+"px")})};
 on();window.addEventListener("scroll",on,{passive:true});window.addEventListener("resize",on);return()=>{cancelAnimationFrame(raf);window.removeEventListener("scroll",on);window.removeEventListener("resize",on)};
 },[]);
 return <div ref={ref} className={className}><div className="parallax-inner">{children}</div></div>;
}