import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Profile = () => {
  return (
    <div className="col-span-2 rounded-md  h-fit overflow-hidden Profile">
      <article className="bg-white flex flex-col items-center rounded-md  pb-5  profileBox1">
        <div className="relative ">
          <img
            src="/Assets/profileBg.svg"
            className="profileBg"
            width={500}
            height={500}
            alt=""
          />
          <img
            src="/Assets/profilePic2.svg"
            className="absolute top-14 left-[38%] profilePhoto"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center mt-12 profileData">
          <h3 className="text-[18px] text-[#333333] font-bold mt-2 ">
            Albert Flores
          </h3>
          <p className="text-[14px]  text-[#333333] w-[66%] text-center font-[500]  mt-1">
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
          </p>
          <h6 className="text-[14px] text-[#585D6E] font-[500] mt-2 md:text-[13px]">
            Clinton, Maryland
          </h6>
        </div>
      </article>
      <article className="mt-2 bg-white rounded-md profileBox2">
        <div className="flex justify-between px-3 py-3 border-b-2 border-[#E9ECEF]">
          <span className="md:text-[15px]">Profile Visitors</span>
          <span className="md:text-[15px]">140</span>
        </div>
        <div className="flex justify-between px-3 py-3 border-b-2 border-[#E9ECEF]">
          <span className="md:text-[15px]">Resume Viewers</span>
          <span className="md:text-[15px]">20</span>
        </div>
        <div className="flex justify-between px-3 py-3">
          <span className="md:text-[15px]">My Jobs</span>
          <span className="md:text-[15px]">88</span>
        </div>
      </article>
      <article className="mt-2 bg-white rounded-md pb-3 profileBox3">
        <div className="flex justify-between items-center px-3">
          <div>
            <h3 className="text-[18px] text-[#333333] font-bold mt-2">
              My calendar
            </h3>
            <h3 className="text-[16px] text-[#333333] font-normal">
              Upcoming Interviews
            </h3>
          </div>
          <MdOutlineArrowDropDown className="text-[30px]" />
        </div>
      </article>
    </div>
  );
};

export default Profile;
