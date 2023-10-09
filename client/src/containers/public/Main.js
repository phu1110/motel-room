import React,{useCallback} from "react";
import anhtro from "../../assets/images/nhanobita.jpg";
import icons from "../../ultils/icons";
import { useNavigate } from "react-router-dom";
import {path} from '../../ultils/constants';
import { TiemKiemGia, SanPham,TinMoi,SanPham1,Button} from "../../components";
const { BsChevronRight } = icons;

const Main = () => {
  const navigate = useNavigate();
  const goProduct = useCallback(() => {
    navigate(path.PRODUCT);
  }, [navigate]);
  return (
    <div className="flex justify-between  w-1100 ">
      <div className="left w-[740px]  mx-auto lg:mx-0">
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
          <SanPham images={anhtro} link={goProduct} 
          >
          </SanPham>
          

        </div>
        </div>
        <div className="border border-black rounded-lg ">
        <SanPham1 images={anhtro} link={'/Product'} content={'Chưa Biết Gì Hết'}
            address={'Chưa Có Nhà Lấy đâu ra địa chỉ'} price={'1 triệu 5'} acreage={'300 m2'}
            description={'PHÙ HỢP VỚI SINH VIÊN VÀ NGƯỜI ĐI LÀMĐANG SETUP – 28/08/2023 KHAI TRƯƠNGNgày 15/08 đã bắt đầu nhận khách (khuyến mãi 20%/tháng đầu).- Phong cách thiết…'}
            phone={'0797878315'} time={'chưa bik'}>
          </SanPham1>
        <SanPham1 images={anhtro} link={'/Product'} content={'Chưa Biết Gì Hết'}
            address={'Chưa Có Nhà Lấy đâu ra địa chỉ'} price={'1 triệu 5'} acreage={'300 m2'}
            description={'PHÙ HỢP VỚI SINH VIÊN VÀ NGƯỜI ĐI LÀMĐANG SETUP – 28/08/2023 KHAI TRƯƠNGNgày 15/08 đã bắt đầu nhận khách (khuyến mãi 20%/tháng đầu).- Phong cách thiết…'}
            phone={'0797878315'} time={'chưa bik'}>
          </SanPham1>
        <SanPham1 images={anhtro} link={'/Product'} content={'Chưa Biết Gì Hết'}
            address={'Chưa Có Nhà Lấy đâu ra địa chỉ'} price={'1 triệu 5'} acreage={'300 m2'}
            description={'PHÙ HỢP VỚI SINH VIÊN VÀ NGƯỜI ĐI LÀMĐANG SETUP – 28/08/2023 KHAI TRƯƠNGNgày 15/08 đã bắt đầu nhận khách (khuyến mãi 20%/tháng đầu).- Phong cách thiết…'}
            phone={'0797878315'} time={'chưa bik'}>
          </SanPham1>
        <SanPham1 images={anhtro} link={'/Product'} content={'Chưa Biết Gì Hết'}
            address={'Chưa Có Nhà Lấy đâu ra địa chỉ'} price={'1 triệu 5'} acreage={'300 m2'}
            description={'PHÙ HỢP VỚI SINH VIÊN VÀ NGƯỜI ĐI LÀMĐANG SETUP – 28/08/2023 KHAI TRƯƠNGNgày 15/08 đã bắt đầu nhận khách (khuyến mãi 20%/tháng đầu).- Phong cách thiết…'}
            phone={'0797878315'} time={'chưa bik'}>
          </SanPham1>
        </div>
      </div>
      <div className="right flex flex-col gap-4 lg:block hidden ">
        <div className="w-[340px] border border-black h-[380px] rounded-lg">
          <h2 className="text-center text-xl font-bold my-4">Tìm theo giá</h2>
          <div className="grid grid-cols-2 gap-4">
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'1 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'2 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'3 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'4 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'5 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'6 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'7 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'8 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'9 Triệu'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'10 Triệu'}></TiemKiemGia>
          </div>
        </div>
        <div className="w-[340px] border border-black h-[220px] rounded-lg ">
          <h2 className="text-center text-xl font-bold my-4">Tìm Theo Diện Tích</h2>
          <div className="grid grid-cols-2 gap-2">
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Bao Nhiêu Mét ?'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Bao Nhiêu Mét ?'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Bao Nhiêu Mét ?'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Bao Nhiêu Mét ?'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Bao Nhiêu Mét ?'}></TiemKiemGia>
          </div>
        </div>
        <div className="w-[340px] border border-black rounded-lg ">
          <TinMoi images={anhtro} title={'Nhà Của thằng này lạ quá ta'} price={'5 triệu'} date={'11/10/2003'}></TinMoi>
          <TinMoi images={anhtro} title={'Nhà Của thằng này lạ quá ta'} price={'5 triệu'} date={'11/10/2003'}></TinMoi>
          <TinMoi images={anhtro} title={'Nhà Của thằng này lạ quá ta'} price={'5 triệu'} date={'11/10/2003'}></TinMoi>
          <TinMoi images={anhtro} title={'Nhà Của thằng này lạ quá ta'} price={'5 triệu'} date={'11/10/2003'}></TinMoi>
        </div>
      </div>
    </div>
  );
};

export default Main;
