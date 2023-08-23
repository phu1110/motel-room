import React from 'react'
import {Button, InputForm} from '../../components'

const Register = () => {
  return (
    <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
      <h3 className='font-semibold text-2xl mb-3'> Đăng Kí</h3>
      <div className='w-full flex flex-col gap-3'>
        <InputForm label={'Số điện thoại'}/>
        <InputForm label={'Mật khẩu'}/>
        <InputForm label={'Địa Chỉ'}/>
        <Button
      text={'Đăng Kí'}
      bgColor={'bg-secondary'}
      textColor={'text-white'}
      fullWidth
      />
      </div>
      <div className='mt-7 flex items-center justify-between'>
        <small className='text-[blue] hover:text-[red] cursor-pointer'>Quên Mật Khẩu</small>
        <small className='text-[blue] hover:text-[red] cursor-pointer'>Trang Đăng Nhập</small>
      </div>
    </div>
  )
}

export default Register