import React from 'react';
import ProfileIcon from '../../../assets/retailer/profile.svg';
import GreenVerified from '../../../assets/green-verified.svg';
import ThreeStars from '../../../assets/3-stars.svg';
import LeftBracs from '../../../assets/left-bracs.svg';
import RightBracs from '../../../assets/right-bracs.svg';
import { IoStar } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom';

// Import all icons
import ChalkboardGray from '../../../assets/retailer/chalkboard-gray.svg';
import ChalkboardBlack from '../../../assets/retailer/chalkboard-black.svg';
import ConnectionGray from '../../../assets/retailer/connection-gray.svg';
import ConnectionBlack from '../../../assets/retailer/connection-black.svg';
import StarsGray from '../../../assets/retailer/stars-gray.svg';
import StarsBlack from '../../../assets/retailer/stars-black.svg';
import NotificationsGray from '../../../assets/retailer/notifications-gray.svg';
import NotificationsBlack from '../../../assets/retailer/notifications-black.svg';
import SettingsGray from '../../../assets/retailer/settings-gray.svg';
import SettingsBlack from '../../../assets/retailer/settings-black.svg';
import LogoutGray from '../../../assets/retailer/logout-gray.svg';
import LogoutBlack from '../../../assets/retailer/logout-black.svg';

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

const NavItem = ({
    path,
    iconGray,
    iconBlack,
    label,
    badgeCount,
    location,
    navigate
}) => {
    const isActive = location.pathname === path;

    return (
        <div className='w-full'>
            {label == 'Notifications' && (
                <div className='border-t-1 border-[#D1D5DB] mb-4' />
            )}

            <div
                className={`group cursor-pointer flex flex-row gap-4 items-center justify-between 
                ${isActive ? 'text-[#111928]' : 'text-[#6B7280] hover:text-[#111928]'}`}
                onClick={() => navigate(path)}
            >
                <div className="flex gap-2 text-[0.82rem]">
                    {/* Icon wrapper */}
                    <div className="relative w-5 h-5">
                        {isActive ? (
                            <img src={iconBlack} className="absolute inset-0 w-full h-full" alt={label} />
                        ) : (
                            <>
                                <img
                                    src={iconGray}
                                    className="absolute inset-0 w-full h-full group-hover:hidden"
                                    alt={label}
                                />
                                <img
                                    src={iconBlack}
                                    className="absolute inset-0 w-full h-full hidden group-hover:block"
                                    alt={label}
                                />
                            </>
                        )}
                    </div>
                    <div>{label}</div>
                </div>

                {badgeCount && (
                    <div className={`text-[0.75rem] ${isActive ? 'bg-[#111928]' : 'bg-[#6B7280] group-hover:bg-[#111928]'} 
                    text-white rounded-full w-4 h-4 flex items-center justify-center`}>
                        {badgeCount}
                    </div>
                )}
            </div>
        </div>
    );
};

const SideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Navigation items configuration
    const navItems = [
        {
            path: "/retailer",
            iconGray: ChalkboardGray,
            iconBlack: ChalkboardBlack,
            label: "Dashboard"
        },
        {
            path: "/retailer/connections",
            iconGray: ConnectionGray,
            iconBlack: ConnectionBlack,
            label: "Connections"
        },
        {
            path: "/retailer/favorites",
            iconGray: StarsGray,
            iconBlack: StarsBlack,
            label: "Favorites"
        },
        {
            path: "/retailer/notifications",
            iconGray: NotificationsGray,
            iconBlack: NotificationsBlack,
            label: "Notifications",
            badgeCount: 2
        }
    ];

    const bottomNavItems = [
        {
            path: "/retailer/settings",
            iconGray: SettingsGray,
            iconBlack: SettingsBlack,
            label: "Settings"
        },
        {
            path: "/login",
            iconGray: LogoutGray,
            iconBlack: LogoutBlack,
            label: "Logout"
        }
    ];

    return (
        <div className='min-w-[15rem]'>
            {/* Profile Section */}
            <div className='flex gap-4'>
                <div>
                    <img src={ProfileIcon} alt="Logo" />
                </div>

                <div>
                    <div className='flex items-center gap-[5px] text-black font-semibold'>
                        <div>Seraphina Gold</div>
                        <img src={GreenVerified} alt="Verified" className='w-4 h-4' />
                    </div>

                    <div className='text-[#6B7280] text-[0.75rem]'>
                        serafinagold@gmail.com
                    </div>
                </div>
            </div>

            {/* Review Section */}
            <div className='flex items-center justify-between mt-2'>
                <div className='flex flex-col items-center justify-center'>
                    <img src={ThreeStars} alt="Three stars" />
                    <div className='flex flex-row'>
                        <img src={LeftBracs} className='h-[1.125rem] mt-[2px]' alt="Left bracket" />
                        <div className='text-[#1F2A37] text-[1.375rem] leading-none font-medium'>
                            94
                        </div>
                        <img src={RightBracs} className='h-[1.125rem] mt-[2px]' alt="Right bracket" />
                    </div>
                    <div className='text-[#111928] text-[0.563rem]'>
                        Trust Score
                    </div>
                </div>

                <div className='flex gap-1 mt-1'>
                    <StarRating rating={5} />
                    <div className='text-[0.75rem]'>
                        5,0 <span className='text-[#6B7280] underline'>(24)</span>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className='border-t-1 border-[#D1D5DB] my-4' />
            <div className='flex flex-col gap-4 items-start justify-start'>
                {navItems.map((item, index) => (
                    <NavItem
                        key={index}
                        path={item.path}
                        iconGray={item.iconGray}
                        iconBlack={item.iconBlack}
                        label={item.label}
                        badgeCount={item.badgeCount}
                        location={location}
                        navigate={navigate}
                    />
                ))}
            </div>

            {/* Bottom Navigation */}
            <div className='border-t-1 border-[#D1D5DB] my-4' />
            <div className='flex flex-col gap-4 items-start justify-start'>
                {bottomNavItems.map((item, index) => (
                    <NavItem
                        key={index}
                        path={item.path}
                        iconGray={item.iconGray}
                        iconBlack={item.iconBlack}
                        label={item.label}
                        location={location}
                        navigate={navigate}
                    />
                ))}
            </div>
        </div>
    );
};

export default SideBar;