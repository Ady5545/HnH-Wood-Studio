import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./lib/**/*.{js,ts,jsx,tsx,mdx}"], theme: { extend: { colors: { ink:"#211c17", paper:"#f6f2eb", sand:"#e7ddd0", wood:"#806047", line:"#d9d0c4" }, fontFamily: { display:["Georgia","serif"], sans:["Arial","sans-serif"] } } }, plugins: [] };
export default config;
