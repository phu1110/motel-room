import React, { memo,useEffect, useState } from 'react';
import { getPost } from '../api/api';
import { image } from '../api/URL';
import notfound from '../assets/images/not_found.png'
import moment from 'moment';
import { Link } from 'react-router-dom';

const List = ({miPrice, maPrice, miArea, maArea, cate, pageN }) => {
  const [page, setPage] = useState(pageN);
  const [roomList, setRoomList] = useState([]);
  const [pagesize, setPageSize] = useState(7);
  const [totalCount, setTotalCount] = useState(0);

  const [minPrice, setminPrice] = useState(miPrice);
  const [maxPrice, setmaxPrice] = useState(maPrice);
  const [minArea, setminArea] = useState(miArea);
  const [maxArea, setmaxArea] = useState(maArea);
  const [category, setcategory] = useState(cate);
  function getAddressBeforeComma(address) {
    const commaIndex = address.indexOf(',');
    return commaIndex !== -1 ? address.slice(0, commaIndex).trim() : address;
  }
  function TruncatedText({ text, maxLength }) {
    if (text.length <= maxLength) {
      return (
        <td className="text-basic font-bold text-black  px-6 py-4 ">
          {text}
        </td>
      );
    } else {
      const truncatedText = text.slice(0, maxLength) + "...";
      return (
        <td className="text-basic font-bold text-black  px-6 py-4">
          {truncatedText}
        </td>
      );
    }
  }
  const loadPostVip = async (hireState, statusState, minPrice, maxPrice, minArea, maxArea, category, isVip, sortBy, isAscending, pageNumber, pageSize) => {
    await getPost(hireState, statusState, minPrice, maxPrice, minArea, maxArea, category, isVip, sortBy, isAscending, pageNumber, pageSize)
    .then(apiData => {
        setRoomList(apiData.data.post);
    }).catch(api =>{
      console.error(api)
    })
  }
  useEffect(() => {
  const hireState = 'Chưa Được Thuê';
  const statusState = 'Đã Duyệt';
  const isVip = 'Hạng Vip';
  const sortBy = 'dateCreated';
  const isAscending = false;
  const pagesize = 4;
  loadPostVip(hireState, statusState, minPrice, maxPrice, minArea, maxArea, category, isVip, sortBy, isAscending, pageN, pagesize);
}, [pageN]);
const calculateElapsedTime = (room) => {
  if (room && room.dateApproved) {
    const roomDate = moment(room.dateApproved);
    const currentDate = moment();

    const hoursDiff = currentDate.diff(roomDate, 'hours');
    const minutesDiff = currentDate.diff(roomDate, 'minutes') % 60;
    const dateDiff = currentDate.diff(roomDate, 'hours') % 24;

    if (hoursDiff >= 24) {
      // Nếu thời gian trôi qua lớn hơn hoặc bằng 24 giờ, hiển thị ngày đăng
      return `${dateDiff} ngày trước`;
    } else if (hoursDiff > 0) {
      // Nếu thời gian trôi qua dưới 24 giờ, hiển thị số giờ và phút trước đó
      return `${hoursDiff} giờ ${minutesDiff} phút trước`;
    } else {
      // Nếu thời gian trôi qua dưới 1 giờ, chỉ hiển thị số phút trước đó
      return `${minutesDiff} phút trước`;
    }
  }

  return 'Không xác định';
};
  return (
    <div>
      {Array.isArray(roomList) && roomList.length > 0 ? (roomList.map((room) => (
      <div key={room.id}>
        <div className="Product static flex flex-col lg:flex-row lg:justify-start my-8 border border-gray-400 rounded-lg ">
      <div className="lg:w-[280px] relative">
        <p>
        <div className="border border-black object-cover rounded-lg h-[230px]">
  {room.actualFile ? (
    <img
      src={`${image}/${room.actualFile}`}
      className="w-full h-full"
      alt="Biểu trưng ABC Corp"
    />
  ) : (
    <div className="w-full h-full">
      <img src={notfound} alt='not found'></img>
    </div> // Hoặc bạn có thể thay thế bằng lớp CSS tùy chỉnh
  )}
</div>

        </p>
        <span className="group absolute bottom-0 right-0 p-2 transition-colors duration-300"></span>
      </div>
      <div className="w-full lg:w-[400px]">
        <div className="w-full lg:w-[calc(100% - 280px)] pr-[15px]">
          <div className="flex items-center justify-center h-full">
            
            <Link to={`/Product/${room.id}`}>
            <p 
              
              className="text-pink-400 decoration-black-600 hover:decoration-blue-400"
            >
              {room.title}
            </p>
            </Link>
          </div>
          <div className="flex items-center justify-between gap-2 pl-[2px]">
            <p className="price text-sky-400"> {room.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
            <p className="acreage"> {room.area}m² </p>
            <p className="address decoration-black hover:decoration-blue-400 ">
            {getAddressBeforeComma(room.address)}
            </p>
          </div>
          <div className="hidden lg:flex">
            <p className="Time ml-auto">{calculateElapsedTime(room)}</p>
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
            <p className="text-gray-400"> <TruncatedText text={room.description} maxLength={100} /></p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <p className="mt-2 lg:mt-0 lg:mr-auto text-blue-400" >
             {room.authorname}
            </p>
            <div className="text-right flex gap-2">
              <p>{room.phone}</p>
              <button className="mt-2 lg:mt-0">Nhắn tin</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      ))) : (null)}
  </div>
  );
}
export default memo(List)