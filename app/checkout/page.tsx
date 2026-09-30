import {Reveal} from "@/components/reveal";
import {MaskReveal} from "@/components/mask-reveal";

export default function CheckoutPage(){
  return <main data-tone="#f6f2eb" className="container py-20 md:py-28">
    <Reveal><p className="eyebrow text-wood">Secure checkout</p></Reveal>
    <MaskReveal><h1 className="display mt-4 text-6xl md:text-8xl">Checkout.</h1></MaskReveal>
    <div className="mt-12 grid gap-10 md:grid-cols-2">
      <Reveal><div className="border border-line p-7"><h2 className="display text-3xl">Delivery details</h2><div className="mt-7 space-y-3">{["Full name","Phone","Email","Address","City","State","PIN code"].map(x=><input key={x} className="w-full border border-line bg-transparent px-4 py-3.5 outline-none placeholder:text-ink/35" placeholder={x}/>)}</div></div></Reveal>
      <Reveal delay={120}><div className="border border-line bg-[#eee7de] p-7"><h2 className="display text-3xl">Payment</h2><p className="mt-5 text-sm leading-6 text-ink/60">UPI will connect through a proper payment gateway after the HnH business account is set up. The site will not directly handle UPI credentials.</p><button disabled className="luxury-button mt-8 w-full cursor-not-allowed bg-ink/35 px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-paper">Payment gateway pending</button></div></Reveal>
    </div>
  </main>;
}