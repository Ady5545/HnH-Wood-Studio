import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
export const metadata: Metadata = { title:"HnH Wood Studio | Furniture, Made for Living", description:"HnH Wood Studio furniture catalogue and online ordering." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader/>{children}</body></html>}
