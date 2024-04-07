import Image from "next/image";
import React from "react";
import images from "../../img/index";

function Loader() {
  return (
    <div className="flex w-full h-80">
      <div className="m-auto">
        <div className="">
          <Image
            src={images.loader}
            width={80}
            height={80}
            alt="loader"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Loader;
