"use client";

import {useEffect,useRef,useState} from "react";
import {ArrowUpRight} from "lucide-react";
import {StudioImage} from "@/components/studio-image";

const cards=[
  ["01","Living","/images/gallery/living.jpg"],
  ["02","Rest","/images/gallery/bedroom.jpg"],
  ["03","Gather","/images/gallery/dining.jpg"],
  ["04","Seat","/images/gallery/seating.jpg"],
];

export function HorizontalGallery(){
  const sectionRef=useRef<HTMLElement>(null);
  const trackRef=useRef<HTMLDivElement>(null);
  const [x,setX]=useState(0);
  useEffect(()=>{
    const update=()=>{
      const section=sectionRef.current;
      const track=trackRef.current;
      if(!section||!track) return;
      const max=Math.max(0,track.scrollWidth-window.innerWidth+48);
      const travel=Math.max(1,section.offsetHeight-window.innerHeight);
      const raw=-section.getBoundingClientRect().top/travel;
      const progress=Math.min(1,Math.max(0,raw));
      setX(-max*progress);
    };
    update();
    window.addEventListener("scroll",update,{passive:true});
    window.addEventListener("resize",update);
    return ()=>{window.removeEventListener("scroll",update);window.removeEventListener("resize",update)};
  },[]);
  return <section ref={sectionRef} data-tone="#eee7de" className="horizontal-gallery-section border-y border-line bg-[#eee7de]">
    <div className="sticky top-0 flex h-screen items-center overflow-hidden">
      <div ref={trackRef} className="flex gap-6 px-[max(20px,calc((100vw-1180px)/2))]" style={{transform:`translate3d(${x}px,0,0)`}}>
        <div className="w-[min(360px,74vw)] shrink-0 self-center pr-6">
          <p className="eyebrow text-wood">The studio edit</p>
          <h2 className="display mt-4 text-5xl leading-[.95] sm:text-6xl">Spaces, composed slowly.</h2>
          <p className="mt-6 max-w-sm text-sm leading-6 text-ink/60">A visual edit of rooms, proportions and pieces designed to work together.</p>
          <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[.16em] text-ink/55"><span className="h-px w-10 bg-ink/30"/><span>Scroll to explore</span></div>
        </div>
        {cards.map(([num,title,src])=><article key={num} className="group w-[min(430px,78vw)] shrink-0">
          <div className="image-reveal image-reveal-visible film-grain overflow-hidden"><div className="luxury-image aspect-[4/5]"><StudioImage src={src} alt={title}/></div></div>
          <div className="flex items-center justify-between border-b border-line py-4"><div><span className="eyebrow text-wood">{num}</span><h3 className="display mt-1 text-3xl">{title}</h3></div><ArrowUpRight size={18} className="transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"/></div>
        </article>)}
      </div>
    </div>
  </section>;
}