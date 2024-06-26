"use client";
import React, { useEffect, useState } from "react";
import { BsArrowRight, BsSearch } from "react-icons/bs";

interface SearchBarProps {
  onClearSearch: any;
  onHandleSearch: any;
}

function SearchBar({ onHandleSearch, onClearSearch }: SearchBarProps) {
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      onHandleSearch(search);
    } else {
      onClearSearch();
    }
  }, [search, onClearSearch, onHandleSearch]);

  return (
    <div>
      <div className="my-10 w-[350px] px-4 py-2 m-auto bg-gray-100 flex rounded-full justify-center items-center gap-3 shadow-right-bottom ">
        <BsSearch className="text-gray-600 cursor-pointer hover:bg-gray-200 rounded-full w-8 p-2 h-8" />
        <input
          type="text"
          placeholder="Type your keyword..."
          className=" rounded-full p-2 placeholder:text-gray-500 text-gray-600"
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
        />
        <BsArrowRight className="text-gray-600 cursor-pointer hover:bg-gray-200 rounded-full  w-8 p-2 h-8" />
      </div>
    </div>
  );
}

export default SearchBar;
