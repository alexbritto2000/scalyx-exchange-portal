import React from 'react'
import GrayScalyx from '../../assets/gray-scalyx.svg';
import GrayHeart from '../../assets/gray-heart.svg';
import Ring1 from '../../assets/ring-1.svg';
import GemSupply from '../../assets/gem-supply.svg';
import WholeSaler1 from '../../assets/whole-saler-1.svg';
import M from '../../assets/M.svg';
import GreenVerified from '../../assets/green-verified.svg';
import ThreeStars from '../../assets/3-stars.svg';
import LeftBracs from '../../assets/left-bracs.svg';
import RightBracs from '../../assets/right-bracs.svg';
import Products from '../../assets/products.svg';
import VerifiedIcon from '../../assets/verified-icon.svg';
import ProductIcon from '../../assets/product-icon.svg';
import SealCheckSupplier from '../../assets/SealCheckSupplier.svg';
import TrustedIcon from '../../assets/trusted.svg';
import RealisticJewelry from '../../assets/realistic-jewelry-on-stones.svg';
import { Button } from '@heroui/button';
import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import GuaranteeIcon from '../../assets/guarantee.svg';
import WalletIcon from '../../assets/wallet.svg';
import BgCircle from '../../assets/bg-circle-white.svg';

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

const Retailer = () => {
    const cards = [1, 2, 3, 4, 5];
    const cards2 = [1, 2, 3, 4, 5, 6];

    return (
        <div>
            <div className='flex flex-col gap-7'>
                <div className='font-medium text-[1.25rem]'>
                    Recommended For You
                </div>

                {/* Cards */}
                <div className='flex flex-wrap justify-between gap-[1rem]'>
                    {/* card - 1 */}
                    {cards.map(item => (
                        <div className='border-1 border-[#E5E7EB] shadow-[0px_6px_4.9px_0px_#0000000A] p-4 rounded-lg w-[15.125rem] bg-white'>
                            <div className='flex w-full justify-between'>
                                <img src={GrayScalyx} />
                                <img src={GrayHeart} className='cursor-pointer' />
                            </div>

                            <div className='w-full flex justify-center'>
                                <img src={Ring1} />
                            </div>

                            <div className='text-[#9CA3AF] text-[0.75rem]'>Famous brand</div>

                            <div className='mt-[2px] text-[0.82rem] text-[#111928]'>
                                Celestial Crown Women's White Gold Ring in 10K, Crown-Inspired Design
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
                        Sign up to view all products
                    </Button>
                </div>
            </div>

            <div className='flex flex-col gap-7 mt-24'>
                <div className='font-medium text-[1.25rem]'>
                    Why Retailers Love Exchange
                </div>

                <div className='grid grid-cols-3 gap-3'>
                    <div className='bg-[#FFFFFF] rounded-lg py-[1.5rem] px-[2rem]'>
                        <img src={Products} />

                        <div className='text-[1.25rem] text-[#111928] mt-8'>
                            2M products available
                        </div>

                        <div className='text-[#4B5563] text-[0.82rem] mt-2'>
                            Scale your business with a diverse catalog of wholesaler-verified products
                        </div>
                    </div>

                    <div className='bg-[#FFFFFF] rounded-lg py-[1.5rem] px-[2rem]'>
                        <img src={VerifiedIcon} />

                        <div className='text-[1.25rem] text-[#111928] mt-8'>
                            Verified wholesalers with real reviews
                        </div>

                        <div className='text-[#4B5563] text-[0.82rem] mt-2'>
                            Connect with wholesalers backed by proven reputations and genuine customer insights
                        </div>
                    </div>

                    <div className='bg-[#FFFFFF] rounded-lg py-[1.5rem] px-[2rem]'>
                        <img src={TrustedIcon} />

                        <div className='text-[1.25rem] text-[#111928] mt-8'>
                            Trusted by over 2,000 retailers
                        </div>

                        <div className='text-[#4B5563] text-[0.82rem] mt-2'>
                            Helping thousands of retailers source the right products faster and more efficiently
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-24'>
                <div className='rounded-lg bg-black flex'>
                    <div className='w-[60%] p-16'>
                        <div className='text-white text-[1.875rem]'>
                            Find Your Jewelry wholesalers
                        </div>

                        <div className='mt-4 text-[0.75rem] text-[#D1D5DB]'>
                            Discover reliable wholesale partners specializing in gold, silver, gemstones, and a wide variety of exquisite jewelry materials—all backed by secure transactions and AI-powered matching to connect you with the best suppliers
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
 
                        <img src={BgCircle} className='absolute' />
                    </div>

                    <div className='w-[40%]'>
                        <img src={RealisticJewelry} className='object-cover rounded-r-lg h-[100%]' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-7 mt-24'>
                <div className='font-medium text-[1.25rem]'>
                    wholesalers with the highest trust score
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

            <div className='my-[10rem] grid grid-cols-3 gap-10'>
                <div className='flex flex-row items-start gap-3'>
                    <img src={SealCheckSupplier} />

                    <div className='flex flex-col gap-2'>
                        <div className='font-medium'>
                            Verified Suppliers
                        </div>

                        <div className='text-[0.82rem]'>
                            Our carefully screened wholesalers go through a thorough verification process to ensure they provide authentic products and deliver dependable, high-quality service.
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
                    <img src={WalletIcon} className='w-4 mt-[6px]' />

                    <div className='flex flex-col gap-2'>
                        <div className='font-medium'>
                            Best Prices
                        </div>

                        <div className='text-[0.82rem]'>
                            Access exclusive wholesale rates negotiated with trusted suppliers to ensure you receive the best value in the market
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Retailer