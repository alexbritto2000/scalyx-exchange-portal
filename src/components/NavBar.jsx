import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import scalyxLogo from '../assets/scalyx-logo.svg';
import notification from '../assets/notification.svg';
import DropDown from '../assets/dropdown.svg';
import jewelry from '../assets/jewelry.svg';
import message from '../assets/message.svg';
import user from '../assets/user.svg';
import ProfileSettings from '../assets/profile-settings.svg';
import LogoutIcon from '../assets/logout.svg';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    Select,
    SelectItem,
} from "@heroui/react";
import dropDownIconUrl from '../assets/dropdown.svg';
import { cn } from "@heroui/react";

// Placeholder Icon Components (replace with your actual icons)
const TwitterIcon = () => <div className="w-5 h-5 bg-gray-400 rounded-sm" />;
const GithubIcon = () => <div className="w-5 h-5 bg-gray-400 rounded-sm" />;
const LinkedInIcon = () => <div className="w-5 h-5 bg-gray-400 rounded-sm" />;

const CustomLink = ({ href, title, notify, className = "" }) => {
    const location = useLocation();

    return (
        <Link
            to={href}
            className={`${className} text-[1rem] font-normal py-3 rounded-[0.75rem] hover:bg-[#F2F6F6] px-[1.25rem] relative ${location.pathname === href ? "bg-[#F2F6F6]" : ""
                }`}
        >
            {title}
            {notify === "1" && (
                <div className="bg-[#FF5D5D] rounded-full w-2 h-2 absolute top-4 right-2" />
            )}
        </Link>
    );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
        toggle();
        navigate(href);
    };

    return (
        <button
            onClick={handleClick}
            className={`${className} relative group text-white my-2`}
        >
            {title}
            <span
                className={`h-[1px] inline-block bg-white absolute left-0 -bottom-0.5 
                   group-hover:w-full transition-[width] ease duration-300 
                   ${location.pathname === href ? "w-full" : "w-0"}`}
            />
        </button>
    );
};

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPopOverOpen, setIsPopOverOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const navigate = useNavigate();
    const inputWrapperStyle = "border border-[#F0F0F0] focus-within:border-blue-500 rounded-md";

    const options = [
        {
            key: "jewelry",
            label: "Jewelry",
            image: jewelry,
        },
        {
            key: "cloth",
            label: "cloth",
            image: jewelry,
        },
      ];

    return (
        <header className="w-full px-8 py-4 font-medium flex items-center justify-between relative z-10 md:px-6 sm:px-4">
            {/* Mobile Menu Button */}
            <button
                className="flex-col justify-center items-center hidden lg:flex"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className={`bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 
                        ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`} />
                <span className={`bg-black block h-0.5 w-6 rounded-sm my-1 transition-all duration-300 
                        ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 
                        ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'}`} />
            </button>

            {/* Desktop Navigation */}
            <div className="w-full flex justify-center items-center lg:hidden">
                <div className="max-w-7xl w-full flex justify-between items-center">
                    <div className="flex gap-4">
                        <div>
                            <img src={scalyxLogo} className="w-[6.25rem] cursor-pointer" onClick={() => navigate('/')} />

                            <div className="text-[0.825rem] text-[#6B7280]">
                                B2B Exchange
                            </div>
                        </div>

                        <Select
                            defaultSelectedKeys={["jewelry"]} 
                            disallowEmptySelection 
                            variant="bordered"
                            className="w-44 focus:ring-0 focus:outline-none focus:border-transparent !border-gray-300"
                            classNames={{
                                trigger: inputWrapperStyle,
                            }}
                            selectorIcon={
                                <img
                                    src={dropDownIconUrl}
                                    alt="dropdown icon"
                                    className="w-4 h-4 text-gray-500"
                                />
                            }
                            renderValue={(items) => {
                                return items.map((item) => (
                                    <div key={item.key} className="flex items-center gap-2">
                                        <img src={jewelry} alt="Selected" className="w-5 h-5 object-contain" />
                                        <span>{item.textValue}</span>
                                    </div>
                                ));
                            }}
                        >
                            {options.map((option) => (
                                <SelectItem
                                    key={option.key}
                                    value={option.key}
                                    textValue={option.label}
                                >
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={option.image}
                                            alt={option.label}
                                            className="w-5 h-5 object-contain"
                                        />
                                        <span>{option.label}</span>
                                    </div>
                                </SelectItem>
                            ))}
                        </Select>
                    </div>

                    <nav className="flex items-center">
                        <CustomLink href="/home" title="Home" notify="0" />
                        <CustomLink href="/blog" title="Blog" notify="0" />
                        <CustomLink href="/faq" title="FAQs" notify="0" />
                    </nav>

                    <div className="flex flex-row gap-[1.5rem]">
                        <Select
                            defaultSelectedKeys={["EN"]}
                            variant="light"
                            disallowEmptySelection
                            className="w-20 bg-transparent focus:outline-none focus:ring-0"
                            classNames={{
                                trigger: `${inputWrapperStyle} bg-transparent px-2 py-1 focus:outline-none focus:ring-0 focus:border-none shadow-none border-none`,
                            }}
                        >
                            <SelectItem key="EN" value="EN">
                                EN
                            </SelectItem>
                        </Select>

                        <img src={notification} />
                        <img src={message} />
                        <img src={user} />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 rounded-lg backdrop-blur-md py-16 z-50"
                >
                    <nav className="flex flex-col items-center">
                        <CustomMobileLink href="/" title="Home" toggle={toggleMenu} />
                        <CustomMobileLink href="/about" title="About" toggle={toggleMenu} />
                        <CustomMobileLink href="/projects" title="Projects" toggle={toggleMenu} />
                    </nav>

                    <nav className="flex items-center mt-8">
                        <motion.a
                            href="https://twitter.com"
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-5 mx-2"
                        >
                            <TwitterIcon />
                        </motion.a>
                        <motion.a
                            href="https://github.com"
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-5 mx-2"
                        >
                            <GithubIcon />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com"
                            target="_blank"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-5 mx-2"
                        >
                            <LinkedInIcon />
                        </motion.a>
                    </nav>
                </motion.div>
            )}

            {/* Logo Placeholder */}
            {/* <div className="absolute left-1/2 top-6 -translate-x-1/2">
                <div className="w-10 h-10 bg-gray-400 rounded-full" />
            </div> */}
        </header>
    );
};

export default NavBar;
