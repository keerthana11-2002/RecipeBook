import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    
    <footer className="bg-gray-100 pt-20 pb-4 -mt-24"> 
    <div className=" flex  justify-between">
      <div className="ml-32">
        <h1 className="text-2xl font-medium mb-7 cursor-pointer">QUICK LINKS</h1>
        <Link to="/about">
        <p className="text-orange-600 text-center mb-3 text-xl cursor-pointer underline ">ABOUT</p>
        </Link>
        <Link to="/contact">
        <p className="text-orange-600 text-center mb-3 text-xl underline cursor-pointer ">CONTACT</p>
        </Link>
        <p className="text-orange-600 text-center mb-4 text-xl underline cursor-pointer">PRIVACY POLICY</p>
      </div>

      <div>
        <h1 className="text-2xl font-medium mb-7">NEWSLETTER</h1>
        <p className="text-xl "><span className="text-orange-600  cursor-pointer text-centertext-xl underline ">SIGN UP!</span> FOR EMAILS AND UPDATES</p>
      </div>

      <div className="mr-32">
        <h1 className="text-2xl font-medium mb-7">INFORMATION</h1>
        <Link to="/">
        <p className="text-orange-600 text-center mb-3 text-xl underline cursor-pointer " >HOME</p>
        </Link>
        <Link to="/recipe/:id">
        <p className="text-orange-600 text-center mb-3 text-xl underline cursor-pointer">RECIPES</p>
     </Link>
      </div>
      </div>
      <p className="text-center ">COPYRIGHT © 2024 BHAT'S KITCHEN</p>
    </footer>
    
     
    
  );
};

export default Footer;
