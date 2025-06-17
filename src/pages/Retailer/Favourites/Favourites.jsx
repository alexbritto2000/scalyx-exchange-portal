import React, { useState } from 'react';
import { Chip, Input, Select, SelectItem, Tab, Tabs } from '@heroui/react';
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";


import WholeSaler1 from '../../../assets/whole-saler-1.svg';
import M from '../../../assets/M.svg';
import GreenVerified from '../../../assets/green-verified.svg';
import ThreeStars from '../../../assets/3-stars.svg';
import LeftBracs from '../../../assets/left-bracs.svg';
import RightBracs from '../../../assets/right-bracs.svg';
import ProductIcon from '../../../assets/product-icon.svg';
import { Button } from '@heroui/button';
import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { motion } from "framer-motion";
import GrayHeart from '../../../assets/gray-heart.svg';
import FavHeart from '../../../assets/retailer/fav-heart.svg';
import { IoMdMore } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
import Ring1 from '../../../assets/ring-1.svg';
import GemSupply from '../../../assets/gem-supply.svg';
import GrayScalyx from '../../../assets/gray-scalyx.svg';

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        index < rating ? (
          <IoStar key={index} />
        ) : (
          <IoIosStarOutline key={index} />
        )
      ))}
    </div>
  );
};

const Favourites = () => {
  const [activeTab, setActiveTab] = useState("wholesalers");
  const inputWrapperStyle = "border border-[#F0F0F0] focus-within:border-blue-500 rounded-md";
  const [searchTerm, setSearchTerm] = useState("");

  const cards2 = [1, 2, 3];
  const cards = [1, 2, 3, 4];

  const handleClear = () => {
    setSearchTerm("");
  };

  const renderTabTitle = (label, key) => (
    <div className="flex items-center space-x-2">
      <span>{label}</span>
    </div>
  );

  return (
    <div className="ml-8 w-full">
      <div className="text-[1.5rem]">Favourites</div>

      {/* 1. Tabs */}
      <div className="flex justify-between gap-4 mt-4">
        <Tabs
          key="underlined"
          aria-label="Tabs variants"
          variant="underlined"
          selectedKey={activeTab}
          onSelectionChange={setActiveTab}
          classNames={{
            tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-black",
            tab: "py-3 px-4 h-fit",
            tabContent: "group-data-[selected=true]:text-black text-[#6B7280]",
          }}
        >
          <Tab
            key="wholesalers"
            title={renderTabTitle("Wholesalers", "wholesalers")}
          />
          <Tab
            key="products"
            title={renderTabTitle("Products", "products")}
          />
        </Tabs>

        <div>
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full border-b-2 border-[#cbcfd1] focus:outline-none focus:border-blue-500 pr-10 pl-4 py-3 h-11 bg-[#EBF0F2]"
            />

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
              {searchTerm ? (
                <IoClose size={18} onClick={handleClear} />
              ) : (
                <FiSearch size={18} />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Favourites List */}
      <div className="flex justify-between items-center my-4">
        <div className='flex items-center gap-6'>
          <div className='flex items-center gap-2'>
            <div className='text-[0.82rem] text-[#6B7280]'>
              View:
            </div>

            <Select
              defaultSelectedKeys={["cards"]}
              variant="light"
              color={"black"}
              disallowEmptySelection
              className="w-20 bg-transparent focus:outline-none focus:ring-0"
              classNames={{
                trigger: `${inputWrapperStyle} bg-transparent px-2 py-1 focus:outline-none focus:ring-0 focus:border-none shadow-none border-none`,
                value: "text-black"
              }}
            >
              <SelectItem key="cards" value="cards">
                Cards
              </SelectItem>
            </Select>
          </div>

          <div className='flex items-center gap-2'>
            <div className='text-[0.82rem] text-[#6B7280]'>
              Sort by:
            </div>

            <Select
              defaultSelectedKeys={["name"]}
              variant="light"
              color={"black"}
              disallowEmptySelection
              className="w-24 bg-transparent focus:outline-none focus:ring-0"
              classNames={{
                trigger: `${inputWrapperStyle} bg-transparent px-2 py-1 focus:outline-none focus:ring-0 focus:border-none shadow-none border-none`,
                value: "text-black"
              }}
            >
              <SelectItem key="name" value="Name">
                Name
              </SelectItem>
            </Select>
          </div>
        </div>

        <div className='text-[0.82rem] text-[#6B7280]'>
          Showing 3 of 3
        </div>
      </div>

      {/* 3. wholesalers */}
      {activeTab === "wholesalers" && (
        <div className='grid grid-cols-2 gap-[0.75rem]'>
          {cards2.map(item => (
            <div className='p-[1.5rem] pt-[0.7rem] pr-[1rem] border-1 border-[#E5E7EB] rounded-lg bg-white'>
              <div className='flex flex-row items-center justify-between gap-4 h-full'>
                <div className='flex flex-row gap-4 justify-center items-center pt-[0.8rem]'>
                  <div>
                    <img src={WholeSaler1} />
                  </div>

                  <div className='flex flex-col gap-1'>
                    <div className='flex gap-[6px] items-center'>
                      <div className='text-[0.82rem] text-[#111928] font-medium'>
                        NobleGem Supply
                      </div>

                      <img src={M} />
                      <img src={GreenVerified} />
                      <img src='https://flagcdn.com/us.svg' className='w-[0.82rem] h-[0.82rem] rounded-full object-cover' />
                    </div>

                    <div className='flex gap-1 mt-1'>
                      <StarRating rating={5} />

                      <div className='text-[0.75rem]'>
                        5,0 <span className='text-[#6B7280]'>(24)</span>
                      </div>
                    </div>

                    <div className='flex gap-1 items-center'>
                      <img src={ProductIcon} />

                      <div className='text-[0.82rem]'>325 <span className='text-[#6B7280]'>Products</span></div>
                    </div>
                  </div>
                </div>

                <div className='flex h-full'>
                  <div className='flex flex-col items-center justify-center pt-[0.8rem]'>
                    <img src={ThreeStars} />

                    <div className='flex flex-row'>
                      <img src={LeftBracs} className='h-[1.125rem] mt-[2px]' />
                      <div className='text-[#0E9F6E] text-[1.375rem] leading-none font-medium'>
                        94
                      </div>
                      <img src={RightBracs} className='h-[1.125rem] mt-[2px]' />
                    </div>

                    <div className='text-[#111928] text-[0.563rem]'>
                      Trust Score
                    </div>
                  </div>

                  <div className='ml-4 flex flex-col items-center justify-between'>
                    <motion.img
                      src={FavHeart}
                      alt="Favorite"
                      className="cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <IoMdMore className='text-[#D1D5DB] text-[1.5rem] cursor-pointer' />
                    <div />
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      )}

      {/* 4. products */}
      {activeTab === "products" && (
        <div className='flex flex-col gap-7 mt-8'>
          <div className='w-full flex justify-between items-center'>
            <div className='font-medium text-[1.25rem]'>
              Recently Viewed Products
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-[#111928] text-[0.82rem] flex gap-1 items-center cursor-pointer"
            >
              View all
              <FaChevronRight className="mt-[2px]" />
            </motion.div>
          </div>

          {/* Cards */}
          <div className='grid grid-cols-4 justify-between gap-[1rem]'>
            {/* card - 1 */}
            {cards.map(item => (
              <div className='border-1 border-[#E5E7EB] shadow-[0px_6px_4.9px_0px_#0000000A] p-4 rounded-lg w-[15.125rem] bg-white'>
                <div className='flex w-full justify-between'>
                  <motion.img
                    src={GrayScalyx}
                    alt="Favorite"
                    className="cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />

                  <motion.img
                    src={FavHeart}
                    alt="Favorite"
                    className="cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>

                <div className='w-full flex justify-center'>
                  <img src={Ring1} />
                </div>

                <div className='text-[#9CA3AF] text-[0.75rem]'>Famous brand</div>

                <div className='mt-[2px] text-[0.82rem] text-[#111928]'>
                  Celestial Crown Women's White Gold Ring in 10K, Crown-Inspired Design
                </div>

                <div className='my-2 flex justify-between'>
                  <div className='text-[#111928] font-medium'>
                    $4,299
                  </div>

                  <div className='flex gap-2 items-center'>
                    <div className='text-[0.75rem] text-[#9CA3AF] leading-none'>
                      MOQ: 100
                    </div>

                    <div className='text-[0.75rem] leading-none text-white bg-[#374151] rounded-[3px] px-[4px] py-[2px] flex items-center'>
                      Send RFQ
                    </div>
                  </div>
                </div>

                <div className='mt-4 flex flex-row items-center justify-between'>
                  <div className='flex flex-row items-center'>
                    <img src={GemSupply} />

                    <div className='ml-2 font-semibold text-[#2F3033] max-w-[12ch] truncate'>
                      NobleGem Supply
                    </div>
                  </div>

                  <div className='flex items-center gap-1 mt-[2px]'>
                    <div>
                      <img src={M} className='h-fit mt-[2px]' />
                    </div>

                    <div className='flex items-center'>
                      <img src={LeftBracs} />
                      88
                      <img src={RightBracs} />
                    </div>

                    <img src='https://flagcdn.com/us.svg' className='w-[1.65rem] h-[1rem] rounded-[4px] ml-2 object-cover' />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div >
  );
};

export default Favourites;
