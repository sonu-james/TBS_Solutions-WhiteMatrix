import { title } from "framer-motion/client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const product = [
    {title:"Photocopier Rentals",
    des: "Flexible rental options with full maintenance included.",
    img:"https://tse1.mm.bing.net/th/id/OIP.D3nhvrXh3H1swdoIS8Lb-gHaE8?pid=Api&P=0&h=180"
},
{
    title:"Large Format Printers",
    des:"Graphtec & Mistral cutting plotters for precision work.",
    img:"https://5.imimg.com/data5/AZ/KY/WS/GLADMIN-3061/hp-designjet-z5400-44-inch-large-format-printer.jpg"
},
{
    title:"Projectors & Video Walls",
    des:"4K Ultra HD with Android support for seamless presentations.",
    img:"http://images.frandroid.com/wp-content/uploads/2018/01/lg.jpeg"
},
{
    title:"Barcode Solutions",
    des:"Labels, stickers, ribbons & thermal printing supplies.",
    img:"https://ghost-image.boxhero.io/https://boxhero-en.ghost.io/content/images/2024/11/iStock-154958970.jpg"
},
{
    title:"Lamination Equipment",
    des:"Professional hot & cold laminator series.",
    img:"https://m.media-amazon.com/images/I/41azrtBjALL._SY355_.jpg"
},{
    title:"Office Equipments",
    des:"Binding, shredding & scanning machines.",
    img:"http://g-ecx.images-amazon.com/images/G/01/electronics/detail-page/DR2020USlantwDoc_nobkgd.jpg"
},
{
    title:"Toners & Ink Cartridges",
    des:"High quality printer suppliers",
    img:"https://smartink.pro/ca/wp-content/uploads/sites/4/2023/03/set-spare-laser-printer-toner-cartridges-cyan-magenta-yellow-black-1-scaled.jpg"
},
{
    title:"Binding Machines",
    des:"Binding, shredding & scanning machines.",
    img:"https://www.artnews.com/wp-content/uploads/2020/12/AdobeStock_103157278.jpeg"
},
{
    title:"Shredders",
    des:"Modern tool for waste management",
    img:"https://m.media-amazon.com/images/I/71E1W-DNv0L.jpg"
},
{
    title:"Cutting Plotters",
    des:"Precision cutting, allowing businesses and hobbyists to create intricate designs effortlessly.",
    img:"https://cuttingplotters.in/wp-content/uploads/2023/11/10.png"
},

]
const products = Array.from({ length: 10 }).map((_, i) => ({
  title: `Item ${i + 1}`,
  img: "https://tse1.mm.bing.net/th/id/OIP.D3nhvrXh3H1swdoIS8Lb-gHaE8?pid=Api&P=0&h=180",
}));

export default function CustomGrid() {
  return (
   <>
   <Navbar/>
    <div className="p-3 mt-20 ">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-Grotesk font-bold text-3xl font-bold bg-clip-text text-gray-800 
                     text-center mb-16"
        >
          Premium Equipment & Products
          <p className="font-Grotesk text-sm text-gray-500 mt-8 font-normal">Industry-leading equipment and supplies for your business needs
</p>
        </motion.h2>


        <div className=" grid grid-cols-1 md:grid-cols-4 gap-2 auto-rows-[150px] m-28 rounded" >
          {product.map((product, idx) => {
            const col = idx % 4; // figure out column index
            // Assign row span based on column
            const rowSpan =
              idx === 1 || idx === 2 || idx === 6 || idx===7   ? "row-span-3" : "row-span-2";
    
            return (
              <div
                key={idx}
                className={`relative group overflow-hidden rounded-lg shadow-lg ${rowSpan}`}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white  font-semibold">
                <h1 className="text-xl text-center">  {product.title}</h1>
                  <p className="  font-Grotesk flex items-center justify-center text-center mt-2" >{product.des}</p>
                </div>
              </div>
            );
          })}
        </div>
    </div>
   
   
   </>
  );
}
