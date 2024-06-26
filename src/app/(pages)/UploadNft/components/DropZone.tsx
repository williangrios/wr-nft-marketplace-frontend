"use client";
import React, { useCallback, useState } from "react";
import images from "../../../../img/index";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

interface DropZoneProps {
  title: string;
  heading: string;
  subHeading: string;
  name: string;
  website: string;
  description: string;
  royalties: string;
  fileSize: string;
  category: number;
  properties: string;
  uploadToPinata: any;
  setImage: any;
}

function DropZone({
  title,
  heading,
  subHeading,
  name,
  website,
  description,
  royalties,
  fileSize,
  category,
  properties,
  uploadToPinata,
  setImage,
}: DropZoneProps) {
  const [fileUrl, setFileUrl] = useState(null);
  const onDrop = useCallback(
    async (acceptedFile: any) => {
      const url = await uploadToPinata(acceptedFile[0]);
      setFileUrl(url);
      setImage(url);
    },
    [uploadToPinata, setImage]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxSize: 5000000,
  });

  return (
    <div className="">
      <div
        className="border-gray-500 border-dotted text-center border-4 p-4 rounded-xl cursor-pointer"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className="">
          <p className="">{title}</p>
          <div className="flex justify-center">
            <Image
              src={images.upload}
              alt="upload"
              width={100}
              height={100}
              className=""
            />
          </div>
          <p className="">{heading}</p>
          <p className="">{subHeading}</p>
        </div>
      </div>
      {fileUrl && (
        <aside className="">
          <div className="flex flex-col lg:flex-row gap-3 pt-4 items-start justify-center">
            <div className="w-full lg:w-[50%] flex justify-center lg:justify-end h-full">
              <Image
                src={fileUrl}
                // src={fileUrl && 'path' in fileUrl ? `/${(fileUrl as { path: string }).path}`: ''}
                alt="nft image"
                width={200}
                height={200}
                objectFit="contain"
                className="rounded-xl"
              />
            </div>
            <div className="w-[50%] flex flex-col self-center lg:justify-start">
              <div className="flex flex-col gap-2">
                <p className="w-full text-start">
                  <span className="font-extrabold mr-2">NFTName:</span>{" "}
                  {name ?? ""}
                </p>
                <p className="w-full text-start pl-4 gap-2">
                  <span className="font-extrabold mr-2">Website:</span>{" "}
                  {website ?? ""}
                </p>
                <p className="w-full text-start pl-4">
                  <span className="font-extrabold mr-2">Description:</span>{" "}
                  {description ?? ""}
                </p>
                <p className="w-full text-start pl-4">
                  <span className="font-extrabold mr-2">Royalties:</span>{" "}
                  {royalties ?? ""}
                </p>
                <p className="w-full text-start pl-4">
                  <span className="font-extrabold mr-2">File Size:</span>{" "}
                  {fileSize ?? ""}
                </p>
                <p className="w-full text-start pl-4">
                  <span className="font-extrabold mr-2">Properties:</span>{" "}
                  {properties ?? ""}
                </p>
                <p className="w-full text-start pl-4">
                  <span className="font-extrabold mr-2">Category:</span>{" "}
                  {category !== 0 ? category : 0}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}

export default DropZone;
