import React from "react";
import Btn from "./Btn";

const Card = ({ ispromoted = false }) => {
  return (
    <>
      <div className="border-[2px] bg-white border-[#E1E1E1] rounded-[10px] py-3 pt-2 px-4 Card ">
        <div>
          {ispromoted ? (
            <h6 className="text-left text-[14px] font-semibold">Promoted</h6>
          ) : (
            ""
          )}
          <div className="flex gap-5 mt-[10px]">
            <div className="p-2 bg-[#FAFAFA] rounded-lg h-fit">
              <img src="/Assets/Cardicon.svg" alt="CardIocn" width={30} />
            </div>
            <div>
              <h3 className="text-[20px] font-[500]">UI/UX Designer</h3>
              <h4 className="text-left">Teams</h4>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-2">
            <img src="/Assets/mapIcon.svg" alt="searchicon" width={15} />
            <h4 className="text-[15px]">Seattle, USA(Remote)</h4>
          </div>
          <div className="flex items-center gap-5 mt-[5px]">
            <img src="./Assets/clockIcon.svg" alt="searchicon" width={15} />
            <h4 className="text-[15px]">
              1dayago | <span className="text-[#0154AA]"> 22 applicants</span>
            </h4>
          </div>
          <div className="flex items-center justify-between mt-5">
            <Btn title="Apply Now" className="p-[10px]  text-[13px]" />
            <img src="/Assets/saveIcon.svg" alt="" width={15} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
