import {ProductCard} from "@/components/product-card";
import {products} from "@/lib/products";
import {Reveal} from "@/components/reveal";
import {MaskReveal} from "@/components/mask-reveal";

export default function ShopPage(){
  return <main data-tone="#f6f2eb" className="container py-16 md:py-24">
    <Reveal><p className="eyebrow text-wood">The collection</p></Reveal>
    <MaskReveal><h1 className="display mt-4 text-6xl md:text-8xl">Shop.</h1></MaskReveal>
    <Reveal delay={120}><p className="mt-6 max-w-xl text-base leading-7 text-ink/60">Explore the HnH collection by category, room and individual piece.</p></Reveal>
    <Reveal delay={180}><div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">{products.map(p=><ProductCard key={p.slug} product={p}/>)}</div></Reveal>
  </main>;
}
