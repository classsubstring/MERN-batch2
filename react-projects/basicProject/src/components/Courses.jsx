import React from "react";

const Courses = ({ heading, desc, css }) => {
  return (
    <div className="text-white w-full">
      <div className="w-[50%] mx-auto">
        <h3 className={`text-2xl  ${css}`}>{heading}</h3>
        <p>{desc}</p>
        <button className="bg-blue-500 m-2 p-4 text-xl rounded-2xl">
          Know more..{" "}
        </button>
      </div>
    </div>
  );
};

export default Courses;
