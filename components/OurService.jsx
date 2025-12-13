'use client';
import ServicesDown from './ServicesDown';
import Link from 'next/link';

const OurService = () => {
  return (
    <section className="flex flex-col max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b py-2 w-[95%] mx-auto gap-4 lg:gap-8">
        <div className="text-2xl md:text-3xl racing font-bold text-[#fffffd]">OUR SERVICES</div>
        <div className="hidden lg:block h-10 w-[.1rem] translate-x-3 bg-gray-300"></div>
        <div className="text-sm md:text-base text-gray-400 max-w-md">
          This part of our service that can give you satisfaction
        </div>
      </div>

      <div>
        <ServicesDown />
      </div>
    </section>
  );
};

export default OurService;
