"use client";
import React, { useContext, useEffect, useState } from "react";
import Discover from "./Discover";
import HelpCenter from "./HelpCenter";
import Notification from "./Notification";
import Profile from "./Profile";
import Sidebar from "./SideBar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import Button from "../Button/Button";
import images from "../../img/index";
import {
  WRNFTMarketplaceContext,
  WRNFTMarketplaceProvider,
} from "@/context/WRNFTMarketplaceContext";
import { DiJqueryLogo } from "react-icons/di";

function NavBar() {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const router = useRouter();
  const { currentAccount, connectWallet } = useContext(WRNFTMarketplaceContext);

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setNotification(false);
      setDiscover(false);
      setHelp(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  const openNotifications = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openMenu = (e: any) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover((prev) => !prev);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setHelp((prev) => !prev);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  return (
    <div className="w-full relative z-50 py-6">
      <div className="w-[100%] lg:w-[80%] m-auto flex items-center justify-between">
        <div className="flex items-center w-[50%] justify-around ">
          <div className="">
            <DiJqueryLogo
              className="h-16 w-16 text-purple-900 cursor-pointer hover:scale-110 transform transition-all ease-in-out"
              onClick={() => router.push("/")}
            />
          </div>
          <div className="">
            <div className="hidden lg:flex items-center justify-center gap-2 border border-black rounded-full py-2 px-3">
              <input
                type="text"
                className="px-3 py-1 outline-none"
                placeholder="Search NFT"
              />
              <BsSearch onClick={() => {}} className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex items-center w-[50%] justify-end lg:justify-around gap-4 lg:gap-0">
          <div className="hidden lg:flex lg:flex-col">
            <p
              className="cursor-pointer"
              onClick={(e) => {
                openMenu(e);
              }}
            >
              Discover
            </p>
            {discover && (
              <div className="absolute z-10 mt-8 flex flex-col bg-gray-200 shadow-right-bottom rounded-xl p-3">
                <Discover />
              </div>
            )}
          </div>
          <div className="hidden lg:flex lg:flex-col">
            <p
              className="cursor-pointer"
              onClick={(e) => {
                openMenu(e);
              }}
            >
              Help Center
            </p>
            {help && (
              <div className="absolute z-10 mt-8 flex flex-col bg-gray-300 rounded-xl p-3 shadow-right-bottom">
                <HelpCenter />
              </div>
            )}
          </div>
          <div className="flex justify-center gap-2 items-center">
            <div className="">
              <MdNotifications
                className="w-[28px] h-[28px] text-gray-800 cursor-pointer hover:scale-110 transition-all ease-in-out"
                onClick={() => {
                  openNotifications();
                }}
              />
              {notification && <Notification />}
            </div>
            <div className="hidden lg:flex">
              {currentAccount === "" ? (
                <Button btnText="Connect" handleClick={() => connectWallet()} />
              ) : (
                <Button
                  btnText="Create"
                  handleClick={() => {
                    router.push("/UploadNft");
                  }}
                />
              )}
            </div>
          </div>
          <div className="">
            <div className="">
              <Image
                src={images.logo}
                className="cursor-pointer hover:scale-110 transition-all ease-in-out"
                alt="Profile"
                width={50}
                height={50}
                onClick={() => {
                  openProfile();
                }}
              />
              {profile && <Profile currentAccount={currentAccount} />}
            </div>
          </div>
          <div className="lg:hidden flex  ">
            <CgMenuRight
              className="cursor-pointer text-gray-800 mr-4 h-[35px] w-[35px]"
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>
      {openSideMenu && (
        <div className="">
          <Sidebar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
}

export default NavBar;
