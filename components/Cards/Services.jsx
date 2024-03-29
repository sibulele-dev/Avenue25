import React from "react";

function Services(props) {
  return (
    <div className="w-full max-w-xs min-h-[26rem] bg-white shadow-md rounded-lg border border-gray-200 px-4 py-3 mx-2 my-4">
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 w-28 h-28 rounded-full shadow-lg"
          src={props.img}
        />
        <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
          {props.title}
        </h5>
        <p className="text-base text-gray-500 text-center">
          {props.text}
        </p>
        <a href="" className="border-2 bg-white border-blue-600 py-2 px-3 rounded-full mt-4">Learn More</a>
      </div>
    </div>
  );
}

export default Services;
