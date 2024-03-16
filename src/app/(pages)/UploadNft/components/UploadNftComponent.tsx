"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlinePicture, AiTwotonePropertySafety } from "react-icons/ai";
import { FaPercent } from "react-icons/fa";
import { MdOutlineAttachFile, MdOutlineHttp } from "react-icons/md";
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter, TiTick } from "react-icons/ti";
import images from "../../../../img/index";
import DropZone from "./DropZone";
import Button from "@/components/Button/Button";

function UploadNftComponent() {
  const [active, setActive] = useState(0);
  const [itemName, setItemName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [properties, setProperties] = useState("");
  const [category, setCategory] = useState(0);

  const inputClasses =
    "p-2 bg-gray-200 rounded-lg border-gray-700 border outline-none w-full text-gray-600";
  const divBlockProperties = "flex flex-col justify-around md:flex-row gap-2 m-auto w-full";
  const divSocialClasses =
    "flex rounded-full items-center justify-center text-white bg-gray-600 pl-2 mb-6";
  const socialIconsClasses = "w-8 h-8 mx-2";

  const catArray = [
    {
      image: images.nft_image_1,
      category: "Sports",
    },
    {
      image: images.nft_image,
      category: "Music",
    },
    {
      image: images.nft_image_1,
      category: "Digital",
    },
    {
      image: images.nft_image_1,
      category: "Time",
    },
    {
      image: images.earn,
      category: "Photography",
    },
  ];

  const chooseItem = (item: any, i: number) => {
    setActive(i+1)
    setCategory(item.category)
  }

  return (
    <div>
      <DropZone
        title="JPG, PNG, WEBM, Max 100 Mb"
        heading="Drag & drop file"
        subHeading="or browse media in your device"
        itemName={itemName}
        website={website}
        description={description}
        royalties={royalties}
        fileSize={fileSize}
        category={category}
        properties={properties}
        image={images.upload}
      />
      <div className="">
        <label htmlFor="nft" className="block font-extrabold mt-4 pl-6">
          Item name
        </label>
        <div className={divSocialClasses}>
          <AiOutlinePicture className={socialIconsClasses} />
          <input
            type="text"
            placeholder="Item name"
            className={inputClasses}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className=''>
          <label htmlFor="website" className="block font-extrabold pl-6">
            Website
          </label>
          <div className={divSocialClasses}>
            <MdOutlineHttp className={socialIconsClasses} />
            <input
              type="text"
              placeholder="Website"
              className={inputClasses}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
        </div>
        <p className="">WRNFT Marketplace will include a link to this URL on this item details page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.</p>
        <div className="">
            <label htmlFor="description" className="block font-extrabold mt-4 pl-6">
              Description
            </label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={6}
              className={inputClasses}
              placeholder="Something about your self"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <p className="mb-4">The description will be included on the items detail page underneath its image. Markdown syntax is supported.</p>
          </div>
          <div className="">
            <label htmlFor="name" className="font-extrabold mt-10 pl-6">Choose collection</label>
            <p className="">Choose an existing collection or create a new one</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
              {catArray.map((item, i) => (
                <div className={`border border-gray-500 cursor-pointer rounded-lg p-2 ${active === i + 1 ? 'bg-gray-500 text-white' : ''}`} key={i+1} onClick={(() => chooseItem(item, i ))}>
                  <div className="flex">
                    <div className="w-[70%]">
                      <Image src={item.image} alt="background image" width={70} height={70} className="rounded-full w-14 h-14" objectFit="contain"/>
                    </div>
                    <div className="w-[30%] justify-center flex">
                      <TiTick />
                    </div>
                  </div>
                  <p className="mt-2 font-semibold">Crypto legend - {item.category}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={` ${divBlockProperties} pt-4`}>
            <div className="">
              <label htmlFor="royalties" className="block pl-6">
                Royalties
              </label>
              <div className={divSocialClasses}>
                <FaPercent className={socialIconsClasses} />
                <input
                  type="number"
                  placeholder="20"
                  className={inputClasses}
                  onChange={(e) => setRoyalties(e.target.value)}
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="Size" className="block pl-6">
                Size
              </label>
              <div className={divSocialClasses}>
                <MdOutlineAttachFile className={socialIconsClasses} />
                <input
                  type="text"
                  placeholder="165Mb"
                  className={inputClasses}
                  onChange={(e) => setFileSize(e.target.value)}
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="Properties" className="block pl-6">
                Properties
              </label>
              <div className="">
                <div className={divSocialClasses}>
                  <AiTwotonePropertySafety className={socialIconsClasses} />
                  <input
                    type="text"
                    placeholder="Properties"
                    className={inputClasses}
                    onChange={(e) => setProperties(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-8">
            <Button btnText="Upload" handleClick={() => {}} classStyle="" />
            <Button btnText="Preview" handleClick={() => {}} classStyle="" />
          </div>
      </div>
    </div>
  );
}

export default UploadNftComponent;
