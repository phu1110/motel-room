import React,{useCallback, useState} from "react";
import anhtro from "../../assets/images/nhanobita.jpg";
import icons from "../../ultils/icons";
import { useNavigate } from "react-router-dom";
import {path} from '../../ultils/constants';
import { TiemKiemGia, SanPham,TinMoi,SanPham1,Button} from "../../components";

const { BsChevronRight } = icons;
const Main = () => {
  const navigate = useNavigate();
  const goMainSort = useCallback((minPrice, maxPrice, minArea, maxArea, category) => {
    const queryParams = {};
    if (minPrice) queryParams.minPrice = minPrice;
    if (maxPrice) queryParams.maxPrice = maxPrice;
    if (minArea) queryParams.minArea = minArea;
    if (maxArea) queryParams.maxArea = maxArea;
    if (category) queryParams.category = category;
    const queryString = Object.keys(queryParams)
      .map((key) => `${key}=${queryParams[key]}`)
      .join("&");
    navigate(`${path.MAINSORT}?${queryString}`);
  }, [navigate]);
  return (
    <div className="flex justify-between  w-1100 ">
      <div className="left w-[740px]  lg:mx-0 flex flex-col gap-6 border border-black p-4 rounded-lg h-full min-h-[1px]">
        <div className="border border-black rounded-lg ">
        <h2 className="font-bold ml-[5px]">Danh Sách Đăng Tin</h2>
        <div className="arrange flex justify-betwen items-center ml-[15px]">
          <small> Sắp Xếp : </small>
          <div className="flex justify-between">
            <Button
              text={"Mặc Định"}
              hover={" hover:bg-gray-200 hover:text-black-500"}
              bgColor={"bg-primary"}
              textColor={"text-black"}
            />
            <Button
              text={"Mặc Định"}
              hover={" hover:bg-gray-200 hover:text-black-500"}
              bgColor={"bg-primary"}
              textColor={"text-black"}
            />
            <Button
              text={"Mặc Định"}
              hover={" hover:bg-gray-200 hover:text-black-500"}
              bgColor={"bg-primary"}
              textColor={"text-black"}
            />
          </div>
        </div>
        <div style={{ width: '94%', height: '1px', backgroundColor: 'black' }} className="mb-2 mx-auto"></div>
        <div className="m-4">
          <SanPham />
        </div>
        </div>
        <div className="border border-black rounded-lg mb-6 ">
          <SanPham1/>
        </div>
      </div>
      <div className="right flex flex-col gap-4  ">
        <div className="w-[340px] border border-black h-[380px] rounded-lg">
          <h2 className="text-center text-xl font-bold my-4">Tìm theo giá</h2>
          <div className="grid grid-cols-2 gap-4">
            <TiemKiemGia link={() => goMainSort(1,1000000,null,null, null)} Icons={BsChevronRight} text={'Dưới 1 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={() => goMainSort(1000000,2000000,null,null, null)} Icons={BsChevronRight} text={'Từ 1 - 2 triệu'}></TiemKiemGia>
            <TiemKiemGia link={() => goMainSort(2000000,3000000,null,null, null)} Icons={BsChevronRight} text={'Từ 2 - 3 triệu'}></TiemKiemGia>
            <TiemKiemGia link={() => goMainSort(3000000,5000000,null,null, null)} Icons={BsChevronRight} text={'Từ 3 - 5 triệu'}></TiemKiemGia>
            <TiemKiemGia link={() => goMainSort(5000000,7000000,null,null, null)} Icons={BsChevronRight} text={'Từ 5 - 7 triệu'}></TiemKiemGia>
            <TiemKiemGia link={() => goMainSort(7000000,10000000,null,null, null)} Icons={BsChevronRight} text={'Từ 7 - 10 triệu'}></TiemKiemGia>
            <TiemKiemGia link={() => goMainSort(10000000,15000000,null,null, null)} Icons={BsChevronRight} text={'Từ 10 - 15 triệu'}></TiemKiemGia>
            <TiemKiemGia link={() => goMainSort(15000000,150000000,null,null, null)} Icons={BsChevronRight} text={'Trên 15 triệu'}></TiemKiemGia>
          </div>
        </div>
        <div className="w-[340px] border border-black h-[220px] rounded-lg ">
          <h2 className="text-center text-xl font-bold my-4">Tìm Theo Diện Tích</h2>
          <div className="grid grid-cols-2 gap-2">
            <TiemKiemGia link={() => goMainSort(null,null,1,20, null)} Icons={BsChevronRight} text={'Dưới 20m'}></TiemKiemGia>
            <TiemKiemGia link={() => goMainSort(null,null,20,30, null)} Icons={BsChevronRight} text={'Từ 20 - 30m'}></TiemKiemGia>
            <TiemKiemGia link={() => goMainSort(null,null,30,50, null)} Icons={BsChevronRight} text={'Từ 30 - 50m'}></TiemKiemGia>
            <TiemKiemGia link={() => goMainSort(null,null,50,70, null)} Icons={BsChevronRight} text={'Từ 50 - 70m'}></TiemKiemGia>
            <TiemKiemGia link={() => goMainSort(null,null,70,90, null)} Icons={BsChevronRight} text={'Từ 70 - 90m'}></TiemKiemGia>
            <TiemKiemGia link={() => goMainSort(null,null,90,99999, null)} Icons={BsChevronRight} text={'Trên 90m'}></TiemKiemGia>
          </div>
        </div>
        <div className="w-[340px]  border border-black rounded-lg ">
        <TinMoi images={anhtro}/>
        </div>
      </div>
    </div>
  );
};

export default Main;
