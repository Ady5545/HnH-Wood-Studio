import {Reveal} from "@/components/reveal";
import {MaskReveal} from "@/components/mask-reveal";

export default function ContactPage(){
  return <main data-tone="#f6f2eb" className="container py-20 md:py-28">
    <Reveal><p className="eyebrow text-wood">Contact</p></Reveal>
    <MaskReveal><h1 className="display mt-4 text-6xl md:text-8xl">Let's talk furniture.</h1></MaskReveal>
    <div className="mt-14 grid gap-10 border-t border-line pt-10 md:grid-cols-2">
      <Reveal><div><p className="text-sm leading-7 text-ink/60">Business phone, email, studio address and social links will be connected when the client provides them.</p></div></Reveal>
      <Reveal delay={120}><form className="space-y-4"><input className="w-full border border-line bg-transparent px-4 py-4 outline-none placeholder:text-ink/35" placeholder="Your name"/><input className="w-full border border-line bg-transparent px-4 py-4 outline-none placeholder:text-ink/35" placeholder="Email"/><textarea className="min-h-36 w-full border border-line bg-transparent px-4 py-4 outline-none placeholder:text-ink/35" placeholder="How can we help?"/><button type="button" data-cursor="SEND" className="luxury-button bg-ink px-6 py-4 text-xs font-bold uppercase tracking-[.14em] text-paper">Send enquiry</button></form></Reveal>
    </div>
  </main>;
}