"use client";

import {useEffect,useRef,useState,type CSSProperties,type ReactNode} from "react";
import {usePathname,useRouter} from "next/navigation";

export function MotionShell({children}:{children:ReactNode}){
  const router=useRouter();
  const pathname=usePathname();
  const [booting,setBooting]=useState(true);
  const [transitioning,setTransitioning]=useState(false);
  const [cursorVisible,setCursorVisible]=useState(false);
  const [cursorLabel,setCursorLabel]=useState("");
  const cursorRef=useRef<HTMLDivElement>(null);
  const progressRef=useRef<HTMLDivElement>(null);
  const scrollRef=useRef<HTMLSpanElement>(null);
  const rafRef=useRef<number|undefined>(undefined);
  const pendingHrefRef=useRef<string|null>(null);

  useEffect(()=>{
    const timer=window.setTimeout(()=>setBooting(false),700);
    return ()=>window.clearTimeout(timer);
  },[]);

  useEffect(()=>{
    const update=()=>{
      if(rafRef.current) return;
      rafRef.current=requestAnimationFrame(()=>{
        rafRef.current=undefined;
        const doc=document.documentElement;
        const max=doc.scrollHeight-window.innerHeight;
        const progress=max>0?Math.min(100,Math.max(0,(window.scrollY/max)*100)):0;
        progressRef.current?.style.setProperty("--progress",`${progress}%`);
        scrollRef.current?.style.setProperty("--scroll-progress",`${progress}%`);
      });
    };
    update();
    window.addEventListener("scroll",update,{passive:true});
    window.addEventListener("resize",update);
    return ()=>{if(rafRef.current)cancelAnimationFrame(rafRef.current);window.removeEventListener("scroll",update);window.removeEventListener("resize",update)};
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
      document.documentElement.style.setProperty("--light-x",`${Math.round((event.clientX/window.innerWidth)*100)}%`);
      document.documentElement.style.setProperty("--light-y",`${Math.round((event.clientY/window.innerHeight)*100)}%`);
      const node=cursorRef.current;
      if(!node) return;
      node.style.setProperty("--cursor-x",`${event.clientX}px`);
      node.style.setProperty("--cursor-y",`${event.clientY}px`);
    };
    const over=(event:PointerEvent)=>{
      const target=event.target as HTMLElement|null;
      const interactive=target?.closest("a,button,[data-cursor]");
      const label=interactive?.getAttribute("data-cursor")||"";
      if(cursorRef.current){
        cursorRef.current.classList.add("is-visible");
        const span=cursorRef.current.querySelector("span");
        if(span) span.textContent=label;
      }
    };
    const out=(event:PointerEvent)=>{
      const next=event.relatedTarget as HTMLElement|null;
      if(!next){
        cursorRef.current?.classList.remove("is-visible");
        return;
      }
      const interactive=next.closest("a,button,[data-cursor]");
      if(!interactive) cursorRef.current?.classList.remove("is-visible");
    };
    window.addEventListener("pointermove",move,{passive:true});
    document.addEventListener("pointerover",over);
    document.addEventListener("pointerout",out);
    return ()=>{document.body.classList.remove("luxury-cursor-enabled");window.removeEventListener("pointermove",move);document.removeEventListener("pointerover",over);document.removeEventListener("pointerout",out)};
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
      if(transitioning||pendingHrefRef.current===url.href) return;
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
    <div className="cinematic-light" aria-hidden="true"/><div className="cinematic-vignette" aria-hidden="true"/><div className="ambient-wash" aria-hidden="true"/>
    <div ref={progressRef} className="scroll-progress" style={{"--progress":"0%"} as CSSProperties} aria-hidden="true"/><div className="luxury-scrollbar" aria-hidden="true"><span ref={scrollRef}/></div>
    <div ref={cursorRef} className="luxury-cursor" aria-hidden="true"><span/></div>
    <div className={`page-transition ${transitioning?"is-active":""}`} aria-hidden="true"><div className="page-transition-mark">HnH</div><div className="page-transition-line"/></div>
    <div className={`page-loader ${booting?"is-active":""}`} aria-hidden="true"><div className="page-loader-mark">HnH</div><div className="page-loader-sub">Wood Studio</div><div className="page-loader-line"><span/></div></div>
    <div className="motion-content">{children}</div>
  </div>;
}
