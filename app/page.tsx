import Link from "next/link";
import {ArrowDownRight,ArrowUpRight,ArrowRight} from "lucide-react";
import {ProductCard} from "@/components/product-card";
import {ProductPlaceholder} from "@/components/product-placeholder";
import {Reveal} from "@/components/reveal";
import {Parallax} from "@/components/motion";
import {ImageReveal} from "@/components/image-reveal";
import {MaskReveal} from "@/components/mask-reveal";
import {HorizontalGallery} from "@/components/horizontal-gallery";
import {products} from "@/lib/products";

const categories=["Living Room","Bedroom","Dining","Seating","Tables","Storage","Custom Furniture"];

export default function Home(){
  return <main>
    <section data-tone="#f6f2eb" className="container grid min-h-[calc(100vh-76px)] items-end gap-10 py-12 md:grid-cols-[1.05fr_.95fr] md:py-16">
      <div className="pb-4 md:pb-14">
        <Reveal><p className="eyebrow text-wood luxury-line">Furniture · Objects · Living</p></Reveal>
        <MaskReveal><h1 className="display mt-5 max-w-3xl text-6xl leading-[.92] sm:text-7xl md:text-[92px]">Made to make a <em className="not-italic text-wood">space</em> feel like yours.</h1></MaskReveal>
        <Reveal delay={180}><p className="mt-7 max-w-xl text-base leading-7 text-ink/65 md:text-lg">A refined home for furniture that brings warmth, character and intention into everyday living.</p></Reveal>
        <Reveal delay={260}><div className="mt-9 flex flex-wrap gap-3">
          <Link href="/shop" data-cursor="EXPLORE" className="luxury-button inline-flex items-center gap-3 bg-ink px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-paper">Explore the collection <ArrowUpRight size={16}/></Link>
          <Link href="/about" data-cursor="STUDIO" className="luxury-button inline-flex items-center gap-3 border border-ink/20 px-6 py-4 text-xs font-bold uppercase tracking-[.14em] hover:bg-sand">Our studio <ArrowDownRight size={16}/></Link>
        </div></Reveal>
      </div>
      <Reveal className="relative" delay={180}>
        <Parallax cinematic className="relative min-h-[520px] overflow-hidden md:min-h-[650px]">
          <ImageReveal className="h-full film-grain overflow-hidden">
            <div className="relative min-h-[560px] overflow-hidden md:min-h-[700px]">
              <ProductPlaceholder label="YOUR HERO PHOTOGRAPH"/>
              <div className="absolute bottom-5 left-5 z-10 rounded-full border border-white/30 bg-black/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-white backdrop-blur">Photography will be added</div>
            </div>
          </ImageReveal>
        </Parallax>
      </Reveal>
    </section>

    <section data-tone="#eee7de" className="border-y border-line bg-[#eee7de] py-24">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal><p className="eyebrow text-wood">The first look</p></Reveal>
            <MaskReveal><h2 className="display mt-3 max-w-2xl text-5xl md:text-6xl">A catalogue waiting for its pieces.</h2></MaskReveal>
          </div>
          <Reveal delay={160}><p className="max-w-sm text-sm leading-6 text-ink/60">The structure is ready. Once the real catalogue arrives, these placeholders become the actual HnH collection.</p></Reveal>
        </div>
        <Reveal delay={220}><div className="mt-12 grid gap-8 md:grid-cols-2">{products.slice(0,2).map(p=><ProductCard key={p.slug} product={p}/>)}</div></Reveal>
      </div>
    </section>

    <section data-tone="#f6f2eb" className="container py-24">
      <Reveal><p className="eyebrow text-wood">Shop by room</p></Reveal>
      <Reveal delay={100}><div className="mt-7 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">{categories.map((c,i)=><Link key={c} href="/shop" data-cursor="VIEW" className="group flex min-h-[140px] items-end justify-between border-b border-r border-line p-5 transition duration-700 hover:bg-sand">
        <div><span className="text-xs text-ink/35">0{i+1}</span><h3 className="display mt-7 text-2xl transition-transform duration-700 group-hover:translate-x-1">{c}</h3></div>
        <ArrowUpRight size={18} className="transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"/>
      </Link>)}</div></Reveal>
    </section>

    <HorizontalGallery/>

    <section data-tone="#f6f2eb" className="border-y border-line bg-[#eee7de] py-24 md:py-32">
      <div className="container grid gap-12 md:grid-cols-[.75fr_1.25fr] md:items-start">
        <div>
          <Reveal><p className="eyebrow text-wood">The HnH approach</p></Reveal>
          <MaskReveal><h2 className="display mt-4 text-5xl md:text-6xl">Less noise. More room to live.</h2></MaskReveal>
        </div>
        <Reveal delay={140}><div className="grid gap-10 sm:grid-cols-2">
          {[
            ["01","Warm materials","A visual language built around natural warmth, texture and pieces that belong in the room."],
            ["02","Quiet forms","Furniture presented with space around it, so the object remains the focus."],
            ["03","Made for homes","A collection experience designed around how people discover and choose furniture."],
            ["04","Your space, your way","Explore by room, browse individual pieces, or speak with the studio about a requirement."]
          ].map(([num,title,copy])=><div key={num} className="border-t border-ink/15 pt-5"><span className="text-xs text-ink/35">{num}</span><h3 className="display mt-6 text-3xl">{title}</h3><p className="mt-3 text-sm leading-7 text-ink/60">{copy}</p></div>)}
        </div></Reveal>
      </div>
    </section>

    <section data-tone="#f6f2eb" className="container py-24 md:py-32">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <Reveal><ImageReveal className="film-grain overflow-hidden"><div className="relative aspect-[4/5]"><ProductPlaceholder label="STUDIO / DETAIL PHOTOGRAPH"/><span className="absolute bottom-5 left-5 z-10 text-[10px] font-bold uppercase tracking-[.18em] text-white">Studio detail · photography to be added</span></div></ImageReveal></Reveal>
        <div className="md:pl-12">
          <Reveal><p className="eyebrow text-wood">Made personal</p></Reveal>
          <MaskReveal><h2 className="display mt-4 text-5xl md:text-6xl">A piece should work with the room — not against it.</h2></MaskReveal>
          <Reveal delay={130}><p className="mt-7 max-w-lg text-base leading-7 text-ink/60">Use this space to tell the real HnH story: materials, workmanship, custom requirements and the details that make each piece worth choosing.</p></Reveal>
          <Reveal delay={200}><Link href="/about" data-cursor="DISCOVER" className="luxury-button mt-8 inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.16em]">Discover the studio <ArrowRight size={16}/></Link></Reveal>
        </div>
      </div>
    </section>

    <section data-tone="#eee7de" className="border-y border-line bg-[#eee7de] py-24 md:py-28">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><Reveal><p className="eyebrow text-wood">More than a catalogue</p></Reveal><MaskReveal><h2 className="display mt-3 text-5xl md:text-6xl">Spaces, considered.</h2></MaskReveal></div>
          <Reveal delay={100}><p className="max-w-sm text-sm leading-7 text-ink/60">From everyday seating to statement pieces, the collection will grow here as the studio's real products arrive.</p></Reveal>
        </div>
        <Reveal delay={180}><div className="mt-12 grid border-t border-line md:grid-cols-3">
          {[
            ["01","Living","Sofas, chairs, tables and pieces that anchor the room."],
            ["02","Dining","A setting for everyday meals, long conversations and gatherings."],
            ["03","Bedroom","Furniture designed to bring calm, warmth and order to private spaces."]
          ].map(([num,title,copy])=><Link key={num} href="/shop" data-cursor="EXPLORE" className="group border-b border-r border-line p-7 transition duration-700 hover:bg-paper">
            <span className="text-xs text-ink/35">{num}</span><h3 className="display mt-16 text-4xl">{title}</h3><p className="mt-4 max-w-xs text-sm leading-6 text-ink/55">{copy}</p><span className="mt-8 inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 transition duration-500 group-hover:translate-x-1"><ArrowUpRight size={15}/></span>
          </Link>)}
        </div></Reveal>
      </div>
    </section>

    <section data-tone="#f6f2eb" className="container py-24 md:py-32">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div><Reveal><p className="eyebrow text-wood">Have something in mind?</p></Reveal><MaskReveal><h2 className="display mt-3 max-w-3xl text-5xl md:text-6xl">Let's create the right piece for the space.</h2></MaskReveal></div>
        <Reveal delay={140}><Link href="/contact" data-cursor="ENQUIRE" className="luxury-button inline-flex shrink-0 items-center gap-3 bg-ink px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-paper">Make an enquiry <ArrowUpRight size={16}/></Link></Reveal>
      </div>
    </section>

    <section data-tone="#211c17" className="bg-ink py-24 text-paper md:py-32">
      <div className="container grid gap-10 md:grid-cols-[1fr_.8fr] md:items-end">
        <div><Reveal><p className="eyebrow text-sand">The collection, in time</p></Reveal><MaskReveal><h2 className="display mt-4 text-5xl md:text-7xl">Good furniture deserves to be seen slowly.</h2></MaskReveal></div>
        <Reveal delay={150}><p className="max-w-md text-sm leading-7 text-paper/60">Real photography, product stories and specifications will replace these placeholders as the HnH catalogue comes together.</p></Reveal>
      </div>
    </section>

    <section data-tone="#f6f2eb" className="container py-28 text-center">
      <Reveal><p className="eyebrow text-wood">HnH Wood Studio</p></Reveal>
      <MaskReveal><h2 className="display mx-auto mt-5 max-w-4xl text-5xl leading-tight md:text-7xl">The website is ready. Now let's fill it with the furniture.</h2></MaskReveal>
      <Reveal delay={180}><Link href="/contact" data-cursor="ENQUIRE" className="luxury-button mt-9 inline-flex items-center gap-3 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.16em]">Start the catalogue <ArrowUpRight size={16}/></Link></Reveal>
    </section>

    <footer data-tone="#f6f2eb" className="border-t border-line py-10">
      <div className="container flex flex-col justify-between gap-5 text-xs text-ink/50 md:flex-row"><span>© {new Date().getFullYear()} HnH Wood Studio</span><span>Furniture · Objects · Living</span></div>
    </footer>
  </main>;
}