import {Reveal} from "@/components/reveal";
import {MaskReveal} from "@/components/mask-reveal";

export default function CartPage(){
  return <main data-tone="#f6f2eb" className="container py-20 md:py-28">
    <Reveal><p className="eyebrow text-wood">Your bag</p></Reveal>
    <MaskReveal><h1 className="display mt-4 text-6xl md:text-8xl">Cart.</h1></MaskReveal>
    <Reveal delay={120}><div className="mt-12 border-y border-line py-12 text-center"><p className="display text-3xl">Your cart is waiting for the catalogue.</p><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink/55">Once products, prices and stock are supplied, this becomes the full cart and checkout flow.</p></div></Reveal>
  </main>;
}