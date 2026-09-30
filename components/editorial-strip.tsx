import Link from "next/link";
import {ArrowUpRight} from "lucide-react";
import {StudioImage} from "@/components/studio-image";

const items=[
 ["/images/editorial/editorial-01.jpg","Quiet corners","Living"],
 ["/images/editorial/editorial-02.jpg","A place to gather","Dining"],
 ["/images/editorial/editorial-03.jpg","Objects with presence","Details"],
];

export function EditorialStrip(){
 return <section data-tone="#211c17" className="bg-ink py-24 text-paper md:py-32">
  <div className="container">
   <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="eyebrow text-sand">The HnH journal</p><h2 className="display mt-4 text-5xl md:text-6xl">Ideas for living well.</h2></div><p className="max-w-sm text-sm leading-7 text-paper/55">A growing collection of rooms, materials and furniture stories.</p></div>
   <div className="mt-12 grid gap-6 md:grid-cols-3">
    {items.map(([src,title,tag],i)=><Link href="/about" key={title} className="group block">
      <div className="film-grain overflow-hidden"><div className="luxury-image aspect-[4/5]"><StudioImage src={src} alt={title}/></div></div>
      <div className="flex items-end justify-between border-b border-paper/15 py-5"><div><p className="eyebrow text-sand">{tag}</p><h3 className="display mt-2 text-3xl">{title}</h3></div><ArrowUpRight size={18} className="transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"/></div>
    </Link>)}
   </div>
  </div>
 </section>
}