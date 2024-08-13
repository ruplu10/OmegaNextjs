import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="border-b-2 border-black mb-10">
      <div className="mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28250.60208979103!2d85.34097919999999!3d27.738112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb193799cc02c7%3A0x9ad0322c0da36b46!2z4KSs4KS44KWB4KSo4KWN4KSn4KS-4KSw4KS-!5e0!3m2!1sen!2snp!4v1721213545173!5m2!1sen!2snp"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex flex-row w-[100%] ">
        <div className="w-[20%] ">
          <Image src="/logo.png" alt="logo" width={200} height={120} />
        </div>
        <div className="flex w-[70%]  mb-10">
          <div className="ml-[5%] mr-[20%]">
            <h1 className="text-blue-500 font-bold">About Us</h1>
            <h2>About us</h2>
            <h2>Testimonials</h2>
            <h2>Blog</h2>
          </div>
          <div className="mr-[20%]">
            <h1 className="text-blue-500 font-bold">Eye Care</h1>
            <h2>Enhanced Eye Tests</h2>
            <h2>Contact lens</h2>
          </div>
          <div>
            <h1 className="text-blue-500 font-bold">Customer Service</h1>
            <h2>Contact Us</h2>
            <h2>Book an Appointment</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
