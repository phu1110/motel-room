// src/components/Navbar.js
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {path} from '../../ultils/constants';

function Navbar() {
  const navigate = useNavigate();
  const goProduct = useCallback(() => {
    navigate(path.product); // Sử dụng navigate để chuyển đến trang khác
    setIsDropdownOpen(false); // Đóng menu sau khi chuyển trang
  }, [navigate]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Hàm xử lý khi cửa sổ thay đổi kích thước
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Đóng menu khi kích thước cửa sổ lớn hơn hoặc bằng 768px
        setIsDropdownOpen(false);
      }
    };

    // Đăng ký sự kiện resize
    window.addEventListener("resize", handleResize);

    // Giải phóng sự kiện khi component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-[#1266dd] ">
      <div className="container mx-auto flex  gap-5 justify-start items-center">
        <div className="text-white font-semibold text-xl">Trang Chủ</div>
        <div className="hidden md:block">
          <ul className="space-x-4 flex ">
            <li className="inline hover:bg-red-600 p-4">
              <button onClick={goProduct} className="menu-item text-white  cursor-pointer">
                Thuê Trọ
              </button>
            </li>

            <li className="inline hover:bg-red-600 p-4">
              <button onClick={goProduct} className="menu-item text-white  cursor-pointer">
                Thuê Nhà Nguyên Căn
              </button>
            </li>

            <li className="inline hover:bg-red-600 p-4">
              <button onClick={goProduct} className="menu-item text-white  cursor-pointer">
                Thuê Căn Hộ
              </button>
            </li>
          </ul>
        </div> 
        <div className="md:hidden">
          <button
            className="relative text-white hover:text-gray-400 focus:outline-none"
            onClick={toggleDropdown}
          >
            Menu
          </button>
          {isDropdownOpen && (
            <ul className="absolute mt-2 bg-cyan-400 text-white">
              <li className="py-2 px-4 hover:bg-cyan-700">
                <p onClick={goProduct} className="menu-item cursor-pointer">
                  Thuê Trọ
                </p>
              </li>
              <li className="py-2 px-4 hover:bg-cyan-700">
                <p onClick={goProduct} className="menu-item cursor-pointer">
                  Thuê Căn Hộ
                </p>
              </li>
              <li className="py-2 px-4 hover:bg-cyan-700">
                <p onClick={goProduct} className="menu-item cursor-pointer">
                  Thuê Nhà Nguyên Căn
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
