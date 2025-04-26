import React, { useId } from "react";

function Selector({
  lableTitle = "",
  dropIcon = "one",
  defaultText = "Select an Option",
  toggleBtn = false,
  className = "",
  isSearchIcon = false, // Accept the prop here
  ...params
}) {
  const id = useId();
  return (
    <div className={`flex flex-col relative h-[50px]  ${className}`}>
      <select id="selector" key={id} className="selectField " {...params}>
        <option value={defaultText}>{defaultText}</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      {dropIcon === "one" ? (
        <img
          src="/Assets/dropDownIcon.svg"
          alt=""
          width={11}
          height={11}
          className="dropDown1 absolute right-0 top-[23px]"
        />
      ) : (
        dropIcon === "two" && (
          <span className="absolute right-0 top-[58px]">
            <img
              src="/Assets/dropDownIcon.svg"
              alt=""
              width={11}
              height={11}
              className="dropDown2"
            />

            <img
              src="/Assets/dropDownIcon.svg"
              alt=""
              width={11}
              height={11}
              className="dropDown3"
            />
          </span>
        )
      )}
    </div>
  );
}

export default Selector;
