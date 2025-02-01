// "use client";
// import React from "react";
// import Link from "next/link";
// import Card from "./Card";
// import { topPick } from "./data";
// import {Swiper, SwiperSlide} from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";

// export interface TopPickItem {
//   img: string;
//   hoverImg: string;
//   heading: string;
//   price: string;
//   category?: string;
//   salePrice?: string;
//   isOnSale?: boolean;
//   isNew?: boolean;
// }


// const TopPicks= () => {
//   return (
//     <section className="w-full max-w-screen-xl mx-auto py-14 px-2 md:px-0 space-y-10 md:space-y-20 flex flex-col items-center justify-center">
//       {/* Heading Section */}
//       <div className="flex flex-col items-center gap-y-6 text-center">
//         <h4 className="text-3xl md:text-4xl font-medium font-poppins">
//           Top Picks For You
//         </h4>
//         <p className="font-medium text-gray-400 font-poppins">
//           Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
//         </p>
//       </div>

//       {/* Grid Section */}
//       <Swiper
//         modules={[ Pagination]}
//         slidesPerView={1}
        
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//           1280: { slidesPerView: 4 },
//         }}
       
//         pagination={{ clickable: true }}
        
//         className="w-full flex justify-center"
//       > {topPick.map((item: TopPickItem, index: number) => (
//         <SwiperSlide key={index} className=" place-items-center">
//           <Card
//             key={index}
//             data={{
//               img: item.img,
//               hoverImg: item.hoverImg,
//               heading: item.heading,
//               price: item.price,
//             }}
//           />
//         </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* View More Button */}
//       <div className="flex items-center justify-center">
//         <Link href={"/productdetails"}>
//           <button className="font-poppins transition-transform duration-300 ease-in-out hover:scale-105 hover:text-gray-700 mt-10 md:mt-0 text-xl font-medium border-b-2 border-black pb-3">
//             View More
//           </button>
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default TopPicks;














import React from "react";
import Card from "./Card";
import { topPick } from "./data";
import Link from "next/link";

const TopPicks = () => {
  return (
    <section className="py-14 px-2 md:px-0  space-y-16 flex flex-col items-center  bg-white">
      {/* Heading Section */}
      <div className="flex flex-col items-center gap-y-3 text-center">
        <h4 className="text-4xl font-medium font-poppins">Top Picks For You</h4>
        <p className="font-medium text-gray-500 font-poppins">
          Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
        {topPick.map((item, index) => (
          <Card
            key={index}
            data={{
              img: item.img,
              heading: item.heading,
              price: item.price,
            }}
          />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex items-center justify-center">
       <Link href={"/productdetails"}> <button className="font-poppins text-xl font-medium border-b-2 border-black pb-2 md:pb-5">
          View More
        </button></Link>
      </div>
    </section>
  );
};

export default TopPicks;