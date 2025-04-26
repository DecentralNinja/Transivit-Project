import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import Search from "./Search";
import Btn from "./Btn";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Nav = () => {
  const [profileBar, useProfileBar] = useState(false);
  const [profileExpand, setProfileExpand] = useState(false);
  const [navLinks, setNavLinks] = useState([
    { id: 1, navtitle: "Find Jobs", path: "/FindJobs", active: true },
    { id: 2, navtitle: "Top Companies", path: "/topCompany", active: false },
    { id: 3, navtitle: "Job Tracker", path: "/jobTracker", active: false },
    { id: 4, navtitle: "My Calendar", path: "/calendar", active: false },
    { id: 5, navtitle: "Documents", path: "/document", active: false },
    { id: 6, navtitle: "Messages", path: "/messages", active: false },
    { id: 7, navtitle: "Notifications", path: "/notification", active: false },
  ]);

  const handleActiveLink = (id) => {
    const updatedLinks = navLinks.map((link) =>
      link.id === id ? { ...link, active: true } : { ...link, active: false }
    );
    setNavLinks(updatedLinks);
  };

  return (
    <section className="px-4 py-3 flex bg-white justify-between border-black h-[70px] navSection">
      <section className="navLg">
        <div className="flex items-center gap-7 naLinksResponsive">
          <img src="/Assets/Logo.svg" alt="Logo" />
          {navLinks.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              onClick={() => handleActiveLink(item.id)}
              className={`Navlinks ${
                item.active === true ? "font-semibold text-[#0154AA]" : ""
              }`}
            >
              {item.navtitle}
            </Link>
          ))}
        </div>
      </section>
      <article className="flex gap-4 navBtnSide">
        <div className="flex gap-5">
          <Search className="h-[40px] hide-search" />
          <Btn title="Resume Builder" className="text-[16px] navBtn" />
        </div>
        <div
          className="cursor-pointer hidden profileBAR"
          onClick={() => useProfileBar(!profileBar)}
        >
          <img src="/Assets/profilePic1.svg" alt="Profile" />
        </div>
      </article>

      <div
        className={`fixed top-0 right-0 h-full w-[300px] scrollNav flex flex-col bg-gray-100 shadow-lg z-30 transform transition-transform duration-300 ${
          profileBar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 nMain ">
          <h2 className="text-2xl font-bold navTitle">Profile Menu</h2>
          <article className="bg-white flex-col items-center rounded-md pb-5 hidden profilebar1">
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
              <p className="text-[15px]  text-[#333333] w-[66%] text-center font-[500]  mt-1">
                Senior Product Designer | UI/UX Designer | Graphic Designer |
                Web...
              </p>
              <h6 className="text-[14px] text-[#585D6E] font-[500] mt-2 md:text-[13px]">
                Clinton, Maryland
              </h6>
            </div>
          </article>
          <RxCross1
            className="absolute right-4 top-6  cursor-pointer"
            onClick={() => useProfileBar(!profileBar)}
          />
          <RxCross1
            className="absolute right-4  top-4 text-white font-black cursor-pointer"
            onClick={() => useProfileBar(!profileBar)}
          />
          <div
            className={`transition-all duration-300 overflow-hidden ${
              profileExpand ? "max-h-[400px]" : "max-h-0"
            }`}
          >
            <section className="mt-2 bg-white rounded-md profileBar2">
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
            </section>
          </div>
          <div
            className="items-center justify-center my-2 rounded-md hidden seemore mx-2 cursor-pointer text-[#3e3e3e] hover:bg-[#E9E7E4]"
            onClick={() => setProfileExpand(!profileExpand)}
          >
            <span>{profileExpand ? "See Less" : "See More"}</span>
            <RiArrowDropDownLine />
          </div>
          <div className="forNavListContent">
            <Search className="h-[38px] w-[95%] mt-2 " />
            <ul className="mt-5 flex flex-col gap-7 forNavList">
              {navLinks.map((item) => (
                <Link
                  to={item.path}
                  key={item.id}
                  onClick={() => handleActiveLink(item.id)}
                  className={` ${
                    item.active === true ? "font-semibold text-[#0154AA]" : ""
                  }`}
                >
                  {item.navtitle}
                </Link>
              ))}
            </ul>
            <Btn
              title="Resume Builder"
              className="text-[16px] w-[90%] py-3 mt-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
