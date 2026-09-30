import {Reveal} from "@/components/reveal";
import {MaskReveal} from "@/components/mask-reveal";
import {StudioImage} from "@/components/studio-image";

const craft=[["01","Materials","The starting point: wood, texture, finish and the way each material catches light."],["02","Joinery","Details that give a piece strength while keeping the visual language quiet."],["03","Finishing","Surfaces refined for touch, use and the character of the material underneath."],["04","Craftsmanship","A balance of precision and warmth, made for furniture that belongs in everyday life."]];

export function CraftSection(){
 return <section data-tone="#f6f2eb" className="container py-24 md:py-32">
  <div className="grid gap-12 md:grid-cols-[.9fr_1.1fr] md:items-center">
   <div><Reveal><p className="eyebrow text-wood">Craft</p></Reveal><MaskReveal><h2 className="display mt-4 text-5xl md:text-6xl">Made with intention.</h2></MaskReveal><Reveal delay={120}><p className="mt-6 max-w-md text-sm leading-7 text-ink/60">Good furniture rewards attention. The process is felt in the edge of a table, the balance of a chair and the surface you touch every day.</p></Reveal><Reveal delay={180}><div className="mt-10 overflow-hidden film-grain"><div className="aspect-[4/3]"><StudioImage src="/images/craft.jpg" alt="Furniture craftsmanship"/></div></div></Reveal>
   </div>
   <Reveal delay={120}><div className="border-t border-line">{craft.map(([n,t,c])=><div key={n} className="grid gap-5 border-b border-line py-7 sm:grid-cols-[70px_1fr]"><span className="text-xs text-wood">{n}</span><div><h3 className="display text-3xl">{t}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-ink/60">{c}</p></div></div>)}</div></Reveal>
  </div>
 </section>
}