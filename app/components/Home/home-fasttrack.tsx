import React from 'react';
import Image from 'next/image';
import checkcircle from "@/app/assets/img/check-circle.svg"
import handimg from "@/app/assets/img/3d-hand.png"
import section4bimg from "@/app/assets/img/section4-background.svg"

const Section4: React.FC = () => {
  return (
    <section 
    className="section4 flex py-14 justify-center my-0 mx-auto flex-col"
    style={{
      background: `url(${section4bimg.src})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "1930px auto"
    }}
    >
      <div className="content max-w-7xl flex justify-center items-center flex-col my-0 mx-auto">
        <div className="section4-img ">
          <Image 
            src={handimg} 
            alt="3d hand" 
          />
        </div>
        <div className="section4-mid-text items-center flex flex-col">
          <p className="flex text-center text-[28px]">
            Fast-track your website or app creation <br />process with Codenka
          </p>
          <button className="btn  text-[#034CBC] bg-white h-[68px] rounded-lg font-bold px-4 py-4 text-[20px]">Get Started</button>
        </div>
        <div className="section4-flex-text flex gap-9 justify-around mt-3">
          <div className="section4-flex-text-img flex gap-3">
            <Image className=" w-5"
              src={checkcircle}
              alt="check-circle"
            />
            <p>Fully organized UI components</p>
          </div>
          <div className="section4-flex-text-img flex gap-3">
            <Image className=" w-5"
              src={checkcircle}
              alt="check-circle"
            />
            <p>Licensed for use on multiple projects</p>
          </div>
          <div className="section4-flex-text-img flex gap-3">
            <Image className=" w-5"
              src={checkcircle}
              alt="check-circle"
            />
            <p>Clean, Minimal & Modern Design</p>
          </div>
          {/* <button className="bigscreen-hidden">Get Started</button> */}
        </div>
      </div>
    </section>
  );
};

export default Section4;
