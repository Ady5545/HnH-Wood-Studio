import {notFound} from "next/navigation";
import Link from "next/link";
import {ArrowLeft,ShoppingBag} from "lucide-react";
import {getProduct} from "@/lib/products";
import {ProductPlaceholder} from "@/components/product-placeholder";
import {Reveal} from "@/components/reveal";
import {MaskReveal} from "@/components/mask-reveal";
import {ImageReveal} from "@/components/image-reveal";

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const product=getProduct(slug);
  if(!product) notFound();
  const price=product.price?"₹"+product.price.toLocaleString("en-IN"):"To be added";
  return <main data-tone="#f6f2eb" className="container py-12 md:py-20">
    <Reveal><Link href="/shop" data-cursor="BACK" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-ink/55"><ArrowLeft size={15}/>Back to shop</Link></Reveal>
    <div className="mt-10 grid gap-12 md:grid-cols-[1.05fr_.95fr]">
      <ImageReveal className="film-grain overflow-hidden"><div className="aspect-[4/5]"><ProductPlaceholder label={product.imageLabel}/></div></ImageReveal>
      <div className="md:pt-8">
        <Reveal><p className="eyebrow text-wood">{product.category}</p></Reveal>
        <MaskReveal><h1 className="display mt-3 text-6xl">{product.name}</h1></MaskReveal>
        <Reveal delay={100}><p className="mt-6 text-base leading-7 text-ink/65">{product.description}</p></Reveal>
        <Reveal delay={160}><div className="my-8 border-y border-line py-6"><p className="text-sm font-bold">Price: {price}</p><p className="mt-2 text-xs text-ink/50">Availability and specifications will be added with the final catalogue.</p></div></Reveal>
        <Reveal delay={220}><button disabled data-cursor="BAG" className="luxury-button inline-flex w-full cursor-not-allowed items-center justify-center gap-3 bg-ink/35 px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-paper"><ShoppingBag size={17}/>Add to cart — awaiting catalogue</button></Reveal>
      </div>
    </div>
  </main>;
}