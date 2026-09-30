"use client";

import {useEffect,useRef,useState,type ReactNode} from "react";

export function MaskReveal({children,className=""}:{children:ReactNode;className?:string}){
  const ref=useRef<HTMLDivElement>(null);
  const [visible,setVisible]=useState(false);
  useEffect(()=>{
    const node=ref.current;
    if(!node) return;
    const observer=new IntersectionObserver(([entry])=>{
      if(entry.isIntersecting){
        setVisible(true);
        observer.disconnect();
      }
    },{threshold:0.12,rootMargin:"0px 0px -5% 0px"});
    observer.observe(node);
    return ()=>observer.disconnect();
  },[]);
  return <div ref={ref} className={`mask-reveal ${visible?"mask-reveal-visible":""} ${className}`}><div className="mask-reveal-inner">{children}</div></div>;
}