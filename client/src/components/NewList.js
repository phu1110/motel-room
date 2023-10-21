import React, { memo, useEffect, useState } from 'react';
import { getPost } from '../api/api';
import { image } from '../api/URL';

export const NewList = ({images,title,price,date}) => {
  const [page, setPage] = useState(1);
  const [pagesize, setPageSize] = useState(10);
  const [roomList, setRoomList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const loadPostRecent = async (hireState, statusState, minPrice, maxPrice, minArea, maxArea, category, isVip, sortBy, isAscending, pageNumber, pageSize) => {
    await getPost(hireState, statusState, minPrice, maxPrice, minArea, maxArea, category, isVip, sortBy, isAscending, pageNumber, pageSize)
      .then(apiData => {
        setRoomList(apiData.data.post);
        setTotalCount(apiData.data.total);
      })
  }
  useEffect(() => {
    const hireState = 'Chưa Được Thuê';
    const statusState = 'Đã Duyệt';
    const isVip = null;
    const sortBy = 'newList';
    const isAscending = false;
    const minPrice = null;
    const maxPrice = null;
    const minArea = null;
    const maxArea = null;
    const category = null;
    const pageNumber = page;
    const pageSize = pagesize;
    loadPostRecent(hireState, statusState, minPrice, maxPrice, minArea, maxArea, category, isVip, sortBy, isAscending, pageNumber, pageSize);
  }, []);
  return (
    <div>
      <h2 className="text-center text-xl font-bold my-4">Tin mới đăng</h2>
      {Array.isArray(roomList) && roomList.length > 0 ? (roomList.map((room) => (
        <div key={room.id}>
          <div className="grid grid-cols gap-2 mx-2">
            <div className="flex items-center rounded-lg justify-center gap-2">
            {room.actualFile ? (<img
                  src={`${image}/${room.actualFile}`}
                  className="w-[65px] h-[65px] rounded-lg"
                  alt="prasetamon"
                />):(<div className="w-[65px] h-[65px] bg-gray-300"></div>)}
              <div className="Content p-2">
                <a href="/Product" className=" text-blue-400 hover:text-pink-500">
                  {room.title}
                </a>
                <div className="flex grid grid-cols items-center">
                  <p className="text-black-500 text-sm">Giá: {room.price}</p>
                  <p className="text-black-500 text-sm">Ngày đăng: {room.formattedDatecreated}</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '88%', height: '1px', backgroundColor: 'black' }} className="mb-2 mx-auto"></div>
        </div>
      ))) : (null)}
    </div>
  )
}
export default memo(NewList)