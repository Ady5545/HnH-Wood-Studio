import {Reveal} from "@/components/reveal";
import {MaskReveal} from "@/components/mask-reveal";

export default function AboutPage(){
  return <main data-tone="#f6f2eb" className="container py-20 md:py-28">
    <Reveal><p className="eyebrow text-wood">The studio</p></Reveal>
    <MaskReveal><h1 className="display mt-4 max-w-5xl text-6xl leading-[.95] md:text-8xl">Furniture should feel personal.</h1></MaskReveal>
    <Reveal delay={140}><p className="mt-10 max-w-2xl text-lg leading-8 text-ink/65">This page is ready for the real HnH Wood Studio story. We will add the founder's story, workshop details, materials, process and genuine brand claims once the client supplies them.</p></Reveal>
  </main>;
}