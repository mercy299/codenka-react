import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "/app/assets/img/logo/logo.svg";

interface NavbarProps {
  dark?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ dark = false }) => {
  return (
    <header className={`navbar-container ${dark ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}>
      <nav className="flex items-center justify-between px-4 py-2">
        {/* <img src={logo} alt="logo" className="h-full" /> */}
        <Image className="w-40"
         src={logo}
         alt="logo"
        />
        <ul className="flex space-x-4">
          <li><Link href="/home" className={`hover:text-[#034cbc] ${dark ? 'text-white' : 'text-black'}`}>Home</Link></li>
          <li><Link href="/about" className={`hover:text-[#034cbc] ${dark ? 'text-white' : 'text-black'}`}>About</Link></li>
          <li><Link href="/browse" className={`hover:text-[#034cbc] ${dark ? 'text-white' : 'text-black'}`}>Browse</Link></li>
          <li><Link href="/author" className={`hover:text-[#034cbc] ${dark ? 'text-white' : 'text-black'}`}>Become an Author</Link></li>
        </ul>
        <ul className="flex space-x-4">
          <li><Link href="/signup" className={`${dark ? 'text-white' : 'text-black'}`}>Sign Up</Link></li>
          <li><span className="text-gray-500">|</span></li>
          <li><Link href="/login" className={`${dark ? 'text-white' : 'text-black'}`}>Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
