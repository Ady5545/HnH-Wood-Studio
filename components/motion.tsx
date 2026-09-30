"use client";

import {useEffect,useRef,type ReactNode} from "react";

type ParallaxProps={children:ReactNode;className?:string;cinematic?:boolean};

export function Parallax({children,className="",cinematic=false}:ParallaxProps){
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const el=ref.current;
    if(!el) return;
    let raf=0;
    const update=()=>{
      cancelAnimationFrame(raf);
      raf=requestAnimationFrame(()=>{
        const r=el.getBoundingClientRect();
        if(r.bottom<0||r.top>window.innerHeight) return;
        const center=window.innerHeight/2;
        const offset=center-(r.top+r.height/2);
        const y=Math.max(-28,Math.min(28,offset*0.035));
        el.style.setProperty("--parallax-y",y+"px");
        if(cinematic){
          const progress=Math.min(1,Math.max(0,(window.innerHeight-r.top)/(window.innerHeight+r.height)));
          const scale=1.035-progress*0.035;
          el.style.setProperty("--parallax-scale",scale.toFixed(4));
        }
      });
    };
    update();
    window.addEventListener("scroll",update,{passive:true});
    window.addEventListener("resize",update);
    return ()=>{cancelAnimationFrame(raf);window.removeEventListener("scroll",update);window.removeEventListener("resize",update)};
  },[cinematic]);
  return <div ref={ref} className={className+" "+(cinematic?"parallax-cinematic":"")}><div className="parallax-inner">{children}</div></div>;
}
