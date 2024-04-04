import React from 'react';
import Image from 'next/image';
import BlueLine from "@/app/assets/img/about-blue-line.svg"
import SallyAbout from "@/app/assets/img/Saly-aboutpage.png"

const AboutWelcome: React.FC = () => {
  return (
    <section className="section2 flex">
      <div className="content my-2 mx-[120px] flex flex-col text-center pb-4 gap-0">
        <h1 className=" font-bold text-[30px]">Welcome, to Codenka</h1>
        <h3 className=" font-bold text-[16px] italic">Africa's own Envato</h3>
        <div className="flex justify-center items-center content-center">
          <Image 
          src={BlueLine} 
          alt="Blue Line" />
        </div>
        <div className="section2-text font-normal text-[16px] text-[#8D9091] py-0 px-8 flex flex-col leading-8 text-center">
          <p >
            At Codenka, we focus on giving individuals and businesses an
            opportunity to strengthen their bonds with customers through unique
            design templates.
          </p>
          <p>
            We believe that art provides a means of expression which words fail to
            give and we trust that developers can leverage on our services to
            challenge themselves in the quality of work they deliver.
          </p>
          <p>
            While serving the needs of developers and businesses in turn, we aim
            to provide a side hustle for our design contributors via our
            marketplace; thus providing an avenue for real lifework experiences
            and a fantasized get-paid-for-what-you-love-doing situation.
          </p>
        </div>
        <div className=" flex justify-center items-center">
          <Image 
          src={SallyAbout} 
          alt="About Page Saly" />
        </div>
      </div>
    </section>
  );
};

export default AboutWelcome;
