import React from 'react';
import avatar from '../../assets/images/avatar.jpg';

const InfoUser = () => {
  const userData = {
    avatar: avatar,
    name: 'John Doe',
    userId: '123456',
    accountBalance: '$500.00'
  };

  return (
    <div className='w-[300px] h-full'>
      <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-md h-full bg-[#f8f9fa]">
        <img className="w-20 h-20 rounded-full mb-4" src={userData.avatar} alt="User Avatar" />
        <p className="text-lg font-semibold">{userData.name}</p>
        <p className="text-gray-600 mb-2">ID: {userData.userId}</p>
        <p className="text-green-500 font-semibold text-xl">{userData.accountBalance}</p>
        <button className="w-full px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          Nạp tiền
        </button>
        <button className="w-full px-4 py-2 mt-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
          Đăng tin
        </button>
        <div className="flex flex-col items-start gap-3 w-full mt-4">
          <div className='hover:bg-gray-200 hover:w-full transition-colors'>
          <button className="px-3 py-3  text-gray-600 ">
            Quản Lý Tin
          </button>
          </div>
          <div className='hover:bg-gray-200 hover:w-full transition-colors'>
          <button className="px-3 py-3  text-gray-600 ">
            Sửa Thông Tin Cá Nhân
          </button>
          </div>
          
         <div className='hover:bg-gray-200 hover:w-full transition-colors'>
         <button className="px-3 py-3  text-gray-600  ">
            Lịch Sử Nạp
          </button>
         </div>
         <div className='hover:bg-gray-200 hover:w-full transition-colors'>
         <button className="px-3 py-3  text-gray-600  ">
            Liên Hệ
          </button>
         </div>
          <div className='hover:bg-gray-200 hover:w-full transition-colors'>
          <button className="px-3 py-3  text-gray-600  ">
            Thoát
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoUser;
    