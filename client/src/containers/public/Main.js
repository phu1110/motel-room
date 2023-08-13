import React from "react";
import { Button } from "../../components";
import anhtro from "../../assets/images/nhanobita.jpg";
import icons from "../../ultils/icons";
const { FiStar } = icons;
const Main = () => {
  return (
    <div className="flex justify-between  w-1100 ">
      <div className="left w-[740px] border border-black ">
        <h2 className="font-bold ml-[5px]">Danh Sách Đăng Tin</h2>
        <div className="arrange flex justify-betwen items-center ">
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
        <div className="w-full h-[1px] bg-black my-5"></div>
        <div className="m-4">
          <div className="Product static flex justify-between my-8 border border-gray-400">
            <div className="images w-[280px]  relative">
              <img
                src={anhtro}
                className="w-full h-full border border-black object-cover"
                alt="Biểu trưng ABC Corp"
              />
              <span className="group absolute bottom-0 right-0 p-2 transition-colors duration-300"></span>
            </div>
            <div className="w-[400px] ">
              <div className=" w-[400px] pr-[15px]">
                <div className="flex items-center justify-center h-full">
                  <a
                    href="/Login"
                    className="text-pink-400 decoration-black-600 hover:decoration-blue-400 underline cursor-pointer"
                  >
                    Phòng trọ Nhà làm mà làm bằng cái gì thì không biết
                  </a>
                </div>
                <div className="flex items-center justify-between gap-2 pl-[2px]">
                  <p className="price text-sky-400 "> 1 Triệu 5/Tháng</p>
                  <p className="acreage"> 300 </p>
                  <p className="address underline decoration-black-600 hover:decoration-blue-400 cursor-ponter">
                    Địa chỉ dưới âm tào địa phủ
                  </p>
                </div>
                <div className="flex">
                  <p className="Time ml-auto">Time</p>
                </div>
                <p className="text-gray-400">
                  PHÙ HỢP VỚI SINH VIÊN VÀ NGƯỜI ĐI LÀMĐANG SETUP – 28/08/2023
                  KHAI TRƯƠNGNgày 15/08 đã bắt đầu nhận khách (khuyến mãi
                  20%/tháng đầu).- Phong cách thiết…
                </p>
                <div className="flex">
                  <a className="mr-auto text-blue-400" href="/Login">Thông tin user</a>
                  <div className="text-right">
                    <p>Số điện thoại</p>
                    <button> Nhắn tin </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Product static flex justify-between my-8 border border-gray-400">
            <div className="images w-[280px]  relative">
              <img
                src={anhtro}
                className="w-full h-full border border-black object-cover"
                alt="Biểu trưng ABC Corp"
              />
              <span className="group absolute bottom-0 right-0 p-2 transition-colors duration-300"></span>
            </div>
            <div className="w-[400px]">
              <div className=" w-[400px] pr-[15px]">
                <div className="flex items-center justify-center h-full">
                  <a
                    href="/Login"
                    className="text-pink-400 decoration-black-600 hover:decoration-blue-400 underline cursor-pointer"
                  >
                    Phòng trọ Nhà làm mà làm bằng cái gì thì không biết
                  </a>
                </div>
                <div className="flex items-center justify-between gap-2 pl-[2px]">
                  <p className="price text-sky-400 "> 1 Triệu 5/Tháng</p>
                  <p className="acreage"> 300 </p>
                  <p className="address underline decoration-black-600 hover:decoration-blue-400 cursor-ponter">
                    Địa chỉ dưới âm tào địa phủ
                  </p>
                </div>
                <div className="flex">
                  <p className="Time ml-auto">Time</p>
                </div>
                <p className="text-gray-400">
                  PHÙ HỢP VỚI SINH VIÊN VÀ NGƯỜI ĐI LÀMĐANG SETUP – 28/08/2023
                  KHAI TRƯƠNGNgày 15/08 đã bắt đầu nhận khách (khuyến mãi
                  20%/tháng đầu).- Phong cách thiết…
                </p>
                <div className="flex">
                  <a className="mr-auto text-blue-400" href="/Login">Thông tin user</a>
                  <div className="text-right">
                    <p>Số điện thoại</p>
                    <button> Nhắn tin </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Product static flex justify-between my-8 border border-gray-400">
            <div className="images w-[280px]  relative">
              <img
                src={anhtro}
                className="w-full h-full border border-black object-cover"
                alt="Biểu trưng ABC Corp"
              />
              <span className="group absolute bottom-0 right-0 p-2 transition-colors duration-300"></span>
            </div>
            <div className="w-[400px] ">
              <div className=" w-[400px] pr-[15px]">
                <div className="flex items-center justify-center h-full">
                  <a
                    href="/Login"
                    className="text-pink-400 decoration-black-600 hover:decoration-blue-400 underline cursor-pointer"
                  >
                    Phòng trọ Nhà làm mà làm bằng cái gì thì không biết
                  </a>
                </div>
                <div className="flex items-center justify-between gap-2 pl-[2px]">
                  <p className="price text-sky-400 "> 1 Triệu 5/Tháng</p>
                  <p className="acreage"> 300 </p>
                  <p className="address underline decoration-black-600 hover:decoration-blue-400 cursor-ponter">
                    Địa chỉ dưới âm tào địa phủ
                  </p>
                </div>
                <div className="flex">
                  <p className="Time ml-auto">Time</p>
                </div>
                <p className="text-gray-400">
                  PHÙ HỢP VỚI SINH VIÊN VÀ NGƯỜI ĐI LÀMĐANG SETUP – 28/08/2023
                  KHAI TRƯƠNGNgày 15/08 đã bắt đầu nhận khách (khuyến mãi
                  20%/tháng đầu).- Phong cách thiết…
                </p>
                <div className="flex">
                  <a className="mr-auto text-blue-400 text-blue-400" href="/Login" >Thông tin user</a>
                  <div className="text-right">
                    <p>Số điện thoại</p>
                    <button> Nhắn tin </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right w-[340px] border border-black h-[400px]"></div>
    </div>
  );
};

export default Main;
