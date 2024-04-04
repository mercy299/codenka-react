import React from 'react';
import Image from 'next/image';
import handimg from "@/app/assets/img/3d-hand.png";
import section4bimg from "@/app/assets/img/section4-background.svg"


const AboutFasttrack: React.FC = () => {
  return (
    <section 
    className="section4 justify-center flex" 
    style={{ 
        background: `url(${section4bimg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1930px auto"
    }}
        >
      <div className="content max-w-[1200px] my-0 mx-auto flex flex-col gap-12 pt-12">
        <div className="section4-img flex justify-center">
          <Image 
          src={handimg} 
          alt="3D Hand" />
        </div>
        <div className="section4-mid-text text-4xl flex flex-col items-center font-bold text-center text-[#2c3e50]">
          <p className=" leading-[64px]">
            Earn more money on the go.<br />Get started with codenka
          </p>
          <button className=" px-8 py-4 text-[#034CBC] bg-[#FEFFFF] w-60 rounded-md text-2xl font-bold border-3 border-solid">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default AboutFasttrack;
