"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import images from "../../../img/index";
import Form from "./components/Form";

function AccountPage() {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile: any) => {
    setFileUrl(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxSize: 5000000,
  });

  return (
    <div className="w-[80%] m-auto text-gray-500 flex flex-col gap-5">
      <div>
        <h1 className="font-extrabold text-2xl">Profile Settings</h1>
        <p className="">
          Here, you can set preferred display name, create your profile URL and
          manage other personal settings
        </p>
      </div>
      <div className="w-full m-auto mt-8 flex items-center flex-col lg:flex-row lg:justify-start lg:items-start gap-4 lg:gap-8 justify-center">
        <div className="">
          <div
            className="cursor-pointer h-36 w-36 m-auto rounded-full"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <Image
              src={images.logo}
              alt="account upload"
              width={150}
              height={150}
              className="rounded-full"
              objectFit="cover"
            />
            <p className=" text-center font-semibold">Change Image</p>
          </div>
        </div>
        <div className="w-full md:w-[70%]">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
