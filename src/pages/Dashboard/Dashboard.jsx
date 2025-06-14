import Banner from '../../assets/banner.svg';
import ScalyxIntelligence from '../../assets/scalyx-intelligence.svg';
import CameraIcon from '../../assets/mdi_camera.svg';
import '../pages.scss'
import { useNavigate } from 'react-router-dom';
import { LayoutGroup, motion } from "framer-motion";
import { useState } from 'react';
import Retailer from './Retailer';
import { Button, Input, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from '@heroui/react';
import { Slider } from "@heroui/react";
import Wholesaler from './Wholesaler';

const SliderComponent = ({ value, setValue }) => {
    // Helper to format currency without trailing .00
    const formatValue = (val) => {
        // Round to integer and add dollar sign
        return `$${Math.round(val)}`;
    };

    return (
        <div className="flex flex-col w-full h-full max-w-md items-start justify-center px-4 py-2">
            <div className="text-black font-medium mb-6 flex flex-row gap-11">
                <div>
                    Price Range
                </div>

                <div className='text-[#1F2A37] font-normal'>
                    {Array.isArray(value)
                        ? `${formatValue(value[0])} – ${formatValue(value[1])}`
                        : formatValue(value)}
                </div>
            </div>

            <Slider
                className="max-w-md"
                formatOptions={{ style: "currency", currency: "USD" }} // optional, can remove since we format ourselves
                maxValue={1000}
                minValue={0}
                step={10}
                value={value}
                onChange={setValue}
                classNames={{
                    label: "mb-6",                         // 24px gap below label
                    track: "bg-[#E5E7EB] h-1",             // light grey track with 4px height
                    filler: "bg-black",                    // black filled part
                    thumb: "bg-black border-none w-3 h-3 rounded-full", // small black round thumb
                }}
            />
        </div>
    );
};


const Dashboard = () => {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState("Retailer");

    const tabs = ["Retailer", "Wholesaler"];
    const inputWrapperStyle = "!border-1 !border-[#F0F0F0] focus-within:border-blue-500 rounded-md";
    const [value, setValue] = useState([200, 800]);

    return (
        <div className=''>
            <img src={Banner} className='w-full' />

            <div className='flex justify-between px-6 mt-[-2.5rem]'>
                <div className='w-[13.125rem]'></div>

                {/* exchanger */}
                <LayoutGroup className="mt-4">
                    <div className="flex border border-gray-200 shadow-sm rounded-lg cursor-pointer p-1 font-semibold w-max bg-white">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab;
                            return (
                                <div
                                    key={tab}
                                    className={`relative px-10 py-3 rounded-lg cursor-pointer ${isActive ? "text-white" : "text-black"
                                        }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeBackground"
                                            className="absolute inset-0 bg-black rounded-lg z-0"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}

                                    {/* No opacity or scale animation here */}
                                    <span className="relative z-10">
                                        {tab}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </LayoutGroup>

                <div className="shadow-2xl border-1 border-[#A2A2A2] rounded-lg h-fit py-2 w-[13.125rem] bg-white">
                    <img src={ScalyxIntelligence} />
                </div>
            </div>

            <div className='px-8 py-8 flex justify-center items-center'>
                <div className='w-full max-w-7xl flex gap-3'>
                    <Select
                        variant="bordered"
                        className='w-[15.625rem]'
                        classNames={{
                            trigger: `${inputWrapperStyle} flex-nowrap items-center gap-2 text-[0.82rem] border-[#E5E7EB] border-1`,
                        }}
                        placeholder='Product type'
                    >
                        <SelectItem key="ring">Ring</SelectItem>
                    </Select>

                    <Popover placement="bottom-start">
                        <PopoverTrigger>
                            <Button variant="bordered" className="w-[15.625rem] justify-between text-[0.82rem] text-[#6B7280] border-1 border-[#E5E7EB]" radius={'sm'}>
                                Select Price Range
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <SliderComponent value={value} setValue={setValue} />
                        </PopoverContent>
                    </Popover>

                    <Input
                        placeholder="Description"
                        type="text"
                        variant="bordered"
                        radius={'sm'}
                        classNames={{
                            inputWrapper: 'border-1 border-[#E5E7EB]',  // apply your border style here
                          }}
                    />

                    <div
                        type="button"
                        className="bg-black rounded-md px-3 py-1 flex items-center cursor-pointer border-1"
                    >
                        <img src={CameraIcon} className="w-6" />
                    </div>

                    <Button
                        type="button"
                        className="text-white bg-black rounded-md"
                    >
                        Search
                    </Button>
                </div>
            </div>

            <div className='px-8 py-8 flex justify-center items-center bg-[#EBF0F2]'>
                <div className='w-full max-w-7xl'>
                    {activeTab == 'Retailer' && <Retailer />}
                    {activeTab == 'Wholesaler' && <Wholesaler />}
                </div>
            </div>
        </div>
    )
}

export default Dashboard