import React,{useCallback} from 'react'
import logo from '../../assets/images/logo-phongtro.svg'
import icons from '../../ultils/icons'
import { Button } from '../../components'
import { useNavigate } from 'react-router-dom'
import { path } from '../../ultils/constants'
const { AiOutlinePlusCircle } = icons
const Header = () => {
  const navigate = useNavigate()
  const goLogin = useCallback(() => {
    navigate(path.LOGIN);
  }, []);
  const goHome = useCallback(() => {
    navigate('/');
  }, [navigate]);
  return (
    <div className='w-1100'>
      <div className='w-1100 flex items-center justify-between border border-red-500 bg-primary'>
      <img
        className='w-[240px] h-[70px] object-container'
        src={logo}
        alt='logo'
        onClick = {goHome}
      />
      <div className='flex items-center gap-1'>
        <small>Tìm kiếm vui vẻ - Thuê trọ chất lượng, giá hợp lý!</small>
        <Button text={'Đăng nhập'} textColor='text-white' bgColor='bg-[#3961fb]' onClick={goLogin}></Button>
        <Button text={'Đăng kí'} textColor='text-white' bgColor='bg-[#3961fb]' onClick={goLogin}></Button>
        <Button text={'Đăng tin mới'} textColor='text-white' bgColor='bg-[#F73859]' BsPlus={AiOutlinePlusCircle}></Button>
      </div>
    </div>
    </div>
  )
}

export default Header