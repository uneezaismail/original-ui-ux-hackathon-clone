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