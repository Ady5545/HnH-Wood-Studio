import {Reveal} from "@/components/reveal";
import {MaskReveal} from "@/components/mask-reveal";
import {ImageReveal} from "@/components/image-reveal";
import {ProductPlaceholder} from "@/components/product-placeholder";

const collections=["Living","Rest","Gather"];

export default function CollectionsPage(){
  return <main data-tone="#f6f2eb" className="container py-20 md:py-28">
    <Reveal><p className="eyebrow text-wood">Collections</p></Reveal>
    <MaskReveal><h1 className="display mt-4 text-6xl md:text-8xl">Curated spaces.</h1></MaskReveal>
    <Reveal delay={120}><p className="mt-7 max-w-2xl text-lg leading-8 text-ink/60">Collection storytelling will live here once the furniture catalogue and photography arrive.</p></Reveal>
    <div className="mt-16 grid gap-5 md:grid-cols-3">{collections.map((x,i)=><ImageReveal key={x} className="film-grain overflow-hidden"><div className="image-placeholder aspect-[3/4]"><ProductPlaceholder label={`COLLECTION 0${i+1}`} /><span className="absolute bottom-6 left-6 z-10 text-white"><span className="eyebrow block text-white/70">Collection 0{i+1}</span><span className="display mt-3 block text-4xl">{x}</span></span></div></ImageReveal>)}</div>
  </main>;
}