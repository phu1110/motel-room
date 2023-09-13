import React, { memo } from 'react';
const List = ({ images, link, content, description, price, acreage, address, time, phone }) => {
  return (
    <div className="Product static flex flex-col lg:flex-row lg:justify-start my-8 border border-gray-400 rounded-lg">
      <div className="lg:w-[280px] relative">
        <p onClick={link}>
          <img
            src={images}
            className="w-full h-full border border-black lg:h-[218px] object-cover cursor:pointer"
            alt="Biểu trưng ABC Corp"
          />
        </p>
        <span className="group absolute bottom-0 right-0 p-2 transition-colors duration-300"></span>
      </div>
      <div className="w-full lg:w-[400px]">
        <div className="w-full lg:w-[calc(100% - 280px)] pr-[15px]">
          <div className="flex items-center justify-center h-full">
            <a
              href={link}
              className="text-pink-400 decoration-black-600 hover:decoration-blue-400 cursor-pointer"
            >
              {content}
            </a>
          </div>
          <div className="flex items-center justify-between gap-2 pl-[2px]">
            <p className="price text-sky-400"> {price}</p>
            <p className="acreage"> {acreage} </p>
            <p className="address decoration-black-600 hover:decoration-blue-400 cursor-pointer">
              {address}
            </p>
          </div>
          <div className="hidden lg:flex">
            <p className="Time ml-auto">{time}</p>
          </div>
        
          <style>
            {`
              @media (max-width: 768px) {
                .description {
                  display: none;
                }
              }
            `}
          </style>
          <div className="description lg:w-300px">
            <p className="text-gray-400">{description}</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <a className="mt-2 lg:mt-0 lg:mr-auto text-blue-400" href="/Login">
              Thông tin user
            </a>
            <div className="text-right">
              <p>{phone}</p>
              <button className="mt-2 lg:mt-0">Nhắn tin</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(List);
