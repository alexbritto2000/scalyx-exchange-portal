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

const Connections = () => {
  const [activeTab, setActiveTab] = useState("my-connections");
  const inputWrapperStyle = "border border-[#F0F0F0] focus-within:border-blue-500 rounded-md";
  const [searchTerm, setSearchTerm] = useState("");

  const cards2 = [1, 2, 3];

  const handleClear = () => {
    setSearchTerm("");
  };

  const renderTabTitle = (label, count, key) => (
    <div className="flex items-center space-x-2">
      <span>{label}</span>
      <Chip
        size="sm"
        className={`text-white bg-[#9CA3AF] h-5 w-5 ${activeTab === key ? 'bg-[#3F83F8]' : ''}`}
      >
        {count}
      </Chip>
    </div>
  );

  return (
    <div className="ml-8 w-full">
      <div className="text-[1.5rem]">Connections</div>

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
            key="my-connections"
            title={renderTabTitle("My Connections", 9, "my-connections")}
          />
          <Tab
            key="connection-requests"
            title={renderTabTitle("Connection Requests", 9, "connection-requests")}
          />
          <Tab
            key="pending-approvals"
            title={renderTabTitle("Pending Approvals", 9, "pending-approvals")}
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

      {/* 2. Connections List */}
      <div className="flex justify-between items-center my-4">
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

        <div className='text-[0.82rem] text-[#6B7280]'>
          Showing 3 of 3
        </div>
      </div>

      <div className='grid grid-cols-1 gap-[1rem]'>
        {cards2.map((item, i) => (
          <div className='p-[1.5rem] border-1 border-[#E5E7EB] rounded-lg bg-white'>
            <div className='flex flex-row items-center justify-between gap-4'>
              <div className='flex flex-row gap-4 justify-center items-center'>
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

                  <div className='flex gap-1 items-center'>
                    <img src={ProductIcon} />

                    <div className='text-[0.75rem]'>325 <span className='text-[#6B7280]'>Products</span></div>
                  </div>
                </div>
              </div>

              <div className='flex gap-1 mt-1 items-center'>
                <StarRating rating={i + 3} />

                <div className='text-[0.75rem] leading-none'>
                  5,0 <span className='text-[#6B7280] underline'>(24)</span>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center'>
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

              <div className='flex gap-4'>
                <Button
                  type="button"
                  className="bg-white text-[#22223B] border border-[#E5E7EB] hover:bg-[#8080801a] font-semibold px-8 py-3 rounded-md"
                >
                  Decline
                </Button>

                <Button
                  type="submit"
                  className="bg-black px-8 py-3 text-white font-semibold hover:bg-[#333354] rounded-md"
                >
                  Accept
                </Button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Connections;
