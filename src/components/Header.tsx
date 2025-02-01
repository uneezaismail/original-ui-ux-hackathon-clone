// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useState, useEffect } from "react";
// import { HiBars3, HiXMark } from "react-icons/hi2";
// import { TbSearch, TbUserExclamation } from "react-icons/tb";
// import { LiaTimesSolid } from "react-icons/lia";
// import CartIcon from "./CartIcon";
// import Image from "next/image";

// const Header = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const pathname = usePathname();
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isScrolled, setIsScrolled] = useState(false);



//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);



//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) setIsDropdownOpen(false);
//     };


//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);



//   const backgroundColor =
//   isScrolled || pathname !== "/"
//     ? "bg-white border-b"
//     : "bg-[#FBEBB5]";



//   const menuItems = [
//     { name: "Home", link: "/" },
//     { name: "Shop", link: "/shop" },
//     { name: "About", link: "/useCart" },
//     { name: "Contact", link: "/contact" },
//   ];


//   return (
//     <header className={`${backgroundColor} sticky top-0 z-50 animate-fadeIn`}>
//       <div className="max-w-7xl md:mx-auto flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4">
//         {/* Left Section */}
//         <div className="flex items-center md:gap-2">
//           <button
//             className="lg:hidden hover:scale-110 transition-transform"
//             onClick={() => setIsDropdownOpen((prev) => !prev)}
//           >
//             {isDropdownOpen ? <HiXMark size={30} /> : <HiBars3 size={30} />}
//           </button>
//           <Link href="/" className="hidden lg:flex items-center">
//           <Image src={"/meubal.png"} alt="logo" width={50} height={30} className="md:w-16 object-cover md:h-16"/> 
//             <h1 className="text-[26px] font-semibold font-playfair">
//             SITSTYLE
//             </h1>
//           </Link>
//         </div>

//         <Link href="/" className="flex lg:hidden items-center">
//           <Image src={"/meubal.png"} alt="logo" width={50} height={50} className="md:w-16 object-cover md:h-16"/> 
//             <h1 className="text-2xl font-semibold  font-playfair ">
//           SITSTYLE
//             </h1>
//           </Link>

//         {/* Center Section */}
//         <nav className="hidden lg:flex gap-12">
//           {menuItems.map((item) => (
//             <Link key={item.name} href={item.link}>
//               <span
//                 className={`font-medium font-poppins cursor-pointer ${
//                   pathname === item.link ? "text-black border-b border-b-black" : ""
//                 }`}
//               >
//                 {item.name}
//               </span>
//             </Link>
//           ))}
//         </nav>

//         {/* Right Section */}
//         <div className="flex items-center gap-[6px] sm:gap-6">
//           <button
//             onClick={() => {setIsSearchOpen(true); setIsDropdownOpen(false)}}
//             className="hover:scale-110"
//           >
//             <TbSearch size={22}  className="sm:size-6 hover:scale-110"/>
//           </button>
          
//           <Link href="/cart">
//             <CartIcon count={0} /> {/* Replace 0 with dynamic count */}
//           </Link>
//           <Link href="/account">
//             <TbUserExclamation size={21} className="sm:size-6 hover:scale-110" />
//           </Link>
//         </div>
//       </div>

//       {/* Search Bar */}
//       {isSearchOpen && (
//         <div className="absolute inset-0 border-b md:border-none bg-white flex items-center justify-center px-4">
//           <div className="flex items-center w-full max-w-screen-md">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="flex-grow py-1 sm:py-2 px-4 border border-black focus:outline-none"
//             />
//             <button
//               onClick={() => setIsSearchOpen(false)}
//               className="mr-2 p-2 hover:scale-110 transition-transform"
//             >
//               <LiaTimesSolid size={20} className="sm:size-06"/>
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Dropdown Menu */}
//       <div
//         className={`lg:hidden absolute left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden ${
//           isDropdownOpen ? "max-h-48" : "max-h-0"
//         }`}
//         style={{ top: "100%" }}
//       >
//         <div className="flex flex-col py-4 px-4">
//           {menuItems.map((item) => (
//             <Link key={item.name} href={item.link}>
//               <span
//                 className="block py-2 text-lg font-medium hover:text-gray-700"
//                 onClick={() => setIsDropdownOpen(false)}
//               >
//                 {item.name}
//               </span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;






















"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { FaRegHeart, FaTimes } from "react-icons/fa";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { TbUserExclamation } from "react-icons/tb";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname()

  const backgroundColor = pathname === '/' ? 'bg-[#FBEBB5]' : 'bg-white'

  

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/contact" },
  ];

  const icons = [
    { icon: <TbUserExclamation size={24} />, link: "/account" },
    { icon: <HiMiniMagnifyingGlass size={24} />, link: "/" },
    { icon: <FaRegHeart size={24} />, link: "/" },
    { icon: <AiOutlineShoppingCart size={24} />, link: "/cart" },
  ];

  return (
    <header className={`${backgroundColor} overflow-x-hidden`} >
      <div className="z-10 flex px-2 md:px-0 items-center mx-auto md:gap-20 lg:gap-x-40 justify-between md:justify-end py-6 md:p-8 lg:px-24">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <AiOutlineMenu size={28} />
      </button>

      {/* Navbar Links */}
      <ul className="hidden md:flex items-center gap-x-16">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.link}>
            <li className="font-medium font-poppins hover:border-b hover:text-[#75601c] hover:border-b-black cursor-pointer">{item.name}</li>
          </Link>
        ))}
      </ul>

      {/* Desktop Icons */}
      <ul className="flex items-center gap-x-4 sm:gap-x-6">
        {icons.map((item, index) => (
          <Link key={index} href={item.link}>
            <li className="p-1 font-poppins cursor-pointer hover:text-[#75601c]">{item.icon}</li>
          </Link>
        ))}
      </ul>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed font-poppins top-0 left-0 h-full w-[70%] bg-white shadow-lg z-50 flex flex-col p-6">
          <button
            className="self-end mb-6"
            onClick={() => setIsSidebarOpen(false)}
          >
           <FaTimes/>
          </button>
          <ul className="flex flex-col items-start gap-y-4">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.link}>
                <li
                  className="text-lg font-medium cursor-pointer"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;