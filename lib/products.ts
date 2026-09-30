export type Product={slug:string;name:string;category:string;description?:string;price?:number|null;image?:string;imageLabel?:string;threeD?:{modelUrl?:string;posterUrl?:string;arUrl?:string}};

// Catalogue slots: replace only `name` and `image` when the final product list is supplied.
// Category keeps the navigation useful even before the final names are entered.
export const products:Product[]=[
  {slug:"product-01",name:"Collection Piece 01",category:"Living",image:"/images/products/product-01.jpg"},
  {slug:"product-02",name:"Collection Piece 02",category:"Bedroom",image:"/images/products/product-02.jpg"},
  {slug:"product-03",name:"Collection Piece 03",category:"Dining",image:"/images/products/product-03.jpg"},
  {slug:"product-04",name:"Collection Piece 04",category:"Seating",image:"/images/products/product-04.jpg"}
];

export function getProduct(slug:string){return products.find(p=>p.slug===slug)}
