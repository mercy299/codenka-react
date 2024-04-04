import React from 'react';
import Image from 'next/image';
import logolight from "@/app/assets/img/logo/logo-light.svg"

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0d17] text-white py-16">
      <div className="content max-w-7xl my-0 mx-auto flex flex-row gap-10">
        <div className="footer-top flex flex-col items-center flex-1 mt-26">
            <Image className="w-[150px]" 
                src={logolight} 
                alt="logo" 
            />
          <div>
            <i className="far fa-copyright"></i> 2021 Codenka. All rights reserved
          </div>
        </div>
        <div className="footer-ul flex flex-1 justify-around gap-[30px]">
          <div className="footer-product">
            <ul>
              <li className="font-bold">Product</li>
              <li>Overview</li>
              <li>Features</li>
              <li>Tutorials</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>
          <div className="footer-company">
            <ul>
              <li className="font-bold">Company</li>
              <li>About</li>
              <li>Press</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Partners</li>
            </ul>
          </div>

          <div className="footer-support">
            <ul>
              <li className="font-bold">Support</li>
              <li>Help Center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="footer-follow">
            <ul>
              <li className="font-bold">Follow Us</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Dribble</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
