import React, { memo,useEffect, useState } from 'react';
import axios from 'axios';
import { getPost } from '../api/api';
import { image } from '../api/URL';

const List = ({ images, link, content, description, price, acreage, address, time, phone }) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [roomList, setRoomList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [hireState, setHireState] = useState(null);
  const [statusState, setstatusState] = useState(null);
  const [minPrice, setminPrice] = useState(null);
  const [maxPrice, setmaxPrice] = useState(null);
  const [minArea, setminArea] = useState(null);
  const [maxArea, setmaxArea] = useState(null);
  const [category, setcategory] = useState(null);
  const [isVip, setisVip] = useState(null);
  const [sortBy, setsortBy] = useState(null);
  const [isAscending, setAscending] = useState(null);
  const loadPostVip = async () => {
    const vipData = {
      hireState : 'Chưa Được Thuê',
      statusState : 'Đã Duyệt',
      isVip : 'Hạng Vip',
      sortBy: 'dateCreated',
      isAscending : true,
      minPrice : 0,
      maxPrice: 0,
      minArea: 0,
      maxArea: 0,
      category: 0,
      pageNumber: page,
      pageSize: pageSize
    };
    setHireState('Chưa Được Thuê');
    setstatusState('Đã Duyệt')
    setminPrice(null);
    setmaxPrice(null);
    setminArea(null);
    setmaxArea(null);
    setcategory(null);
    setisVip('Hạng Vip');
    setsortBy('dateCreated');
    setAscending(true);
    await getPost(hireState, statusState, minPrice, maxPrice, minArea, maxArea, category, isVip, sortBy, isAscending, page, pageSize)
    .then(apiData => {
        setRoomList(apiData.data.post);
        setTotalCount(apiData.data.total);
        console.log(apiData);
    })
}
useEffect(() => {
  loadPostVip();
}, [hireState, statusState, minPrice, maxPrice, minArea, maxArea, category, isVip, sortBy, isAscending, page, pageSize]);
  return (
    <div>
    {roomList.map((room) => (
      <div key={room.id}>
        <div className="Product static flex flex-col lg:flex-row lg:justify-start my-8 border border-gray-400 rounded-lg ">
      <div className="lg:w-[280px] relative">
        <p>
        <div className="border border-black object-cover rounded-lg h-[160px]">
  {room.actualFile ? (
    <img
      src={`${image}/${room.actualFile}`}
      className="w-full h-full"
      alt="Biểu trưng ABC Corp"
    />
  ) : (
    <div className="w-full h-full bg-gray-300"></div> // Hoặc bạn có thể thay thế bằng lớp CSS tùy chỉnh
  )}
</div>

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
              {room.title}
            </a>
          </div>
          <div className="flex items-center justify-between gap-2 pl-[2px]">
            <p className="price text-sky-400"> {room.price}</p>
            <p className="acreage"> {room.area}m2 </p>
            <p className="address decoration-black-600 hover:decoration-blue-400 cursor-pointer">
              {room.address}
            </p>
          </div>
          <div className="hidden lg:flex">
            <p className="Time ml-auto">{room.formattedDatecreated}</p>
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
            <p className="text-gray-400">{room.description}</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <p className="mt-2 lg:mt-0 lg:mr-auto text-blue-400" >
             {room.authorname}
            </p>
            <div className="text-right">
              <p>{room.phone}</p>
              <button className="mt-2 lg:mt-0">Nhắn tin</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    ))}
  </div>
  );
};

export default memo(List);
