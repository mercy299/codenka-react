import React from 'react';
import Image from 'next/image';
import hearticon from "@/app/assets/img/bi_heart.svg";
import downloadicon from "@/app/assets/img/bi_download.svg"
import dropdown from "@/app/assets/img/checkboxes-dropdown.svg"

const BrowseFilter: React.FC = () => {
  return (
    <section className="filter-and-result flex flex-col p-8 justify-center">
      <div className="content max-w-[1200px] mx-auto my-0 flex flex-row gap-20 py-8 px-0">
        <div className="filter w-1/5">
        <div>
          <div className="categories-dropdown flex">
            <div>Filters</div>
            <div className="categories-dropdown-drop ml-auto">✕</div>
          </div>
          <br/>
          <div className="categories-dropdown-grey flex bg-[#FBFBFB]">
            <div>Categories</div>
            <div className="categories-dropdown-drop ml-auto">
              <Image
                src={dropdown}
                alt="checkboxes-dropdown"
              />
            </div>
          </div>
          <br/>
          <form className="form1">
            <div className="categories-dropdown flex">
              <label htmlFor="all">All</label>
              <input
                className="categories-dropdown-drop ml-auto"
                type="checkbox"
                id="all"
                name="all"
                value="all"
              />
            </div> <br />
            <div className="categories-dropdown flex">
              <label htmlFor="photos">Photos</label>
              <input
                className="categories-dropdown-drop ml-auto"
                type="checkbox"
                id="photos"
                name="photos"
                value="photos"
                checked
              /> </div> <br />
            <div className="categories-dropdown flex">
              <label htmlFor="templates">Templates</label>
              <input
                className="categories-dropdown-drop ml-auto"
                type="checkbox"
                id="templates"
                name="templates"
                value="templates"
              /> </div> <br />
            <div className="categories-dropdown flex">
              <label htmlFor="uikits">UI Kits</label>
              <input
                className="categories-dropdown-drop ml-auto"
                type="checkbox"
                id="uikits"
                name="uikits"
                value="uikits"
              />
            </div> <br />
          </form>
        </div>
        <div>
          <div className="categories-dropdown-grey mb-4  flex bg-[#FBFBFB]">
            <div>Price Range</div>
            <div className="categories-dropdown-drop ml-auto">
              <Image
                src={dropdown}
                alt="checkboxes-dropdown"
              />
            </div>
          </div>
          <form>
            <div className="categories-dropdown flex">
            <label htmlFor="free">Free</label>
            <input
              className="categories-dropdown-drop ml-auto"
              type="checkbox"
              id="free"
              name="free"
              value="free"
            />
          </div>
            <br />
            <div className="categories-dropdown flex">
            <label htmlFor="$1s">$1 - $10</label>
            <input
              className="categories-dropdown-drop ml-auto"
              type="checkbox"
              id="$1"
              name="$1"
              value="$1"
              checked
            /> </div> <br />
            <div className="categories-dropdown flex">
            <label htmlFor="$11">$11 -$20</label>
            <input
              className="categories-dropdown-drop ml-auto"
              type="checkbox"
              id="$11"
              name="$11"
              value="$11"
            /> </div> <br />
            <div className="categories-dropdown flex">
            <label htmlFor="$20">$20 - $40</label>
            <input
              className="categories-dropdown-drop ml-auto"
              type="checkbox"
              id="$20"
              name="$20"
              value="$20"
            /> </div>
            <br />
          </form>
        </div>
        <div>
          <div className="categories-dropdown-grey mb-4 flex bg-[#FBFBFB]" >
            <div>File Type</div>
            <div className="categories-dropdown-drop ml-auto">
              <Image
              src={dropdown}
              alt="checkboxes-dropdown"
              />
            </div>
          </div>
          <form>
            <div className="categories-dropdown flex">
            <label htmlFor=".PSD">.PSD</label>
            <input
              className="categories-dropdown-drop ml-auto"
              type="checkbox"
              id=".PSD"
              name=".PSD"
              value=".PSD"
            />
            </div>
            <br />
          <div className="categories-dropdown flex">
            <label htmlFor=".FIG">.FIG</label>
            <input
              className="categories-dropdown-drop ml-auto"
              type="checkbox"
              id=".FIG"
              name=".FIG"
              value=".FIG"
              checked
            /></div> <br />
          <div className="categories-dropdown flex">
            <label htmlFor=".SVG">.SVG</label>
            <input
              className="categories-dropdown-drop ml-auto"
              type="checkbox"
              id=".SVG"
              name=".SVG"
              value=".SVG"
            /></div> <br />

          <div className="categories-dropdown flex">
            <label htmlFor=".XD">.XD</label>
            <input
              className="categories-dropdown-drop ml-auto"
              type="checkbox"
              id=".XD"
              name=".XD"
              value=".XD"
            />
          </div> <br />
          </form>
        </div>
        <div>
          <div className="categories-dropdown-grey mb-4 flex bg-[#FBFBFB]">
            <div>Software Type</div>
            <div className="categories-dropdown-drop ml-auto">
              <Image
                src={dropdown}
                alt="checkboxes-dropdown"
              />
            </div>
          </div>
          <form>
            <div className="categories-dropdown flex">
            <label htmlFor="figma">FIGMA</label>
            <input
              className="categories-dropdown-drop ml-auto"
              type="checkbox"
              id="figma"
              name="figma"
              value="figma"
            /> </div>
            <br />
            <div className="categories-dropdown flex">
            <label htmlFor="adobe">ADOBE XD</label>
            <input
              className="categories-dropdown-drop ml-auto"
              type="checkbox"
              id="adobe"
              name="adobe"
              value="adobe"
              checked
            /> </div> <br />
            <div className="categories-dropdown flex">
            <label htmlFor="sketch">SKETCH</label>
            <input
              className="categories-dropdown-drop ml-auto"
              type="checkbox"
              id="sketch"
              name="sketch"
              value="sketch"
            /> </div> <br />
            <div className="categories-dropdown flex">
            <label htmlFor="invision">INVISION</label>
            <input
              className="categories-dropdown-drop ml-auto"
              type="checkbox"
              id="invision"
              name="invision"
              value="invision"
            /> </div>
            <br />
          </form>
          <div className="categories-dropdown-grey flex bg-[#FBFBFB]">
            <div>Properties</div>
            <div className="categories-dropdown-drop ml-auto">
              <Image
                src={dropdown}
                alt="checkboxes-dropdown"
              />
            </div>
          </div>
          <div className="categories-dropdown-reset-filters">
            Reset Filters
          </div>
        </div>
          {/* Filter content goes here */}
        </div>
        <div className="filter-and-result-cards w-4/5 grid grid-cols-3 gap-[30px]">
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
            <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btn bg-[#24b02e] h-[45px] text-white px-4 py-2 rounded-lg">Free</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
            <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon text-[#AAB7BF]">
              <Image
                    src={hearticon}
                    alt="heart icon"
                />                
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon text-[#AAB7BF]">
              <Image
                    src={downloadicon}
                    alt="download icon"
                />               
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
          <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btns bg-[#ffd965] h-[45px] text-white px-4 py-2 rounded-md">10$</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
              <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
              <Image
                    src={hearticon}
                    alt="heart icon"
                />                
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
                <Image
                        src={downloadicon}
                        alt="download icon"
                    />                
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
          <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btn bg-[#24b02e] h-[45px] text-white px-4 py-2 rounded-md">Free</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
              <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
              <Image
                    src={hearticon}
                    alt="heart icon"
                />                
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
                <Image
                        src={downloadicon}
                        alt="download icon"
                    />                
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
          <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btn bg-[#24b02e] h-[45px] text-white px-4 py-2 rounded-md">Free</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
              <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
              <Image
                    src={hearticon}
                    alt="heart icon"
                />                
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
                <Image
                        src={downloadicon}
                        alt="download icon"
                    />                
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
          <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btns bg-[#ffd965] h-[45px] text-white px-4 py-2 rounded-md">10$</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
              <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
              <Image
                    src={hearticon}
                    alt="heart icon"
                />                
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
                <Image
                        src={downloadicon}
                        alt="download icon"
                    />                
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
          <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btn bg-[#24b02e] h-[45px] text-white px-4 py-2 rounded-md">Free</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
              <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
              <Image
                    src={hearticon}
                    alt="heart icon"
                />                
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
                <Image
                        src={downloadicon}
                        alt="download icon"
                    />                
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
          <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btn bg-[#24b02e] h-[45px] text-white px-4 py-2 rounded-md">Free</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
              <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
              <Image
                    src={hearticon}
                    alt="heart icon"
                />
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
                <Image
                        src={downloadicon}
                        alt="download icon"
                    />                
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
          <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btns bg-[#ffd965] h-[45px] text-white px-4 py-2 rounded-md">10$</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
              <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
              <Image
                    src={hearticon}
                    alt="heart icon"
                />                
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
                <Image
                        src={downloadicon}
                        alt="download icon"
                    />                
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
          <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btn bg-[#24b02e] h-[45px] text-white px-4 py-2 rounded-md">Free</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
              <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
              <Image
                    src={hearticon}
                    alt="heart icon"
                />
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
                <Image
                        src={downloadicon}
                        alt="download icon"
                    />               
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
          <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btn bg-[#24b02e] h-[45px] text-white px-4 py-2 rounded-md">Free</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
              <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
              <Image
                    src={hearticon}
                    alt="heart icon"
                />                
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
                <Image
                        src={downloadicon}
                        alt="download icon"
                    />                
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
          <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btns bg-[#ffd965] h-[45px] text-white px-4 py-2 rounded-md">10$</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
              <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
              <Image
                    src={hearticon}
                    alt="heart icon"
                />                
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
                <Image
                        src={downloadicon}
                        alt="download icon"
                    />                
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
          <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btn bg-[#24b02e] h-[45px] text-white px-4 py-2 rounded-md">Free</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
              <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
              <Image
                    src={hearticon}
                    alt="heart icon"
                />
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
                <Image
                        src={downloadicon}
                        alt="download icon"
                    />                
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
          <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btn bg-[#24b02e] h-[45px] text-white px-4 py-2 rounded-md">Free</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
              <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
              <Image
                    src={hearticon}
                    alt="heart icon"
                   />
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
                <Image
                        src={downloadicon}
                        alt="download icon"
                    />                
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
          <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btns bg-[#ffd965] h-[45px] text-white px-4 py-2 rounded-md">10$</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
              <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
              <Image
                    src={hearticon}
                    alt="heart icon"
                />
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
                <Image
                        src={downloadicon}
                        alt="download icon"
                    />                
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
          <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btn bg-[#24b02e] h-[45px] text-white px-4 py-2 rounded-md">Free</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
              <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
              <Image
                    src={hearticon}
                    alt="heart icon"
                />
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
                <Image
                        src={downloadicon}
                        alt="download icon"
                    />                
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
          <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btn bg-[#24b02e] h-[45px] text-white px-4 py-2 rounded-md">Free</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
              <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
              <Image
                    src={hearticon}
                    alt="heart icon"
                />
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
                <Image      
                        src={downloadicon}
                        alt="download icon"
                    />                
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
          <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btns bg-[#ffd965] h-[45px] text-white px-4 py-2 rounded-md">10$</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
              <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
              <Image
                    src={hearticon}
                    alt="heart icon"
                />
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon">
                <Image
                        src={downloadicon}
                        alt="download icon"
                    />                
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
            <div className="filter-and-result-card-item bg-white w-full h-[336px] m-0 flex flex-col justify-center content-center justify-items-center">
          <div className="filter-and-result-card-item-center">
            <div className="filter-and-result-card-item-grey-area bg-gray-100 h-[224px] flex justify-end">
              <button className="filter-and-result-card-item-grey-area-btn bg-[#24b02e] h-[45px] text-white px-4 py-2 rounded-md ">Free</button>
            </div>
            <div className="filter-and-result-card-item-grey-area-text flex items-center justify-between mt-4">
              <div className="p">
                <p>Ogbonda Chiziaruhoma</p>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon text-[#AAB7BF]">
              <Image
                    src={hearticon}
                    alt="heart icon"
                />
                <div>205</div>
              </div>
              <div className="filter-and-result-card-item-grey-area-grey-icon text-[#AAB7BF]">
                <Image
                        src={downloadicon}
                        alt="download icon"
                    />                
                <div>1,114</div>
              </div>
            </div>
          </div>
            </div>
          {/* Filter and result cards go here */}
        </div>
      </div>
      <div className="pagination text-center text-[#034CBC] h-[100px] mt-5">
        <p>1 2 3 4 ... 10</p>
      </div>
    </section>
  );
};

export default BrowseFilter;
