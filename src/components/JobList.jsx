import React from "react";
import Card from "./Card";

const JobList = ({
  title = "Featured Jobs",
  subTitle = "See Featured Jobs",
  showTitle = true,
  className = "",
  ispromoted = "true",
}) => {
  return (
    <>
      <section className={`flex flex-col mt-5 ${className}`}>
        <div className="flex items-center gap-4">
          {showTitle ? (
            <>
              <h3 className="text-[22px] font-medium">{title}</h3>
              <h6 className="text-[17px] text-[#0154AA] underline">
                {subTitle}
              </h6>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-wrap gap-6 mt-4">
          <Card ispromoted={ispromoted} />
          <Card ispromoted={ispromoted} />
          <Card ispromoted={ispromoted} />
          <Card ispromoted={ispromoted} />
        </div>
      </section>
    </>
  );
};

export default JobList;
