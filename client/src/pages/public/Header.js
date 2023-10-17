import React, { useCallback,useState} from 'react';
import { path } from '../../ultils/constants';
import { useNavigate } from 'react-router-dom';
import icons from '../../ultils/icons';
import { Button,Dropdown } from '../../components';
import '../../assets/css/style.css';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react'; 
const Header = () => {
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
  const {loginContext,user} = useContext(UserContext);
  return (
    <div className='w-full'>
      <div className="header ">
      <div className='w-full flex items-center justify-between bg-primary'>
      <p
      className="w-[240px] h-[70px] flex items-center text-3xl italic justify-center cursor-pointer "
      onClick={goHome}>
      Trọ Tốt
    </p>
        <div className='flex items-center gap-1'>
          <small>Tìm kiếm vui vẻ - Thuê trọ chất lượng, giá hợp lý!</small>
          { user && user.auth === true  
           ?<Dropdown/>:
           <Button text={'Đăng nhập'} textColor='text-white' bgColor='bg-[#3961fb]' onClick={goLogin}></Button>

          }
          {/* <Button text={'Đăng kí'} textColor='text-white' bgColor='bg-[#3961fb]' onClick={goRegister}></Button> */}
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default Header