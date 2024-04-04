import React from 'react';
import Image from "next/image";
import hearticon from "@/app/assets/img/bi_heart.svg";
import downloadicon from "@/app/assets/img/bi_download.svg"
import diamond from "@/app/assets/img/diamond.svg"
import figmaimg from "@/app/assets/img/figma.svg"

const Homefeatured: React.FC = () => {
  return (
    <section className="section3 bg-[#f8f9ff]">
      <div className="content max-w-6xl mx-auto flex flex-col items-center">
        <div className="section3-top text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Featured Kits</h2>
          <p className="text-gray-700 text-lg">
            Checkout these catchy designs of the week; these risings stars are
            worth your attention.
          </p>
          <div className="section3-btns flex flex-wrap justify-center mt-4">
            <button className="btn mr-2 mb-2 bg-[#dff] text-[#034cbc]">All</button>
            <button className="btn mr-2 mb-2 bg-[#dff] text-[#034cbc]">Light</button>
            <button className="btn mr-2 mb-2 bg-[#dff] text-[#034cbc]">Dark</button>
            <button className="btn mr-2 mb-2 bg-[#dff] text-[#034cbc]">Landing Page</button>
            <button className="btn mr-2 mb-2 bg-[#dff] text-[#034cbc]">Redesign</button>
            <button className="btn mr-2 mb-2 bg-[#dff] text-[#034cbc]">Andriod</button>
            <button className="btn mr-2 mb-2 bg-[#dff] text-[#034cbc]">Website design</button>
            <button className="btn mr-2 mb-2 bg-[#dff] text-[#034cbc]">Prototype</button>
          </div>
        </div>
        <div className="section3-cards flex flex-wrap justify-center gap-10 mt-8">
            <div className="section3-card-item bg-white w-80 p-4 rounded-lg shadow-md">
                <div className="section3-card-item-center flex flex-col items-center">
                    <div className="section3-card-item-grey-area bg-gray-100 w-full h-20 flex items-center justify-end">
                <button className="section3-card-item-grey-area-btn bg-[#24b02e] text-white px-4 py-2 rounded-md">Free</button>
                    </div>
                <div className="section3-card-item-grey-area-text flex items-center justify-between mt-4">
                    <div className="p">
                  <p className="text-lg font-semibold">Ogbonda Chiziaruhoma</p>
                    </div>
                <div className="section3-card-item-grey-area-grey-icon flex items-center space-x-2">
                  <div className="flex flex-col items-center">
                    <Image
                        src={hearticon}
                        alt="heart icon"
                    />
                    <div>205</div>
                  </div>
                  <div className="flex flex-col items-center">
                  <Image
                        src={downloadicon}
                        alt="download icon"
                    />
                    <div>1,114</div>
                  </div>
                </div>
                </div>
                </div>
            </div>
            <div className="section3-card-item bg-white w-80 p-4 rounded-lg shadow-md">
                <div className="section3-card-item-center flex flex-col items-center">
                    <div className="section3-card-item-grey-area bg-gray-100 w-full h-20 flex items-center justify-end">
                <button className="section3-card-item-grey-area-btn bg-[#ffd965] text-white px-4 py-2 rounded-md">10$</button>
                    </div>
                <div className="section3-card-item-grey-area-text flex items-center justify-between mt-4">
                    <div className="p">
                  <p className="text-lg font-semibold">Ogbonda Chiziaruhoma</p>
                    </div>
                <div className="section3-card-item-grey-area-grey-icon flex items-center space-x-2">
                  <div className="flex flex-col items-center">
                    <Image
                        src={hearticon}
                        alt="heart icon"
                    />
                    <div>205</div>
                  </div>
                  <div className="flex flex-col items-center">
                  <Image
                        src={downloadicon}
                        alt="download icon"
                    />
                    <div>1,114</div>
                  </div>
                </div>
                </div>
                </div>
            </div>            
            <div className="section3-card-item bg-white w-80 p-4 rounded-lg shadow-md">
            <div className="section3-card-item-center flex flex-col items-center">
              <div className="section3-card-item-grey-area bg-gray-100 w-full h-20 flex items-center justify-between">
                <div className="section3-card-item-grey-area-btn-img">
                    <Image className="h-6"
                     src={figmaimg} 
                     alt="figma" 
                    />
                    <Image className="h-6"
                     src={diamond} 
                     alt="diamond" 
                    />
                </div>
                <button className="section3-card-item-grey-area-btn bg-[#24b02e] text-white px-4 py-2 rounded-md">Free</button>
              </div>
              <div className="section3-card-item-grey-area-text flex items-center justify-between mt-4">
                <div className="p">
                  <p className="text-lg font-semibold">Ogbonda Chiziaruhoma</p>
                </div>
                <div className="section3-card-item-grey-area-grey-icon flex items-center space-x-2">
                  <div className="flex flex-col items-center">
                  <Image 
                     src={hearticon} 
                     alt="heart icon" 
                    />
                    <div>205</div>
                  </div>
                  <div className="flex flex-col items-center">
                  <Image 
                     src={downloadicon} 
                     alt="download icon" 
                    />
                    <div>1,114</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="section3-card-item bg-white w-80 p-4 rounded-lg shadow-md">
                <div className="section3-card-item-center flex flex-col items-center">
                    <div className="section3-card-item-grey-area bg-gray-100 w-full h-20 flex items-center justify-end">
                <button className="section3-card-item-grey-area-btn bg-[#24b02e] text-white px-4 py-2 rounded-md">Free</button>
                    </div>
                <div className="section3-card-item-grey-area-text flex items-center justify-between mt-4">
                    <div className="p">
                  <p className="text-lg font-semibold">Ogbonda Chiziaruhoma</p>
                    </div>
                <div className="section3-card-item-grey-area-grey-icon flex items-center space-x-2">
                  <div className="flex flex-col items-center">
                    <Image
                        src={hearticon}
                        alt="heart icon"
                    />
                    <div>205</div>
                  </div>
                  <div className="flex flex-col items-center">
                  <Image
                        src={downloadicon}
                        alt="download icon"
                    />
                    <div>1,114</div>
                  </div>
                </div>
                </div>
                </div>
            </div>
            <div className="section3-card-item bg-white w-80 p-4 rounded-lg shadow-md">
                <div className="section3-card-item-center flex flex-col items-center">
                    <div className="section3-card-item-grey-area bg-gray-100 w-full h-20 flex items-center justify-end">
                <button className="section3-card-item-grey-area-btn bg-[#ffd965] text-white px-4 py-2 rounded-md">10$</button>
                    </div>
                <div className="section3-card-item-grey-area-text flex items-center justify-between mt-4">
                    <div className="p">
                  <p className="text-lg font-semibold">Ogbonda Chiziaruhoma</p>
                    </div>
                <div className="section3-card-item-grey-area-grey-icon flex items-center space-x-2">
                  <div className="flex flex-col items-center">
                    <Image
                        src={hearticon}
                        alt="heart icon"
                    />
                    <div>205</div>
                  </div>
                  <div className="flex flex-col items-center">
                  <Image
                        src={downloadicon}
                        alt="download icon"
                    />
                    <div>1,114</div>
                  </div>
                </div>
                </div>
                </div>
            </div>            
            <div className="section3-card-item bg-white w-80 p-4 rounded-lg shadow-md ">
            <div className="section3-card-item-center flex flex-col items-center">
              <div className="section3-card-item-grey-area bg-gray-100 w-full h-20 flex items-center justify-between">
                <div className="section3-card-item-grey-area-btn-img">
                    <Image className="h-6"
                     src={figmaimg} 
                     alt="figma" 
                    />
                    <Image className="h-6"
                     src={diamond} 
                     alt="diamond" 
                    />
                </div>
                <button className="section3-card-item-grey-area-btn bg-[#24b02e] text-white px-4 py-2 rounded-md">Free</button>
              </div>
              <div className="section3-card-item-grey-area-text flex items-center justify-between mt-4">
                <div className="p">
                  <p className="text-lg font-semibold">Ogbonda Chiziaruhoma</p>
                </div>
                <div className="section3-card-item-grey-area-grey-icon flex items-center space-x-2">
                  <div className="flex flex-col items-center">
                  <Image 
                     src={hearticon} 
                     alt="heart icon" 
                    />
                    <div>205</div>
                  </div>
                  <div className="flex flex-col items-center">
                  <Image 
                     src={downloadicon} 
                     alt="download icon" 
                    />
                    <div>1,114</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            

        </div>
      </div>
    </section>
  );
}

export default Homefeatured;
