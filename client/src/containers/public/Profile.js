import React from 'react'
import avatar from '../../assets/images/avatar.jpg';
const Profile = () => {
  const userData = {
    avatar:avatar,
    name: 'John Doe',
    userId: '123456',
    accountBalance: '$500.00',
    phone: '0797878315',
  };
  return (
    <div className='flex min-h-screen flex-col  bg-white p-16'>
      <h1 className="text-3xl font-bold text-black">Sửa Thông Tin</h1>
      <div className="w-full rounded-xl bg-white p-4 shadow-2xl shadow-white/40">
        <div className="mb-4 grid grid-cols-1 gap-4">
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Tên Khách Hàng</label>
            <input type="text" id="text" className=" placeholder:text-black bg-gray-400 w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
              placeholder={userData.name}
              readOnly={true} />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Số Điện Thoại</label>
            <input type="text" id="text" className=" placeholder:text-black bg-gray-400 w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40"
              placeholder={userData.phone}
              readOnly={true} />
          </div>
          <div className="mb-4 flex flex-col">
          <label className="mb-2 font-semibold">Email address</label>
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-2 top-2 h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
            </svg>
            <input type="email" id="text" className="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 pl-8 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
          </div>
        </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Địa Chỉ</label>
            <input type="text" id="text" className="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Mật Khẩu</label>
            <input type="text" id="text" className="w-full max-w-lg rounded-lg border border-slate-200 px-2 py-1 hover:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/40 active:ring active:ring-blue-500/40" />
          </div>
        </div>
        <div className="py-3 center mx-auto">
    <div className="bg-white px-4 py-5 rounded-lg shadow-lg text-center w-48">
      <div className="mb-4">
        <img className="w-auto mx-auto rounded-full object-cover object-center" src={avatar} alt="Avatar Upload" />
      </div>
      <label className="cursor-pointer mt-6">
        <span className="mt-2 text-base leading-normal px-4 py-2 bg-blue-500 text-white text-sm rounded-full" >Select Avatar</span>
        <input type='file' className="hidden"/>
      </label>
    </div>
  </div>
        <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white">
          Hover me!
          <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </div>
    </div>


  )
}

export default Profile