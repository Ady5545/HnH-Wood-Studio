"use client";

import Link from "next/link";
import {Menu,ShoppingBag,X} from "lucide-react";
import {useState} from "react";

const links=[["Shop","/shop"],["Collections","/collections"],["About","/about"],["Contact","/contact"]];

export function SiteHeader(){
  const[open,setOpen]=useState(false);
  return <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/95 backdrop-blur-md">
    <div className="container flex h-[76px] items-center justify-between">
      <Link href="/" onClick={()=>setOpen(false)} data-cursor="HOME" className="transition-opacity duration-500 hover:opacity-70">
        <span className="display text-[25px] tracking-[-.055em]">HnH</span><span className="ml-2 text-[10px] font-bold uppercase tracking-[.2em] text-wood">Wood Studio</span>
      </Link>
      <nav className="hidden items-center gap-8 md:flex">{links.map(([label,href])=><Link key={href} href={href} data-cursor={label.toUpperCase()} className="luxury-nav-link text-[12px] font-bold uppercase tracking-[.14em] text-ink/70 hover:text-ink">{label}</Link>)}</nav>
      <div className="flex items-center gap-2">
        <Link href="/cart" data-cart-link data-cursor="BAG" aria-label="Cart" className="cart-control grid h-10 w-10 place-items-center rounded-full hover:bg-sand"><ShoppingBag size={18} strokeWidth={1.7}/></Link>
        <button className="grid h-10 w-10 place-items-center rounded-full hover:bg-sand md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X size={20}/>:<Menu size={20}/>}</button>
      </div>
    </div>
    {open&&<nav className="mobile-menu border-t border-line bg-paper px-5 pb-6 pt-3 md:hidden">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)} className="block border-b border-line py-4 text-sm font-bold uppercase tracking-[.14em]">{label}</Link>)}<Link href="/cart" data-cart-link onClick={()=>setOpen(false)} className="block py-4 text-sm font-bold uppercase tracking-[.14em]">Cart</Link></nav>}
  </header>;
}