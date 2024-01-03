import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <div className="flex flex-col">
            <span className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">HARSH</span>
            <span className="text-xl md:text-3xl text-center ">RANJAN</span>
          </div>
        </span>
        <span>
        <p className="text-slate-600">All rights reserved.</p>
        <p className="text-slate-600">connect.local.1221@gmail.com</p>
        <p className="text-slate-600">(+91) 620 6430 920</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
