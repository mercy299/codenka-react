import React from 'react';
import Image from "next/image"
import authorheroimg from "@/app/assets/img/Group.svg"

const AboutHero: React.FC = () => {
  return (
    <section 
    className="abouthero-section bg-[#023059] flex justify-center h-[404px]"
    style={{
        background: `url(${authorheroimg.src})`,
        // backgroundRepeat: "no-repeat",
        backgroundColor: '#023059'
    }}
    >
    <p className="hero-section-text font-bold text-[56px] text-white self-center justify-center text-center">About Us</p>

    </section>
    );
}  

    
export default AboutHero;

// import { NextPage } from 'next';
// import authorheroimg from '@/app/assets/img/Group.svg';

// const AboutHero: NextPage = () => {
//   return (
//     <section
//       className="abouthero-section flex justify-center items-center h-[404px] bg-no-repeat"
//       style={{ 
//         backgroundImage: `url(${authorheroimg})`, 
//         backgroundSize: 'cover',
//         backgroundColor: 'blue', }}
//     >
//       <p className="hero-section-text font-bold text-5xl text-black">About Us</p>
//     </section>
//   );
// };

// export default AboutHero;

