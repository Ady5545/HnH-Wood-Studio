import type {Metadata} from "next";
import "./globals.css";
import {SiteHeader} from "@/components/site-header";
import {MotionShell} from "@/components/motion-shell";

export const metadata:Metadata={
  title:"HnH Wood Studio | Furniture, Made for Living",
  description:"HnH Wood Studio furniture catalogue and online ordering.",
  icons:{icon:"/favicon.svg",shortcut:"/favicon.svg",apple:"/favicon.svg"}
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><MotionShell><SiteHeader/>{children}</MotionShell></body></html>;
}