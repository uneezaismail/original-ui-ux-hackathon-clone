// // "use client"
// // import Card from '@/components/Card'
// // import { allData } from '@/components/data'
// // import FilterSortBar from '@/components/FilterSortBar'
// // import NavImage from '@/components/NavImage'
// // import Delivery from '@/components/ourDelivery'
// // import React from 'react'
// // // import { BiGridSmall } from 'react-icons/bi'
// // // import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
// // // import { RxDividerVertical } from 'react-icons/rx'


// // const Shop = () => {
// //   return (
// //     <section className='space-y-10'>
// //       <NavImage heading={"Shop"} path={"Home"} currentPage={"Shop"}/>
// //       <div className='flex flex-col justify-center'>
// //         <FilterSortBar/>

// //         {/* Display sorted and filtered items */}
// //         <div className="grid mx-auto px-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-x-8">
// //           {allData.map((item, index) => (
// //             <Card
// //               key={index}
// //               data={{
// //                 img: item.img,
// //                 heading: item.heading,
// //                 price: item.price,
// //                 hoverImg: item.hoverImg,
// //               }}
// //             />
// //           ))}
// //         </div>

// //         <div className="flex w-fit items-center gap-x-3 md:gap-x-9 mx-auto my-16">
// //           <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FBEBB5] rounded-xl">1</button>
// //           <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">2</button>
// //           <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">3</button>
// //           <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">Next</button>
// //         </div>
// //       </div>
// //       <Delivery />
// //     </section>
// //   )
// // }

// // export default Shop



// "use client";
// import Card from '@/components/Card';
// import FilterSortBar from '@/components/FilterSortBar';
// import NavImage from '@/components/NavImage';
// import Delivery from '@/components/ourDelivery';
// import { client } from '@/sanity/lib/client';
// import { allProductsQuery } from '@/sanity/schemaTypes/fetchQuery';
// import { Product } from '@/types/type';
// import React, { useEffect, useState } from 'react';



// const Shop = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const result = await client.fetch(allProductsQuery);
//         setProducts(result);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <section className="space-y-10">
//       <NavImage heading="Shop" path="Home" currentPage="Shop" />
//       <div className="flex flex-col justify-center">
//         <FilterSortBar />

//         {/* Display sorted and filtered items */}
//         <div className="grid mx-auto px-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-x-8">
//           {products.map((product:Product, index:number) => (
//           <Card         
//           key={index}   
//               data={{
//                 img: product.images[0], // Display the first image from the array
//                 heading: product.name,
//                 price: product.price,
//                 hoverImg: product.images[1] || product.images[0], // Optional hover image
//                 slug: product.slug.current,
//               }}
//             />
          
//           ))}
//         </div>

//         <div className="flex w-fit items-center gap-x-3 md:gap-x-9 mx-auto my-16">
//           <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FBEBB5] rounded-xl">1</button>
//           <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">2</button>
//           <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">3</button>
//           <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">Next</button>
//         </div>
//       </div>
//       <Delivery />
//     </section>
//   );
// };

// export default Shop;












import Card from '@/components/Card'
import { allData } from '@/components/data'
import NavImage from '@/components/NavImage'
import Delivery from '@/components/ourDelivery'
import React from 'react'
import { BiGridSmall } from 'react-icons/bi'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { RxDividerVertical } from 'react-icons/rx'

const Shop = () => {
  return (
   <section className='space-y-10'>
     <NavImage heading={"Shop"} path={"Home"} currentPage={"Shop"}/>
     <div className='flex flex-col justify-center '>
<div className='flex flex-col py-4 bg-[#FAF4F4] sm:flex-row justify-around items-center gap-y-4 sm:gap-y-0'>
<div className='flex items-center gap-x-6'>
  <div className='flex items-center gap-x-4'>
    <span><HiOutlineAdjustmentsHorizontal size={30}/></span>
    <span className='text-xl'>Filter</span>
  </div>
  <span><BiGridSmall size={30}/></span>
  <span><RxDividerVertical size={30}/></span>
  <p>Showing 1-16 of 32 results</p>
</div>

 <div className='flex items-center gap-x-6'>
 <div className='space-x-4'>
    <span>Show</span>
    <input type="number" placeholder='16' className='bg-white w-[55px] h-[55px] items-center p-2'/>
 </div>
 <div className='space-x-4'>
    <span>Sort by</span>
    <input type="number" placeholder='Default' className='bg-white w-[188px] h-[55px] items-center p-3'/>
</div>
 </div>
 <div></div>
      </div>

     <div className="grid mx-auto px-2 grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-x-8">
         {allData.map((item, index) => (
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

      <div className="flex w-fit items-center gap-x-3 md:gap-x-9 mx-auto my-16">
    <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FBEBB5] rounded-xl">1</button>
    <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">2</button>
    <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">3</button>
    <button className="px-6 md:px-8 py-4 md:py-6 bg-[#FFF9E5] rounded-xl">Next</button>
  </div>
      </div>
   <Delivery/>
   </section>
  )
}

export default Shop