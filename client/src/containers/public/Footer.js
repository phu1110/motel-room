import React,{useCallback} from "react";
import icons from "../../ultils/icons";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
const { FiMapPin, AiOutlineMail,BsTelephoneInbound,AiOutlineSearch,BsFacebook,BsYoutube,BsInstagram} = icons;
const Facebook = styled(BsFacebook)`
  color: #0073CF;
  font-size: 40px;
  transition: color 0.3s;
  &:hover {
    color: black; // Thay đổi màu khi hover
  }
`;
const Youtube = styled(BsYoutube)`
  color: red;
  font-size: 45px;
  &:hover {
    color: black; // Thay đổi màu khi hover
  }
`;
const Instagram = styled(BsInstagram)`
  background: linear-gradient(to bottom, #002296, #82008f, #C0007A, #EA0c5F, #ff5341, #ff8820, #f6ba00);
  color: white;
  border-radius:14px;
  font-size: 45px;

  &:hover {
    color: black;
    background: white;
  }
`;

const Map = styled(FiMapPin)`
  color: pink;
  font-size: 20px;
  &:hover {
    color: purple; // Thay đổi màu khi hover
  }
`;
const Email = styled(AiOutlineMail)`
  color: pink;
  font-size: 20px;
  &:hover {
    color: purple; // Thay đổi màu khi hover
  }
`;
const Phone = styled(BsTelephoneInbound)`
  color: pink;
  font-size: 20px;
  &:hover {
    color: purple; // Thay đổi màu khi hover
  }
`;
const Search = styled(AiOutlineSearch)`
  color: pink;
  font-size: 20px;
  &:hover {
    color: purple; // Thay đổi màu khi hover
  }
`;

const Footer = () => {
  const navigate = useNavigate()
  const goHome = useCallback(() => {
    navigate('/');
  }, [navigate]);
  return (
    <div className="border border-solid w-full">
      <div className="w-full h-[400px] flex justify-evenly ">
        <div className="about ml-[50px]">
          <div>
            <h2 className="font-sans text-3xl m-[20px]"> Thông Tin Liên Hệ</h2>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Map />
                <p className="w-[200px] text-xl address">
                  80 Mai Anh Đào, Phường 8, Thành Phố Đà Lạt, Tỉnh Lâm Đồng
                </p>
              </div>
              <div className="flex gap-2">
                <Email />
                <p className="text-xl">phu3365@gmail.com</p>
              </div>
              <div className="flex gap-2">
                <Phone />
                <p className="text-xl">0797878315</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex grid grid-cols-1 items-center">
        <div className="search">
        <div>
          <div>
            <h2 className="font-sans text-3xl m-[20px]"> Tìm Kiếm Trọ</h2>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Search />
                <p className="cursor-pointer hover:text-red-500 text-xl" onClick={goHome}> Trọ cho thuê</p>
              </div>
              <div className="flex gap-2">
              <Search />
              <p className="cursor-pointer hover:text-red-500 text-xl" onClick={goHome}>Căn hộ cho thuê</p>
              </div>
              <div className="flex gap-2" onClick={goHome}>
              <Search />
                <p className="cursor-pointer hover:text-red-500 text-xl" >Homestay cho thuê</p>
              </div>
              <div className="flex gap-2">
              <Search />
                <p className="cursor-pointer hover:text-red-500 text-xl" onClick={goHome}>Thuê nhà nguyên căn</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="about mr-[50px] ">
          <div>
            <p className="font-sans text-xl m-[20px]"> Theo Dõi Chúng Tôi</p>
          </div>
          <div className=" flex items-center space-x-4 ml-[25px]">
              <div className="facebook ">
                <Facebook />
              </div>
              <div className="instagram">
                <Instagram />
                
              </div>
              <div className="youtube">
                <Youtube />
              
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
