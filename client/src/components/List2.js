import React, { memo, useEffect, useState } from 'react';
import { getPost } from '../api/api';
import { image } from '../api/URL';
import moment from 'moment';
import { Link } from 'react-router-dom';
import notfound from '../assets/images/not_found.png';
const List2 = ({ link, miPrice, maPrice, miArea, maArea, cate, pageN }) => {
  const [roomList, setRoomList] = useState([]);
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
        <td className="text-basic text-black font-bold px-6 py-4  ">
          {text}
        </td>
      );
    } else {
      const truncatedText = text.slice(0, maxLength) + "...";
      return (
        <td className="text-basic text-black font-bold px-6 py-4  ">
          {truncatedText}
        </td>
      );
    }
  }
  const loadPostNormal = async (hireState, statusState, minPrice, maxPrice, minArea, maxArea, category, isVip, sortBy, isAscending, pageNumber, pageSize) => {
    await getPost(hireState, statusState, minPrice, maxPrice, minArea, maxArea, category, isVip, sortBy, isAscending, pageNumber, pageSize)
    .then(apiData => {
        setRoomList(apiData.data.post);
    })
  }
  useEffect(() => {
    const hireState = 'Chưa Được Thuê';
    const statusState = 'Đã Duyệt';
    const isVip = 'Hạng Thường';
    const sortBy = 'dateCreated';
    const isAscending = false;
    const pagesize = 6;
    loadPostNormal(hireState, statusState, minPrice, maxPrice, minArea, maxArea, category, isVip, sortBy, isAscending, pageN, pagesize);
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
      {Array.isArray(roomList) && roomList.length > 0 ? 
      (roomList.map((room) => (
        <div key={room.id}>
          <div className="Product static flex gap-4 my-4">
            <div className="images w-[200px]  relative">
              <a href={link}> {/* Sử dụng thẻ <a> để tạo liên kết */}
              {room.actualFile ? (<img
                  src={`${image}/${room.actualFile}`}
                  className="border border-black object-cover rounded-lg h-[150px] "
                  alt="Biểu trưng ABC Corp"
                />):(<div className="w-full h-full bg-gray-300">
                  <img src={notfound}></img>
                </div>)}
                
              </a>
              <span className="group absolute bottom-0 right-0 p-2 transition-colors duration-300"></span>
            </div>
            <div className="w-[550px] ">
              <div className="w-full pr-[15px]">
                <div className="flex items-center justify-center h-full">
                <Link to={`/Product/${room.id}`}>
            <p 
              
              className="text-red-700 decoration-black-600 hover:decoration-blue-400  "
            >
              {room.title}
            </p>
            </Link>
                  
                </div>
                
                <div className="flex">
                  <p className="Time ml-auto">{calculateElapsedTime(room)}</p>
                </div>
               
                <div className="flex">
                  <a className="mr-auto text-blue-400" href="/Login">{room.authorname}</a>
                  <div className="text-right flex gap-2">
                    <p>{room.phone}</p>
                    <button> Nhắn tin </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '96%', height: '1px', backgroundColor: 'pink' }} className="mb-2 mx-auto"></div>
        </div>
      ))) : (null)}

    </div>


  )
}

export default memo(List2)