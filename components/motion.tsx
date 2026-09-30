"use client";

import {useEffect,useRef,type ReactNode} from "react";

type ParallaxProps={children:ReactNode;className?:string;cinematic?:boolean};

export function Parallax({children,className="",cinematic=false}:ParallaxProps){
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el=ref.current;
    if(!el) return;
    let raf=0;
    const on=()=>{
      cancelAnimationFrame(raf);
      raf=requestAnimationFrame(()=>{
        const r=el.getBoundingClientRect();
        const center=window.innerHeight/2;
        const offset=center-(r.top+r.height/2);
        const y=Math.max(-36,Math.min(36,offset*0.045));
        el.style.setProperty("--parallax-y",y+"px");
        if(cinematic){
          const progress=Math.min(1,Math.max(0,(window.innerHeight-r.top)/(window.innerHeight+r.height)));
          const scale=1.045-progress*0.045;
          el.style.setProperty("--parallax-scale",scale.toFixed(4));
        }
      });
    };
    on();
    window.addEventListener("scroll",on,{passive:true});
    window.addEventListener("resize",on);
    return ()=>{
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll",on);
      window.removeEventListener("resize",on);
    };
  },[cinematic]);
  return <div ref={ref} className={className+" "+(cinematic?"parallax-cinematic":"")}><div className="parallax-inner">{children}</div></div>;
}