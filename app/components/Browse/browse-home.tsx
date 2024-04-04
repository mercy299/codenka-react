import React from 'react';
import Image from 'next/image';
import browseillustration from "@/app/assets/img/browse-illustration.svg"

const BrowseHero: React.FC = () => {
  return (
    <section className="hero-section bg-blue-500">
      <div className="content max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="hero-section-left py-0 px-[6px] flex flex-col items-center gap-10">
          <p className="hero-section-text text-white text-6xl font-bold">Browse</p>
          <div className="input-search bg-[#4690e3] p-4 rounded-md flex items-center">
            <i className="fa-solid fa-magnifying-glass fg text-white text-xl"></i>
            <input
              className="browse-input ml-4 bg-[#4690e3] outline-none border-none text-white placeholder-white w-[800px]"
              type="search"
              placeholder="Search Libraries"
            />
          </div>
        </div>
        <div className="hero-section-right absolute bottom-[29em] right-0">
          <Image className="w-[250px]"
            src={browseillustration}
            alt="browse-illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default BrowseHero;
