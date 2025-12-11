"use client";
import ServicesDown from "./ServicesDown";
import Link from "next/link";

const OurService = () => {
  return (
    <section className="flex flex-col max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b py-5 w-[95%] mx-auto gap-4 lg:gap-8">
        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-end gap-4 lg:gap-20 w-full lg:w-auto">
          <div className="text-2xl md:text-3xl racing font-bold text-[#fffffd]">
            OUR SERVICES
          </div>
          <div className="hidden lg:block h-10 w-[.1rem] bg-gray-300"></div>
          <div className="text-sm md:text-base text-gray-400 max-w-md">
            This part of our service that can give you satisfaction
          </div>
        </div>
        <Link href="/services" className="w-full lg:w-auto">
          <button className="w-full lg:w-auto px-6 md:px-7 hover:px-8 md:hover:px-10 transition-all duration-300 py-3 text-[#fffffd] bg-[#dc2828] rounded-xl hover:bg-[#b91c1c] text-center font-semibold">
            View more
          </button>
        </Link>
      </div>

      <div className="mt-8 mb-16">
        <ServicesDown />
      </div>
    </section>
  );
};

export default OurService;
