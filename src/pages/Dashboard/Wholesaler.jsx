import React from 'react'
import GrayScalyx from '../../assets/gray-scalyx.svg';
import GrayHeart from '../../assets/gray-heart.svg';
import Ring1 from '../../assets/ring-1.svg';
import GemSupply from '../../assets/gem-supply.svg';
import LeftBracs from '../../assets/left-bracs.svg';
import RightBracs from '../../assets/right-bracs.svg';
import M from '../../assets/m.svg';
import { IoIosMore } from "react-icons/io";
import { Button } from '@heroui/react';
import TrustedIcon from '../../assets/trusted.svg';
import Products from '../../assets/products.svg';
import VerifiedIcon from '../../assets/verified-icon.svg';
import DealsIcon from '../../assets/retailer/deals.svg';
import HandsShakeIcon from '../../assets/retailer/Two persons hands shake. grey background.svg';
import BgCircle from '../../assets/bg-circle-white.svg';
import ProductIcon from '../../assets/product-icon.svg';
import WholeSaler1 from '../../assets/whole-saler-1.svg';
import ThreeStars from '../../assets/3-stars.svg';
import GreenVerified from '../../assets/green-verified.svg';
import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import SealCheckSupplier from '../../assets/SealCheckSupplier.svg';
import WalletIcon from '../../assets/wallet.svg';
import GuaranteeIcon from '../../assets/guarantee.svg';
import AiMatching from '../../assets/retailer/ai-matching.svg';

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

const Wholesaler = () => {
    const cards = [1, 2, 3, 4, 5];
    const cards2 = [1, 2, 3, 4, 5, 6];

    return (
        <div>
            <div className='flex flex-col gap-7'>
                {/* 1. Cards */}
                <div className='flex flex-wrap justify-between gap-[1rem]'>
                    {/* card - 1 */}
                    {cards.map(item => (
                        <div className='border-1 border-[#E5E7EB] shadow-[0px_6px_4.9px_0px_#0000000A] p-4 rounded-lg w-[15.125rem] bg-white'>
                            {/* <div className='flex w-full justify-between'>
                                <img src={GrayScalyx} />
                                <img src={GrayHeart} className='cursor-pointer' />
                            </div>

                            <div className='w-full flex justify-center'>
                                <img src={Ring1} />
                            </div>

                            <div className='text-[#9CA3AF] text-[0.75rem]'>Famous brand</div>

                            <div className='mt-[2px] text-[0.82rem] text-[#111928]'>
                                Celestial Crown Women's White Gold Ring in 10K, Crown-Inspired Design
                            </div> */}
                            <div className='flex justify-between'>
                                <div className='text-[#111928] font-semibold'>
                                    Indian-style ring with diamond detailing and traditional craftsmanship.
                                </div>

                                <div>
                                    <IoIosMore className='text-[#D1D5DB]' />
                                </div>
                            </div>

                            <div className='border-b-1 border-[#F3F4F6] my-2' />

                            <div className='flex justify-between text-[0.82rem] mb-2'>
                                <div className='text-[#111928] font-semibold'>
                                    Quantity:
                                </div>
                                <div className='text-[#4B5563]'>25</div>
                            </div>

                            {/* <div className='border-b-1 border-[#F3F4F6] my-2' /> */}

                            <div className='flex justify-between text-[0.82rem]'>
                                <div className='text-[#111928] font-semibold'>
                                    Delivery by:
                                </div>
                                <div className='text-[#4B5563]'>15.06.2025</div>
                            </div>

                            <div className='border-b-1 border-[#F3F4F6] my-2' />

                            <div className='flex flex-col gap-1 text-[0.82rem]'>
                                <div className='text-[#111928] font-semibold'>
                                    Additional notes:
                                </div>
                                <div className='text-[#4B5563]'>
                                    White gold 18K with GIA-certified diamonds required
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

                <div className='w-full flex items-center justify-center'>
                    <Button
                        type="button"
                        className="font-[0.82rem] text-white bg-black rounded-md px-[2rem] py-[0.75rem]"
                    >
                        Sign up to view all RFQs
                    </Button>
                </div>
            </div>

            {/* 2. Why Suppliers Love Exchange Block */}
            <div className='flex flex-col gap-7 mt-24'>
                <div className='font-medium text-[1.25rem]'>
                    Why Retailers Love Exchange
                </div>

                <div className='grid grid-cols-3 gap-3'>
                    <div className='bg-[#FFFFFF] rounded-lg py-[1.5rem] px-[2rem]'>
                        <img src={DealsIcon} />

                        <div className='text-[1.25rem] text-[#111928] mt-8'>
                            2,000 deals every day
                        </div>

                        <div className='text-[#4B5563] text-[0.82rem] mt-2'>
                            Connecting wholesalers and retailers with thousands of new opportunities daily
                        </div>
                    </div>

                    <div className='bg-[#FFFFFF] rounded-lg py-[1.5rem] px-[2rem]'>
                        <img src={VerifiedIcon} />

                        <div className='text-[1.25rem] text-[#111928] mt-8'>
                            Verified retailers with real reviews
                        </div>

                        <div className='text-[#4B5563] text-[0.82rem] mt-2'>
                            Connect with retailers backed by proven reputations and genuine customer insights
                        </div>
                    </div>

                    <div className='bg-[#FFFFFF] rounded-lg py-[1.5rem] px-[2rem]'>
                        <img src={TrustedIcon} />

                        <div className='text-[1.25rem] text-[#111928] mt-8'>
                            Trusted by over 1,000 suppliers
                        </div>

                        <div className='text-[#4B5563] text-[0.82rem] mt-2'>
                            Trusted by thousands of wholesalers for transparent and dependable service
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Black container */}
            <div className='mt-24'>
                <div className='rounded-lg bg-black flex'>
                    <div className='w-[60%] p-16 relative overflow-hidden'>
                        <div className='text-white text-[1.875rem]'>
                            Reach thousands of retailers
                        </div>

                        <div className='mt-4 text-[0.75rem] text-[#D1D5DB]'>
                            Showcase your products to thousands of engaged retail buyers every day, expanding your reach and increasing your opportunities for meaningful business connections and sales growth
                        </div>

                        <div className='mt-11 grid grid-cols-2 gap-2 text-white'>
                            <div>✓  Secure Payments</div>
                            <div>✓  Dedicated AI Support</div>
                            <div>✓  Authenticity Guarantee</div>
                            <div>✓  Fraud Protection</div>
                        </div>

                        <div className='mt-11'>
                            <Button
                                type="button"
                                className="text-black bg-white rounded-md font-semibold py-3 px-16"
                            >
                                Sign up now
                            </Button>
                        </div>

                        <img src={BgCircle} className='absolute right-[-10rem] bottom-0' />
                    </div>

                    <div className='w-[40%]'>
                        <img src={HandsShakeIcon} className='object-cover rounded-r-lg h-[100%]' />
                    </div>
                </div>
            </div>

            {/* 4.Retailers with the highest trust score */}
            <div className='flex flex-col gap-7 mt-24'>
                <div className='font-medium text-[1.25rem]'>
                    Retailers with the highest trust score
                </div>

                <div className='grid grid-cols-3 gap-[0.75rem]'>
                    {cards2.map(item => (
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

                                        <div className='flex gap-1 mt-1'>
                                            <StarRating rating={5} />

                                            <div className='text-[0.75rem]'>
                                                5,0 <span className='text-[#6B7280]'>(24)</span>
                                            </div>
                                        </div>

                                        <div className='flex gap-1 items-center'>
                                            <img src={ProductIcon} />

                                            <div>325 <span className='text-[#6B7280]'>Products</span></div>
                                        </div>
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
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* 5. Features */}
            <div className='mb-[10rem] mt-24 pt-16 grid grid-cols-3 gap-10 border-t-1 border-[#E5E7EB]'>
                <div className='flex flex-row items-start gap-3'>
                    <img src={SealCheckSupplier} />

                    <div className='flex flex-col gap-2'>
                        <div className='font-medium'>
                            Verified Retailers
                        </div>

                        <div className='text-[0.82rem]'>
                            Our carefully screened retailers go through a thorough verification process to ensure they provide authentic products and deliver dependable, high-quality service.
                        </div>
                    </div>
                </div>

                <div className='flex flex-row items-start gap-3'>
                    <img src={GuaranteeIcon} className='mt-[6px]' />

                    <div className='flex flex-col gap-2'>
                        <div className='font-medium'>
                            Our Guarantee
                        </div>

                        <div className='text-[0.82rem]'>
                            We stand by our retailers and wholesalers. If any issues arise, our dedicated support team is here to resolve them promptly and make things right.
                        </div>
                    </div>
                </div>

                <div className='flex flex-row items-start gap-3'>
                    <img src={AiMatching} className='w-4 mt-[6px]' />

                    <div className='flex flex-col gap-2'>
                        <div className='font-medium'>
                            AI Matching
                        </div>

                        <div className='text-[0.82rem]'>
                            Experience seamless and efficient retailer matching, powered by cutting-edge artificial intelligence designed to connect you with the most relevant business partners.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wholesaler