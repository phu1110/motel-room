import React, { memo, useEffect, useState } from 'react';
import { getPost } from '../api/api';
import { image } from '../api/URL';

const List2 = ({ link, miPrice, maPrice, miArea, maArea, cate }) => {
  const [page, setPage] = useState(1);
  const [pagesize, setPageSize] = useState(4);
  const [roomList, setRoomList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [minPrice, setminPrice] = useState(miPrice);
  const [maxPrice, setmaxPrice] = useState(maPrice);
  const [minArea, setminArea] = useState(miArea);
  const [maxArea, setmaxArea] = useState(maArea);
  const [category, setcategory] = useState(cate);
  const loadPostNormal = async (hireState, statusState, minPrice, maxPrice, minArea, maxArea, category, isVip, sortBy, isAscending, pageNumber, pageSize) => {
    await getPost(hireState, statusState, minPrice, maxPrice, minArea, maxArea, category, isVip, sortBy, isAscending, pageNumber, pageSize)
    .then(apiData => {
        setRoomList(apiData.data.post);
        setTotalCount(apiData.data.total);
        console.log(apiData);
    })
  }
  useEffect(() => {
    const hireState = 'Chưa Được Thuê';
    const statusState = 'Đã Duyệt';
    const isVip = 'Hạng Thường';
    const sortBy = 'dateCreated';
    const isAscending = true;
    const pageNumber = page;
    const pageSize = pagesize;
    loadPostNormal(hireState, statusState, minPrice, maxPrice, minArea, maxArea, category, isVip, sortBy, isAscending, pageNumber, pageSize);
  }, []);
  return (
    <div>
      {Array.isArray(roomList) && roomList.length > 0 ? 
      (roomList.map((room) => (
        <div key={room.id}>
          <div className="Product static flex gap-4 my-4">
            <div className="images w-[170px] pl-[5px] relative">
              <a href={link}> {/* Sử dụng thẻ <a> để tạo liên kết */}
              {room.actualFile ? (<img
                  src={`${image}/${room.actualFile}`}
                  className="border border-black object-cover rounded-lg h-[160px] "
                  alt="Biểu trưng ABC Corp"
                />):(<div className="w-full h-full bg-gray-300"></div>)}
                
              </a>
              <span className="group absolute bottom-0 right-0 p-2 transition-colors duration-300"></span>
            </div>
            <div className="w-[550px] ">
              <div className="w-full pr-[15px]">
                <div className="flex items-center justify-center h-full">
                  <a
                    href={link}
                    className="text-pink-400 decoration-black-600 hover:decoration-blue-400  cursor-pointer"
                  >
                    {room.title}
                  </a>
                </div>
                <div className="flex items-center justify-between gap-2 pl-[2px]">
                  <p className="price text-sky-400 "> {room.price}</p>
                  <p className="acreage"> {room.area}m2 </p>
                  <p className="address  decoration-black-600 hover:decoration-blue-400 cursor-ponter">
                    {room.address}
                  </p>
                </div>
                <div className="flex">
                  <p className="Time ml-auto">{room.formattedDatecreated}</p>
                </div>
                <p className="text-gray-400">
                  {room.description}
                </p>
                <div className="flex">
                  <a className="mr-auto text-blue-400" href="/Login">{room.authorname}</a>
                  <div className="text-right">
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