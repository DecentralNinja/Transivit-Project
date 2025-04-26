import React from "react";

const Search = ({
  className = "",
  type = "text",
  isSearchIcon = true,
  placeholder = "Search",
  ...params
}) => {
  return (
    <div
      className={`h-[50px] w-[261px] bg-[#f6f9ffea] flex px-3 rounded-md ${className}`}
      {...params}
    >
      {isSearchIcon ? (
        <img src="/Assets/whiteSearchIcon.svg" alt="" width={18} />
      ) : (
        ""
      )}
      <input
        type={type}
        className="border-2 w-full text-[#333333] text-[16px] px-3 bg-transparent placeholder:text-[#737A91] border-none outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
