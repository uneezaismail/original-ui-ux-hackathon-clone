// // import NavImage from '@/components/NavImage';
// // import Delivery from '@/components/ourDelivery';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import React from 'react';
// // import { AiFillDelete } from 'react-icons/ai';

// // const Cart = () => {
// //   return (
// //     <section className="w-[98%] md:w-full  md:space-y-16 ">
// //       <NavImage heading={"Cart"} path={"Home"} currentPage={"Cart"}/>
// //       <div className="flex flex-col lg:flex-row max-w-screen-xl   mx-auto justify-between gap-y-20 lg:gap-x-8">
// //         {/* Product List */}
// //         <div className="w-full lg:max-w-[817px] space-y-8">
// //           {/* Large Screen - Flex Layout */}
// //           <div className="hidden md:block bg-[#FFF9E5] py-4 rounded-lg">
// //             <ul className="flex items-center justify-around text-sm md:text-base font-medium">
// //               <li>Product</li>
// //               <li>Price</li>
// //               <li>Quantity</li>
// //               <li>Subtotal</li>
// //             </ul>
// //           </div>

// //           {/* Product Item for Small Screens */}
// //           <div className="md:hidden py-10 flex flex-col gap-y-8">
// //             <div className="flex items-center gap-4 border-b pb-4">
// //               <div className="relative w-24 h-20 bg-[#FBEBB5] rounded-lg">
// //                 <Image
// //                   src="/table-2.jpg"
// //                   alt="cart-img"
// //                   layout="fill"
// //                   objectFit="contain"
// //                 />
// //               </div>
// //               <div className="flex-grow">
// //                 <p className="text-gray-500 text-sm truncate">
// //                   Asgaard sofa
// //                 </p>
// //                 <p className="text-gray-500 text-xs mt-2">Rs. 250,000.00</p>
// //                 <div className="flex items-center gap-4 mt-4">
// //                   <span className="px-2 py-1 border border-gray-300 rounded-md text-xs sm:text-sm">
// //                     1
// //                   </span>
// //                   <p className="font-medium text-sm">Rs. 250,000.00</p>
// //                 </div>
// //               </div>
// //               <AiFillDelete
// //                 className="text-[#FBEBB5] cursor-pointer"
// //                 size={24}
// //               />
// //             </div>
// //           </div>

// //           {/* Product Item for Medium and Large Screens */}
// //           <div className="hidden md:flex items-center justify-between">
// //             <div className="flex items-center gap-4">
// //               <div className="relative w-24 h-24 bg-[#FBEBB5] rounded-lg">
// //                 <Image
// //                   src="/hero.png"
// //                   alt="cart-img"
// //                   layout="fill"
// //                   objectFit="contain"
// //                 />
// //               </div>
// //               <p className="text-gray-500 text-sm md:text-base font-medium truncate max-w-[150px]">
// //                 Asgaard sofa
// //               </p>
// //             </div>
// //             <p className="text-gray-500 text-sm md:text-base font-medium">Rs. 250,000.00</p>
// //             <span className="px-4 py-1 border border-gray-300 rounded-md text-sm md:text-base">
// //               1
// //             </span>
// //             <p className="text-sm md:text-base font-medium">Rs. 250,000.00</p>
// //             <AiFillDelete
// //               className="hover:text-[#c79c39] text-[#FBEBB5] cursor-pointer"
// //               size={30}
// //             />
// //           </div>
// //         </div>

// //         {/* Cart Totals */}
// //         <div className="bg-[#FFF9E5] flex flex-col items-center justify-between px-6 py-8 w-full md:w-96 lg:w-72 xl:w-96 h-auto md:h-96  rounded-md">
// //           <h4 className="text-2xl md:text-3xl font-semibold mb-6">Cart Totals</h4>
// //           <div className="flex flex-col gap-y-6 w-full">
// //             <div className="flex justify-between">
// //               <span className="font-medium text-base md:text-lg">Subtotal</span>
// //               <span className="text-gray-400 text-base md:text-lg">Rs. 250,000.00</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span className="font-medium text-base md:text-lg">Total</span>
// //               <span className=" text-[#B88E2F] font-medium text-lg md:text-xl">
// //                 Rs. 250,000.00
// //               </span>
// //             </div>
// //           </div>
// //           <Link href="/checkout">
// //             <button className="w-full mt-6 px-16 py-3 border-2 border-black text-black hover:text-white hover:bg-black  text-base md:text-lg rounded-xl">
// //               Check Out
// //             </button>
// //           </Link>
// //         </div>
// //       </div>
// //       <Delivery/>
// //     </section>
// //   );
// // };

// // export default Cart;
















// // "use client";
// // import React, { useState } from "react";
// // import { AiFillDelete } from "react-icons/ai";
// // import Image from "next/image";
// // import Link from "next/link";

// // const Cart = () => {
// //   // Dummy cart data
// //   const cartItems = [
// //     {
// //       id: "1",
// //       name: "Sofa Set",
// //       price: 15000,
// //       quantity: 1,
// //       image: "/hero.png",

// //     },
// //     {
// //       id: "2",
// //       name: "Cushion",
// //       price: 1200,
// //       quantity: 2,
// //       image: "/table-2-4.jpg",
// //     },
// //     {
// //       id: "3",
// //       name: "Coffee Table",
// //       price: 4500,
// //       quantity: 1,
// //       image: "/dummy-image3.jpg",
// //     },
// //   ];

// //   const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
// //   const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

// //   const [selectedItems, setSelectedItems] = useState<string[]>([]);

// //   const handleCheckboxChange = (id: string) => {
// //     setSelectedItems((prev) =>
// //       prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
// //     );
// //   };

// //   const totalSelectedPrice = selectedItems.reduce((acc, id) => {
// //     const item = cartItems.find((item) => item.id === id);
// //     const price = item?.price || 0;
// //     return acc + price * (item?.quantity || 0);
// //   }, 0);

// //   const incrementItem = (id: string) => {
// //     const updatedItems = cartItems.map((item) =>
// //       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
// //     );
// //     // Here, you can update your cart context or state with updatedItems if needed
// //   };

// //   const decrementItem = (id: string) => {
// //     const updatedItems = cartItems.map((item) =>
// //       item.id === id && item.quantity > 1
// //         ? { ...item, quantity: item.quantity - 1 }
// //         : item
// //     );
// //     // Here, you can update your cart context or state with updatedItems if needed
// //   };

// //   const removeItem = (id: string) => {
// //     const updatedItems = cartItems.filter((item) => item.id !== id);
// //     // Here, you can update your cart context or state with updatedItems if needed
// //   };

// //   return (
// //     <section className="w-full sm:px-6 md:space-y-16">
// //       <div className="max-w-screen-xl md:mx-auto">
// //         <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
// //         <div className="flex flex-col lg:flex-row justify-between gap-y-10 lg:gap-x-8">
// //           {/* Cart Items */}
// //           <div className="w-full lg:max-w-[700px] xl:max-w-[817px] space-y-8">
// //             <div className="hidden md:block bg-[#FFF9E5] py-4 rounded-lg">
// //               <ul className="flex items-center justify-around text-sm md:text-base font-medium">
// //                 <li>Product</li>
// //                 <li>Quantity</li>
// //                 <li>Subtotal</li>
// //               </ul>
// //             </div>

// //             {cartItems.map((item) => (
// //               <div
// //                 key={item.id}
// //                 className="flex flex-row items-center justify-between p-2 md:p-4 rounded-lg shadow gap-y-4 md:gap-y-0"
// //               >
// //                 <div className="flex flex-row items-center gap-4">
// //                   <input
// //                     type="checkbox"
// //                     className="w-4 h-4 md:w-5 md:h-5"
// //                     onChange={() => handleCheckboxChange(item.id)}
// //                     checked={selectedItems.includes(item.id)}
// //                   />
// //                   <div className="relative w-24 h-24 bg-[#FBEBB5] rounded-lg">
// //                     <Image
// //                       src={item.image}
// //                       alt={item.name}
// //                       layout="fill"
// //                       objectFit="contain"
// //                     />
// //                   </div>
// //                   <div className="space-y-6">
// //                     <p className="text-gray-500 text-sm md:text-base font-medium truncate max-w-[150px]">
// //                       {item.name}
// //                     </p>
// //                     <p className="md:hidden text-sm md:text-base font-medium">
// //                       Rs. {item.quantity * item.price}
// //                     </p>
// //                   </div>
// //                 </div>

// //                 <p className="hidden md:block text-sm md:text-base font-medium">
// //                   Rs. {item.quantity * item.price}
// //                 </p>

// //                 <div className="flex-col-reverse md:flex-row flex gap-4">
// //                   <div className="flex items-center gap-2">
// //                     <button
// //                       onClick={() => decrementItem(item.id)}
// //                       className="px-2 py-1 border border-gray-300 rounded-md"
// //                     >
// //                       -
// //                     </button>
// //                     <span className="px-2 sm:px-4 py-1 border border-gray-300 rounded-md">
// //                       {item.quantity}
// //                     </span>
// //                     <button
// //                       onClick={() => incrementItem(item.id)}
// //                       className="px-2 py-1 border border-gray-300 rounded-md"
// //                     >
// //                       +
// //                     </button>
// //                   </div>
// //                   <div className="flex justify-end w-full">
// //                     <AiFillDelete
// //                       onClick={() => removeItem(item.id)}
// //                       className=" hover:text-[#c79c39] size-8 text-[#FBEBB5] cursor-pointer"
// //                       size={20}
// //                     />
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Cart Totals */}
// //           <div className="bg-[#FFF9E5] flex flex-col items-center px-6 py-16 w-80 mx-auto md:w-96 lg:w-72 xl:w-96 rounded-md">
// //             <h4 className="text-2xl md:text-3xl font-semibold mb-6">Cart Totals</h4>
// //             <div className="flex flex-col gap-y-6 w-full">
// //               <div className="flex justify-between">
// //                 <span className="font-medium text-base md:text-lg">Subtotal</span>
// //                 <span className="text-gray-400 text-base md:text-lg">
// //                   Rs. {totalPrice}
// //                 </span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span className="font-medium text-base md:text-lg">Total Items</span>
// //                 <span className="text-[#B88E2F] font-medium text-lg md:text-xl">
// //                   {totalItems}
// //                 </span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span className="font-medium text-base md:text-lg">Total</span>
// //                 <span className="text-[#B88E2F] font-medium text-lg md:text-xl">
// //                   Rs. {totalPrice}
// //                 </span>
// //               </div>
// //             </div>

// //             <Link
// //               href="/checkout"
// //               className="w-full text-center mt-10 py-4 bg-[#B88E2F] rounded-xl text-white font-medium"
// //             >
// //               Proceed to Checkout
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Cart;



















// "use client";
// import React from "react";
// import { AiFillDelete } from "react-icons/ai";
// import Image from "next/image";
// import Link from "next/link";
// import { useCart } from "@/app/cartContext/CartContext";

// const Cart = () => {
//   const {
//     cartItems,
//     removeItem,
//     incrementItem,
//     decrementItem,
//     totalPrice,
//     totalItems,
//   } = useCart();

//   return (
//     <section className="w-full sm:px-6 md:space-y-16">
//       <div className="max-w-screen-xl md:mx-auto">
//         <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
//         <div className="flex flex-col lg:flex-row justify-between gap-y-10 lg:gap-x-8">
//           {/* Cart Items */}
//           <div className="w-full lg:max-w-[700px] xl:max-w-[817px] space-y-8">
//             <div className="hidden md:block bg-[#FFF9E5] py-4 rounded-lg">
//               <ul className="flex items-center justify-around text-sm md:text-base font-medium">
//                 <li>Product</li>
//                 <li>Subtotal</li>
//                 <li>Quantity</li>
//               </ul>
//             </div>

//             {cartItems.length > 0 ? (
//               cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex flex-row items-center justify-between p-2 md:p-4 rounded-lg shadow gap-y-4 md:gap-y-0"
//                 >
//                   <div className="flex flex-row items-center gap-4">
//                     <div className="relative w-24 h-24 bg-[#FBEBB5] rounded-lg">
//                       <Image
//                         src={item.image}
//                         alt={item.name}
//                         layout="fill"
//                         objectFit="contain"
//                       />
//                     </div>
//                     <div className="space-y-6">
//                       <p className="text-gray-500 text-sm md:text-base font-medium truncate max-w-[150px]">
//                         {item.name}
//                       </p>
//                       <p className="md:hidden text-sm md:text-base font-medium">
//                         Rs. {item.quantity * item.price}
//                       </p>
//                     </div>
//                   </div>

//                   <p className="hidden md:block text-sm md:text-base font-medium">
//                     Rs. {item.quantity * item.price}
//                   </p>

//                   <div className="flex-col-reverse md:flex-row flex gap-4">
//                     <div className="flex items-center gap-2">
//                       <button
//                         onClick={() => decrementItem(item.id)}
//                         className="px-2 py-1 border border-gray-300 rounded-md"
//                       >
//                         -
//                       </button>
//                       <span className="px-2 sm:px-4 py-1 border border-gray-300 rounded-md">
//                         {item.quantity}
//                       </span>
//                       <button
//                         onClick={() => incrementItem(item.id)}
//                         className="px-2 py-1 border border-gray-300 rounded-md"
//                       >
//                         +
//                       </button>
//                     </div>
//                     <div className="flex justify-end w-full">
//                       <AiFillDelete
//                         onClick={() => removeItem(item.id)}
//                         className="hover:text-[#c79c39] text-[#FBEBB5] cursor-pointer"
//                         size={20}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>Your cart is empty!</p>
//             )}
//           </div>

//           {/* Cart Totals */}
//           <div className="bg-[#FFF9E5] flex flex-col items-center px-6 py-16 w-80 mx-auto md:w-96 lg:w-72 xl:w-96 rounded-md">
//             <h4 className="text-2xl md:text-3xl font-semibold mb-6">Cart Totals</h4>
//             <div className="flex flex-col gap-y-6 w-full">
//               <div className="flex justify-between">
//                 <span className="font-medium text-base md:text-lg">Subtotal</span>
//                 <span className="text-gray-400 text-base md:text-lg">
//                   Rs. {totalPrice}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="font-medium text-base md:text-lg">Total Items</span>
//                 <span className="text-[#B88E2F] font-medium text-lg md:text-xl">
//                   {totalItems}
//                 </span>
//               </div>
//             </div>

//             {cartItems.length > 0 ? (
//   <Link
//     href="/checkout"
//     className="w-full text-center mt-10 cursor-pointer py-4 border-2 border-black text-black hover:text-white hover:bg-black rounded-xl font-medium"
//   >
//     Proceed to Checkout
//   </Link>
// ) : (
//   <button
//     disabled
//     className="w-full text-center mt-10 py-4 border-2 border-gray-300 text-gray-400 bg-gray-100 cursor-not-allowed rounded-xl font-medium"
//   >
//     Proceed to Checkout
//   </button>
// )}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Cart;













import NavImage from '@/components/NavImage'
import Delivery from '@/components/ourDelivery'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

const Cart = () => {
  return (
    <section className='w-full  md:space-y-16'>
      <NavImage heading={"Cart"} path={"Home"} currentPage={"Cart"}/>
      <div className='m-2 sm:mx-4 xl:m-0 flex flex-col md:flex-row justify-between gap-y-16 md:justify-center gap-x-7 my-16'>
        {/* Product List */}
        <div className='h-fit space-y-12 w-full md:w-[817px]'>
          <div className='bg-[#FFF9E5] py-4'>
            <ul className='flex items-center justify-around sm:justify-evenly'>
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
            </ul>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col sm:flex-row items-center gap-x-2 sm:gap-x-4'>
              <div className='relative w-[70px] sm:w-[95px] lg:w-[106px] h-[50px] lg:h-[106px] bg-[#FBEBB5] rounded-xl'>
                <Image src={"/new-arrivals.png"} alt='cart-img' layout='fill' objectFit='contain' />
              </div>
              <p className='text-gray-500 text-sm md:text-base'>Asgaard sofa</p> 
            </div>
            <p className='text-gray-500 text-sm md:text-base'>Rs. 250,000.00</p>
            <input type="number" placeholder='1' className='text-black border text-sm md:text-base border-gray-300  w-10 rounded-xl text-center p-2'/>
            <p className='font-medium text-sm md:text-base'>Rs. 250,000.00</p>
            <span className='hidden sm:inline-block'><AiFillDelete className='text-[#FBEBB5]' size={30}/></span>
          </div>
        </div>

        {/* Cart Totals */}
        <div className='bg-[#FFF9E5] h-fit md:h-[390px] flex flex-col px-6 md:px-20 py-10 md:p-0 md:pt-3 rounded-md gap-y-14'>
          <h4 className='text-3xl font-semibold'>
            Cart Totals
          </h4>
          <div className='flex flex-col gap-y-12'>
            <div className='flex flex-col gap-y-7'>
              <p className='flex items-center justify-between'>
                <span className='font-medium'>Subtotal</span>
                <span className='text-gray-300'>Rs. 250,000.00</span>
              </p>
              <p className='flex items-center justify-between'>
                <span className='font-medium'>Total</span>
                <span className='font-medium text-xl text-[#B88E2F]'>Rs. 250,000.00</span>
              </p>
            </div>
            <div> 
              <Link href={"/checkout"}><button className='text-xl px-14 py-3 border border-black rounded-xl'>
                Check Out
              </button></Link>
            </div>
          </div>
        </div>
      </div>
      <Delivery/>
    </section>
  )
}

export default Cart