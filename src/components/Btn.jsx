import React from "react";

const Btn = ({
  title = "ApplyNow",
  className = "",
  textColor = true,
  imgSearch = false,
}) => {
  return (
    <>
      <button
        className={`bg-[#0154AA] ${
          textColor ? "text-white" : "text-black"
        }  px-6 rounded-md text-[16px] font-regular flex items-center justify-center gap-2 ${className}`}
      >
        {imgSearch ? (
          <img
            src="/Assets/searchIcon.svg"
            width={15}
            height={15}
            alt="imgSearch"
          />
        ) : (
          ""
        )}
        {title}
      </button>
    </>
  );
};

export default Btn;
