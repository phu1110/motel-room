import React, { useCallback} from 'react';
import { path } from '../../ultils/constants';
import logo from '../../assets/images/logo-phongtro.svg';
import { useNavigate } from 'react-router-dom';
import icons from '../../ultils/icons';
import { Button } from '../../components';
import '../../assets/css/style.css';
const { AiOutlinePlusCircle } = icons;
const Header = ({ isHidden }) => {
  const navigate = useNavigate();
  const goLogin = useCallback(() => {
    navigate(path.LOGIN);
  }, [navigate]);
  const goRegister = useCallback(() => {
    navigate(path.REGISTER);
  }, [navigate]);
  const goPost = useCallback(() => {
    navigate(path.POST);
  }, [navigate]);
  const goHome = useCallback(() => {
    navigate('/');
  }, [navigate]);
  
  return (
    <div >
      <div className="header w-1100">
      <div className='w-full flex items-center justify-between bg-primary'>
      <p
      className="w-[240px] h-[70px] flex items-center text-3xl italic justify-center cursor-pointer "
      onClick={goHome}
    >
      Trọ Tốt
    </p>
        <div className='flex items-center gap-1'>
          <small>Tìm kiếm vui vẻ - Thuê trọ chất lượng, giá hợp lý!</small>
          <Button text={'Đăng nhập'} textColor='text-white' bgColor='bg-[#3961fb]' onClick={goLogin}></Button>
          <Button text={'Đăng kí'} textColor='text-white' bgColor='bg-[#3961fb]' onClick={goRegister}></Button>
          <Button text={'Đăng tin mới'} textColor='text-white' bgColor='bg-[#F73859]' BsPlus={AiOutlinePlusCircle} onClick={goPost}></Button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header