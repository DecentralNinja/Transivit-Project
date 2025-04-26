import React from "react";
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import { Outlet } from "react-router-dom";


const LandingPage = () => {
  return (
    <>
      <section className="h-full ">
        <Nav />
        <section className="px-4 py-8 md:py-4 bg-[#F4F4F4] grid grid-cols-8 mainSection">
          <Profile />
          <section className="ml-5 col-span-6 mainPageContainer ">
            <Outlet/>
          </section>
        </section>
      </section>
    </>
  );
};

export default LandingPage;
