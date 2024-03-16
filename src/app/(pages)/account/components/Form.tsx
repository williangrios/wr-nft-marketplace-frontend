import Button from "@/components/Button/Button";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineContentCopy, MdOutlineHttp } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";

function Form() {
  const inputClasses =
    "p-2 bg-gray-200 rounded-lg border-gray-700 border outline-none w-full text-gray-600";
  const divBlockSocial = "flex flex-col";
  const divSocialClasses =
    "flex rounded-full items-center justify-center text-white bg-gray-600 pl-2 mb-6";
  const socialIconsClasses = "w-8 h-8 mx-2";
  return (
    <div className="w-full mt-8 lg:mt-0">
      <div className="">
        <form>
          <div className="">
            <label htmlFor="name" className="block">
              User name
            </label>
            <div className={divSocialClasses}>
              <AiOutlineUser className={socialIconsClasses} />
              <input
                type="text"
                placeholder="willian"
                className={inputClasses}
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="email" className="block">
              Email
            </label>
            <div className={divSocialClasses}>
              <HiOutlineMail className={socialIconsClasses} />
              <input
                type="email"
                placeholder="Email"
                className={inputClasses}
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="description" className="block">
              Description
            </label>
            <textarea
              name=""
              id=""
              cols={30}
              rows={6}
              className={inputClasses}
              placeholder="Something about your self"
            ></textarea>
          </div>
          <div className={divBlockSocial}>
            <label htmlFor="website" className="block">
              Website
            </label>
            <div className={divSocialClasses}>
              <MdOutlineHttp className={socialIconsClasses} />
              <input
                type="text"
                placeholder="Website"
                className={inputClasses}
              />
            </div>
          </div>
          <div className={divBlockSocial}>
            <div className="">
              <label htmlFor="facebook" className="block">
                Facebook
              </label>
              <div className={divSocialClasses}>
                <TiSocialFacebook className={socialIconsClasses} />
                <input
                  type="text"
                  placeholder="Facebook"
                  className={inputClasses}
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="twitter" className="block">
                Twitter
              </label>
              <div className={divSocialClasses}>
                <TiSocialTwitter className={socialIconsClasses} />
                <input
                  type="text"
                  placeholder="Twitter"
                  className={inputClasses}
                />
              </div>
            </div>
            <div className="">
              <label htmlFor="instagram" className="block">
                Instagram
              </label>
              <div className="">
                <div className={divSocialClasses}>
                  <TiSocialInstagram className={socialIconsClasses} />
                  <input
                    type="text"
                    placeholder="Instagram"
                    className={inputClasses}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <label htmlFor="wallet" className="block">
              Wallet address
            </label>
            <div className={divSocialClasses}>
              <MdOutlineHttp className={socialIconsClasses} />
              <input
                type="text"
                placeholder="0x987987"
                className={inputClasses}
              />
              <MdOutlineContentCopy className={`${socialIconsClasses} cursor-pointer rounded-full p-1 hover:bg-gray-100 hover:text-gray-500`}/>
            </div>
          </div>
          <div className="flex justify-center mb-28">
            <Button btnText="Upload Profile" handleClick={() => {}} classStyle="self-center"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
