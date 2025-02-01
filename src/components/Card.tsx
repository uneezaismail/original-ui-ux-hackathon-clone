// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export interface CardProps {
//   data: {
//     img: string; 
//     hoverImg: string; 
//     heading: string;
//     price: string; 
//     salePrice?: string; 
//     isOnSale?: boolean; 
//     isNew?: boolean; 
//     category?:string;
//     slug: string;
//   };
// }

// const Card: React.FC<CardProps> = ({ data }) => {
//   return (
//     <div className="group w-[300px] space-y-4  relative">
//       {/* Tags */}
//       <div className="absolute left-2  z-40 top-2 space-y-2">
//         {data.isNew && (
//           <div className="bg-black text-white text-xs px-4 py-1 ">New</div>
//         )}
//         {data.isOnSale && (
//           <div className="bg-red-500  text-white text-xs px-4 py-1 ">Sale</div>
//         )}
//       </div>
//       <Link href={`/productdetails/${data.slug}`} >
//       {/* Image Container */}
//       <div className="relative w-full h-[280px]  overflow-hidden md:h-[300px] flex items-center justify-center bg-transparent">
//         {/* Default Image */}
//         <Image
//           src={data.img}
//           alt={data.heading}
//           layout="fill"
//           objectFit="cover"
//           className="transition-opacity overflow-hidden duration-300 opacity-100 group-hover:opacity-0"
//         />

//         {/* Hover Image */}
//         <Image
//             src={data.hoverImg}
//           alt={`${data.heading}-hover`}
//           layout="fill"
//           objectFit="cover"
//           className="absolute transition-opacity overflow-hidden duration-300 opacity-0 group-hover:opacity-100"
//         />
//       </div>
// </Link>
//       {/* Card Text */}
//       <div className="space-y-3 text-center w-full">
//         <h3 className="font-medium ">{data.heading}</h3>
//         {data.isOnSale ? (
//           <div className="text-sm">
//             <span className="line-through  text-gray-400">{data.price}</span>
//             <span className="text-gray-950 font-semibold ml-2">{data.salePrice}</span>
//           </div>
//         ) : (
//           <p className="text-sm text-gray-950 font-semibold">{data.price}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Card;
















import Image from "next/image";
import React from "react";

interface CardProps {
  data: {
    img: string;
    heading: string;
    price: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="md:w-[372px] lg:w-[250px] xl:w-[287px] h-[372px] space-y-4">
      {/* Image Container */}
      <div className="w-full h-[250px] flex items-center justify-center bg-transparent">
        <div className=" w-full h-[220px] relative">
          <Image
            src={data.img}
            alt={data.heading}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Card Text */}
      <div className="space-y-3">
        <h3 className="font-medium text-base">{data.heading}</h3>
        <p className="text-lg sm:text-2xl font-medium">{data.price}</p>
      </div>
    </div>
  );
};

export default Card;