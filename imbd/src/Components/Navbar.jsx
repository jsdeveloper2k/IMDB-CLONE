import React from "react";
import Logo from "../assets/MovieLogo.png";
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4 ">
      <img className="w-[50px]" src={Logo} alt="" />
      <Link className='text-blue-400 text-2xl font-bold' to="/">Movies</Link>
      <Link className='text-blue-400  text-2xl font-bold' to="/WatchList">WatchList</Link>
    </div>
  );
};


//  FOR EFFICIENCY 
        //   1. USE LINK TAG INSTEAD OF ANCHOR TAG 
        //   2. WHICH LEADS TO STOP THE SMALL RELOAD OF THE APPLICATION DURING THE NAVIGATION .
        //   3. WANTS TO CHANGE HREF TO  to  ATTRIBUTE 