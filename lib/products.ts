export type Product={slug:string;name:string;category:string;description?:string;price?:number|null;image?:string;imageLabel?:string;threeD?:{modelUrl?:string;posterUrl?:string;arUrl?:string}};

export const products:Product[]=[
  {slug:"product-01",name:"Collection Piece 01",category:"Living",description:"A considered living piece with warm proportions and an understated presence.",image:"/images/products/product-01.jpg"},
  {slug:"product-02",name:"Collection Piece 02",category:"Bedroom",description:"Quiet lines and tactile surfaces designed for a calmer room.",image:"/images/products/product-02.jpg"},
  {slug:"product-03",name:"Collection Piece 03",category:"Dining",description:"A generous centrepiece for everyday meals and longer gatherings.",image:"/images/products/product-03.jpg"},
  {slug:"product-04",name:"Collection Piece 04",category:"Seating",description:"Comfort-led form with a clean silhouette and lasting character.",image:"/images/products/product-04.jpg"}
];

export function getProduct(slug:string){return products.find(p=>p.slug===slug)}
