"use client";

import {useEffect,useRef,useState,type CSSProperties, type ReactNode} from "react";
import {usePathname,useRouter} from "next/navigation";

export function MotionShell({children}:{children:ReactNode}){
  const router=useRouter();
  const pathname=usePathname();
  const [progress,setProgress]=useState(0);
  const [booting,setBooting]=useState(true);
  const [transitioning,setTransitioning]=useState(false);
  const [cursorVisible,setCursorVisible]=useState(false);
  const [cursorLabel,setCursorLabel]=useState("");
  const cursorRef=useRef<HTMLDivElement>(null);
  const rafRef=useRef<number|undefined>(undefined);
  const pendingHrefRef=useRef<string|null>(null);

  useEffect(()=>{
    const timer=window.setTimeout(()=>setBooting(false),900);
    return ()=>window.clearTimeout(timer);
  },[]);

  useEffect(()=>{
    const update=()=>{
      if(rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current=requestAnimationFrame(()=>{
        const doc=document.documentElement;
        const max=doc.scrollHeight-window.innerHeight;
        setProgress(max>0?Math.min(100,Math.max(0,(window.scrollY/max)*100)):0);
      });
    };
    update();
    window.addEventListener("scroll",update,{passive:true});
    window.addEventListener("resize",update);
    return ()=>{
      if(rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll",update);
      window.removeEventListener("resize",update);
    };
  },[]);

  useEffect(()=>{
    setTransitioning(false);
    pendingHrefRef.current=null;
    window.scrollTo(0,0);
  },[pathname]);

  useEffect(()=>{
    const fine=window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if(!fine) return;
    document.body.classList.add("luxury-cursor-enabled");

    const move=(event:PointerEvent)=>{
      const node=cursorRef.current;
      if(!node) return;
      node.style.setProperty("--cursor-x",`${event.clientX}px`);
      node.style.setProperty("--cursor-y",`${event.clientY}px`);
    };
    const over=(event:PointerEvent)=>{
      const target=event.target as HTMLElement|null;
      const interactive=target?.closest("a,button,[data-cursor]");
      setCursorVisible(true);
      setCursorLabel(interactive?.getAttribute("data-cursor")||"");
    };
    const leave=()=>setCursorVisible(false);
    const out=(event:PointerEvent)=>{ if(!(event.relatedTarget as Node|null)) leave(); };

    window.addEventListener("pointermove",move,{passive:true});
    document.addEventListener("pointerover",over);
    document.addEventListener("pointerout",out);

    return ()=>{
      document.body.classList.remove("luxury-cursor-enabled");
      window.removeEventListener("pointermove",move);
      document.removeEventListener("pointerover",over);
      document.removeEventListener("pointerout",out);
    };
  },[]);

  useEffect(()=>{
    const toneNodes=[...document.querySelectorAll<HTMLElement>("[data-tone]")];
    if(!toneNodes.length) return;
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
      if(visible){
        const tone=(visible.target as HTMLElement).dataset.tone;
        if(tone) document.documentElement.style.setProperty("--ambient-tone",tone);
      }
    },{threshold:[0.15,0.35,0.6,0.8]});
    toneNodes.forEach(node=>observer.observe(node));
    return ()=>observer.disconnect();
  },[pathname]);

  useEffect(()=>{
    const onClick=(event:MouseEvent)=>{
      const target=event.target as HTMLElement|null;
      const anchor=target?.closest<HTMLAnchorElement>("a[href]");
      if(!anchor) return;
      if(anchor.target==="_blank"||anchor.hasAttribute("download")||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey) return;
      const url=new URL(anchor.href,window.location.href);
      if(url.origin!==window.location.origin) return;
      if(url.pathname===window.location.pathname&&url.search===window.location.search&&url.hash) return;
      event.preventDefault();
      if(transitioning || pendingHrefRef.current===url.href) return;
      pendingHrefRef.current=url.href;
      setTransitioning(true);
      if(anchor.matches("[data-cart-link]")){
        anchor.classList.remove("cart-bump");
        void anchor.offsetWidth;
        anchor.classList.add("cart-bump");
      }
      window.setTimeout(()=>router.push(`${url.pathname}${url.search}${url.hash}`),280);
    };
    document.addEventListener("click",onClick);
    return ()=>document.removeEventListener("click",onClick);
  },[router,transitioning]);

  return <div className="motion-shell">
    <div className="ambient-wash" aria-hidden="true"/>
    <div className="scroll-progress" style={{"--progress":`${progress}%`} as CSSProperties} aria-hidden="true"/>
    <div ref={cursorRef} className={`luxury-cursor ${cursorVisible?"is-visible":""}`} aria-hidden="true">
      <span>{cursorLabel}</span>
    </div>
    <div className={`page-transition ${transitioning ? "is-active" : ""}`} aria-hidden="true"}>
      <div className="page-transition-mark">HnH</div>
      <div className="page-transition-line"/>
    </div>
    <div className={`page-loader ${booting ? "is-active" : ""}`} aria-hidden="true"}>
      <div className="page-loader-mark">HnH</div>
      <div className="page-loader-sub">Wood Studio</div>
      <div className="page-loader-line"><span/></div>
    </div>
    <div className="motion-content">{children}</div>
  </div>;
}