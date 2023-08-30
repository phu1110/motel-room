import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/style.css';
const Navigation = () => {
  
  const navigate = useNavigate();
  const goHome = useCallback(() => {
    navigate('/');
  }, [navigate]);
 
  return (
    <div className='navbar bg-cyan-600 w-full' >
      <div className=' md:px-20'>
        <nav className='flex items-center justify-start h-16'>
          <div className='flex items-center'>
            <p className='text-white text-lg font-semibold mr-[20px] cursor-pointer' onClick={goHome}>Trang Chủ</p>
          </div>
          <div className=' md:flex space-x-4'>
            <p className='text-white hover:text-pink-400 transition-colors cursor-pointer'>Thuê Trọ</p>
            <p className='text-white hover:text-pink-400 transition-colors cursor-pointer'>Thuê Căn Hộ</p>
            <p className='text-white hover:text-pink-400 transition-colors cursor-pointer'>Thuê Chung Cư</p>
            <p className='text-white hover:text-pink-400 transition-colors cursor-pointer'>Thuê Nhà Nguyên Căn</p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
