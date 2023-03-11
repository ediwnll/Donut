import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="flex h-[32%] w-full bg-wheat justify-between ">
      <div className="leftside text-black flex flex-col justify-center ml-20">
        <div className="font-extrabold">Contact Us</div>
        <div className="mt-10">
          <p>123-456-7890</p>
          <p>hello@reallygreatsite.com</p>
          <p>www.reallygreatsite.com</p>
          <p>123 Anywhere St., Any City, ST 12345</p>
        </div>
      </div>
      <div className="rightside text-black flex flex-col text-left mt-20 mr-20 items-end w-3/5">
        <div className="font-extrabold self-end">The Donuts Company</div>
        <div className="text-end mt-10">
          A group of donut enthusiast reaching out to more people who love
          donuts as much as we do
        </div>
      </div>
    </section>
  );
};

export default Footer;
