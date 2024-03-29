"use client"
import React from 'react';
import Image from "next/image"
import objects from "@/app/assets/img/objects.svg"

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section py-12 px-20 gap-4 pb-44 bg-[#f7f9ff] flex flex-row max-w-100% justify-center mx-auto">
      <div className="content max-w-6xl my-0 mx-auto flex flex-row">
        <div className="hero-section-text">
          <h1>Creative UI Kits <br />and Libraries</h1>
          <p>
            Explore more than 2,000 UI Kits and libraries with graphic assets and
            tools for developing websites and apps in niches ranging from gaming
            and dating to ecommerce and professional portfolios
          </p>
          <form className="search">
            <div className="input-search h-[20px] py-4 px-2 bg-[#f2f7fa] inline-flex rounded-lg">
              <input className=""
              type="search" 
              placeholder="Search..." />
            </div>
            <button className="btn">Let's go</button>
          </form>
        </div>
        <div className="hero-section-img" >
        <Image 
         src={objects}
         alt="logo"
        />
        </div>
      </div>

      <style jsx>{`
      
        .hero-section-text {
          flex: 25%;
        }

        .hero-section-img {
          flex: 75%;
        }

        .hero-section-img img {
          width: 625px;
        }

        .hero-section-text h1 {
          font-size: 72px;
          font-weight: 700;
          margin: 120px 0 0 0;
          color: rgb(2, 48, 89);
          line-height: 80px;
          letter-spacing: 3px;
        }

        .hero-section-text p {
          color: rgba(141, 144, 145, 1);
          line-height: 32px;
        }

        .search {
          display: flex;
        }

        .btn {
          color: white;
          background-color: rgba(3, 76, 188, 1);
          width: 150px;
          height: 68px;
          border-radius: 12px;
          border: none;
        }

        input {
          border: none;
          width: 454px;
          font-size: 19px;
          outline: none;
          background-color: #f2f7fa;
        }

        .fg {
          padding: 0.2em 1em;
          width: 24px;
          transform: scale(-1, 1);
          color: #f2f7fa;
        }

        .input-search {
          // display: inline-flex;
        }

        .input-search ::placeholder {
          font-size: 14px;
          color: rgba(141, 144, 145, 1);
        }

        @media screen and (max-width: 1390px) {
          .content {
            display: flex;
            flex-direction: column-reverse;
            padding: 3em 5em;
            gap: 1em;
            padding-bottom: 11em;
            background-color: rgb(247, 249, 255);
          }

          .hero-section-text {
            flex: 25%;
            text-align: center;
          }

          form {
            justify-content: center;
          }
        }

        @media screen and (max-width: 700px) {
          .hero-section-img img {
            width: 425px;
          }

          .hero-section-text h1 {
            font-size: 42px;
            font-weight: 700;
            margin: 20px 0 0 0;
            color: rgb(2, 48, 89);
            line-height: 80px;
            letter-spacing: 1.5px;
          }

          .hero-section-text p {
            color: rgba(141, 144, 145, 1);
            line-height: 28px;
            text-align: center;
            font-weight: 400;
            font-size: 14px;
          }

          input {
            border: none;
            width: 254px;
            font-size: 19px;
            outline: none;
            background-color: rgba(251, 251, 251, 1);
          }
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
