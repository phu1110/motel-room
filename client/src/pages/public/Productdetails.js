import React, {useEffect, useState,useCallback} from 'react'
import { Slide } from 'react-slideshow-image';
import { useParams } from 'react-router-dom';
import notfound from '../../assets/images/not_found.png'
import icons from "../../ultils/icons";
import '../../assets/css/slider.css'
import { TiemKiemGia,TinMoi ,SanPham1} from "../../components";
import { detailPost } from '../../api/api';
import { image } from '../../api/URL';
import { useNavigate } from "react-router-dom";
import moment from 'moment';
import {path} from '../../ultils/constants';
const { BsChevronRight } = icons;
const Productdetails = () => {
  const { id } = useParams();
  const [roomData, setRoomData] = useState([]);
  const [actualFile, setactualFile] = useState('');
    // const images = [notfound];
    
    useEffect(() => {
      const fetchTierDetails = async () => {
          try {
              const response = await detailPost(id);
              // Lưu thông tin người dùng vào state
              setRoomData(response.data);
              setactualFile(response.data.actualFile);
          } catch (error) {
              console.error('Error fetching user details:', error);
          }
          
      };

      fetchTierDetails();
    }, [id]);
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
  
      // Use the navigate function to update the URL
      navigate(`/MainSort?${queryString}`);
    }, [navigate]);
  
    const imagePaths = actualFile ? actualFile.split(';').filter(path => path.trim() !== '').map(path => path.replace(/\\/g, '/')) : [];
    const completePaths = imagePaths.map(imagePath => `${image}/${imagePath}`);
    return (
      <div className='w-[1050px] flex justify-between gap-2'>
      <div>
      <div className='left max-w-[750px]  border border-black rounded-lg '>
      <Slide>
  {completePaths.length > 0 ? (
    completePaths.map((completePath, index) => (
      <div key={index} className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${completePath})`, 'maxWidth': '750px', 'maxHeight': '350px', }}></div>
      </div>
    ))
  ) : (
    <div className="each-slide-effect">
      <div style={{ 'backgroundImage': `url(${notfound})` }}></div>
    </div>
  )}
</Slide>
          
          {roomData ? (
          <div className='ml-[15px]'>
          <div  className="">
             <p className='text-pink-400 text-2xl font-bold cursor-pointer'>{roomData.title}</p>
          </div>
          <div className='flex items-center gap-2'>
            <p className='font-bold'>Địa chỉ : </p>
            <p>{roomData.address}</p>
          </div>
          <div className='flex items-center gap-6'>
            <p className='text-xl text-green-300'>Giá Trọ : {roomData.price}</p>
            <p className='font-bold'>Diện Tích: {roomData.area}m²</p>
            <p className='font-bold'>{roomData.formattedDateapprove}</p>
          </div>
          </div>
             ) : (
              <p>Thông tin bài đăng bị lỗi</p>
          )}
         
          
          
          <div className='mt-[10px]'>
            <p className='text-2xl ml-[5px] font-bold'> Thông Tin Mô Tả</p>
            <div className='ml-[25px]'>
            {roomData.description && (
  <div>
    {roomData.description.split('.').map((sentence, index) => (
      <p className='text-violet-400 py-[4px] ' key={index}>-{sentence.trim()}</p>
    ))}
  </div>
)}

            </div>
          </div>
            </div> 
            <div className="border border-black rounded-lg mt-[15px] max-w-[700px]">
        <SanPham1/>
        </div>
          </div>
          <div className="right flex flex-col gap-4  ">
        <div className=" border border-black  rounded-lg">
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
        <div className=" border border-black  rounded-lg ">
          <h2 className="text-center text-xl font-bold my-4">Tìm Theo Diện Tích</h2>
          <div className="grid grid-cols-2 gap-2 ">
            <TiemKiemGia link={() => goMainSort(null,null,1,20, null)} Icons={BsChevronRight} text={'Dưới 20m'}></TiemKiemGia>
            <TiemKiemGia link={() => goMainSort(null,null,20,30, null)} Icons={BsChevronRight} text={'Từ 20 - 30m'}></TiemKiemGia>
            <TiemKiemGia link={() => goMainSort(null,null,30,50, null)} Icons={BsChevronRight} text={'Từ 30 - 50m'}></TiemKiemGia>
            <TiemKiemGia link={() => goMainSort(null,null,50,70, null)} Icons={BsChevronRight} text={'Từ 50 - 70m'}></TiemKiemGia>
            <TiemKiemGia link={() => goMainSort(null,null,70,90, null)} Icons={BsChevronRight} text={'Từ 70 - 90m'}></TiemKiemGia>
            <TiemKiemGia link={() => goMainSort(null,null,90,99999, null)} Icons={BsChevronRight} text={'Trên 90m'}></TiemKiemGia>
          </div>
        </div>
        <div className="  border border-black rounded-lg ">
        <TinMoi />
        </div>
      </div>
        </div>
 
    )
}

export default Productdetails