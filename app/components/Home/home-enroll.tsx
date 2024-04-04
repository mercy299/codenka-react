import React from 'react';
import Image from 'next/image';
import secondsection2tiny from "@/app/assets/img/second-section2-tiny.png"
import firstsection2tiny from "@/app/assets/img/first-section2-tiny.png"
import section2img from "@/app/assets/img/section2-img.svg"

const Section2: React.FC = () => {
  return (
    <section className="section2">
      <div className="content flex max-w-1200 mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="bigscreen-hidden">
          <p>Enroll as a Codenka Designer</p>
        </div> */}
        <div className="section2-img">
        <Image 
          src={section2img} 
          alt="fsection2img" 
        />
        </div>
        <div className="section2-text flex-1 py-12">
          <h1 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
            Enroll as a Codenka Designer
          </h1>
          <div className="section2-mobile-view-img  hidden">
            <Image className="section2img w-40"
            src={section2img} 
            alt="fsection2img" 
            />
          </div>
          <p className="mt-4 text-lg text-gray-500">
            Become a part of our community of publishers and get paid doing what you love
          </p>
          <div className="section2-text-flex mt-8 flex flex-col justify-center space-x-4">
            <div className="section2-text-flex-items flex ">
            <Image 
              src={firstsection2tiny} 
              alt="firstsection2tiny" 
            />
            <p>Sign up</p>
            </div>
            <div className="section2-text-flex-items flex">
            <Image 
              src={firstsection2tiny} 
              alt="firstsection2tiny" 
            />
            <p>Upload your UI Templates or Kits</p>
            </div>
            <div className="section2-text-flex-items flex">
            <Image 
              src={secondsection2tiny} 
              alt="secondsection2tiny" 
            />
            <p>Name your Price</p>
            </div>
            <div className="section2-text-flex-items flex">
              <Image 
              src={secondsection2tiny} 
              alt="secondsection2tiny" 
            />
            <p>Get credited for every purchase</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
