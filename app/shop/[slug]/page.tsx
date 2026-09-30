import {notFound} from "next/navigation";
import Link from "next/link";
import {ArrowLeft,ArrowRight,ShoppingBag} from "lucide-react";
import {getProduct} from "@/lib/products";
import {StudioImage} from "@/components/studio-image";
import {Reveal} from "@/components/reveal";
import {MaskReveal} from "@/components/mask-reveal";
import {ImageReveal} from "@/components/image-reveal";
import {ProductConfigurator} from "@/components/product-configurator";
import {DimensionsViewer} from "@/components/dimensions-viewer";
import {WishlistButton} from "@/components/wishlist-button";
import {DeliveryEstimator} from "@/components/delivery-estimator";
import {ReviewsPanel} from "@/components/reviews-panel";

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const product=getProduct(slug);
  if(!product) notFound();
  return <main data-tone="#f6f2eb" className="container py-12 md:py-20">
    <Reveal><Link href="/shop" data-cursor="BACK" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-ink/55"><ArrowLeft size={15}/>Back to shop</Link></Reveal>
    <div className="mt-10 grid gap-12 md:grid-cols-[1.05fr_.95fr]">
      <ImageReveal className="film-grain overflow-hidden"><div className="aspect-[4/5]"><StudioImage src={product.image} alt={product.name}/></div></ImageReveal>
      <div className="md:pt-8">
        <Reveal><p className="eyebrow text-wood">{product.category}</p></Reveal>
        <MaskReveal><h1 className="display mt-3 text-6xl">{product.name}</h1></MaskReveal>
        <Reveal delay={100}><p className="mt-6 text-base leading-7 text-ink/65">{product.description}</p></Reveal>
        <Reveal delay={160}><div className="my-8"><ProductConfigurator basePrice={product.price}/></div></Reveal>
        <Reveal delay={220}><div className="flex gap-3"><button type="button" className="luxury-button inline-flex flex-1 items-center justify-center gap-3 bg-ink px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-paper"><ShoppingBag size={17}/>Add to bag</button><WishlistButton slug={product.slug}/></div></Reveal>
        <Reveal delay={280}><p className="mt-4 text-xs leading-6 text-ink/45">Your final configuration, price and availability are confirmed before purchase.</p></Reveal>
      </div>
    </div>
    <DimensionsViewer/>
    <DeliveryEstimator/>
    <ReviewsPanel/>
    <section className="mt-20 border-t border-line pt-12"><p className="eyebrow text-wood">Keep exploring</p><div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><h2 className="display max-w-2xl text-4xl">Find the piece that makes the room work.</h2><Link href="/room-planner" className="luxury-button inline-flex items-center gap-2 border-b border-ink pb-2 text-xs font-bold uppercase tracking-[.14em]">Build a room <ArrowRight size={15}/></Link></div></section>
  </main>;
}
