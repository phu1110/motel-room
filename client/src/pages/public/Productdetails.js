import React, {useEffect, useState} from 'react'
import { Slide } from 'react-slideshow-image';
import { useParams } from 'react-router-dom';
import notfound from '../../assets/images/not_found.png'
import icons from "../../ultils/icons";
import '../../assets/css/slider.css'
import { TiemKiemGia,TinMoi ,SanPham1} from "../../components";
import { detailPost } from '../../api/api';
import { image } from '../../api/URL';
import moment from 'moment';
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
    const imagePaths = actualFile ? actualFile.split(';').filter(path => path.trim() !== '').map(path => path.replace(/\\/g, '/')) : [];
    const completePaths = imagePaths.map(imagePath => `${image}/${imagePath}`);
    return (
      <div className='w-1100 flex justify-between gap-2'>
      <div>
      <div className='left max-w-[700px] border border-black rounded-lg '>
      <Slide>
  {completePaths.length > 0 ? (
    completePaths.map((completePath, index) => (
      <div key={index} className="each-slide-effect">
        <div style={{ 'backgroundImage': `url(${completePath})` }}></div>
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
            <div className="border border-black rounded-lg mt-[15px]">
        <SanPham1/>
        </div>
          </div>
            <div className='right'>
            <div className="right w-[340px] flex flex-col gap-4">
        <div className="border border-black h-[380px] rounded-lg">
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
        <div className="border border-black h-[340px] rounded-lg">
          <h2 className="text-center text-xl font-bold my-4">Tìm Trọ Theo Giá</h2>
          <div className="grid grid-cols-1 gap-2">
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Thuê Nhà Giá Rẻ'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Thuê Nhà Giá Rẻ'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Thuê Nhà Giá Rẻ'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Thuê Nhà Giá Rẻ'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Thuê Nhà Giá Rẻ'}></TiemKiemGia>
          </div>
        </div>
        <div className="border border-black h-[220px] rounded-lg">
          <h2 className="text-center text-xl font-bold my-4">Tìm Theo Diện Tích</h2>
          <div className="grid grid-cols-2 gap-2">
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Bao Nhiêu Mét ?'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Bao Nhiêu Mét ?'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Bao Nhiêu Mét ?'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Bao Nhiêu Mét ?'}></TiemKiemGia>
            <TiemKiemGia link={'/Product'} Icons={BsChevronRight} text={'Bao Nhiêu Mét ?'}></TiemKiemGia>
          </div>
        </div>
        <div className="border border-black rounded-lg ">
          <TinMoi></TinMoi>
          
        </div>
            </div>
      </div>
        </div>
 
    )
}

export default Productdetails