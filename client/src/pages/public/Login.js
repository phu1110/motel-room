import React, { useState } from 'react';
import { InputForm } from '../../components';
import axios from 'axios';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gửi yêu cầu POST để đăng nhập
    axios
      .post('https://localhost:7199/api/User/get-all-user', {
        username: phone, // Trong trường hợp này, phone là tên người dùng
        password: password,
      })
      .then((response) => {
        const token = response.data.token;

        // Lưu token vào Local Storage hoặc Session Storage
        localStorage.setItem('token', token);

        // Xử lý đăng nhập thành công (ví dụ: chuyển hướng)
        // Sau khi đăng nhập thành công, bạn có thể thực hiện các hành động cần thiết
      })
      .catch((error) => {
        console.error('Lỗi khi đăng nhập:', error);
        setErrorMessage('Số điện thoại hoặc mật khẩu không đúng');
      });
  };

  return (
    <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
      <h3 className='font-semibold text-2xl mb-3'> Đăng nhập</h3>
      <form className='w-full flex flex-col gap-3' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='phone'>Số điện thoại:</label>
          <InputForm
            type='text'
            id='phone'
            value={phone}
            onChange={handlePhoneChange}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Mật khẩu:</label>
          <InputForm
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type='submit' className='bg-secondary text-white'>
          Đăng nhập
        </button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <div className='mt-7 flex items-center justify-between'>
        <small className='text-[blue] hover:text-[red] cursor-pointer'>
          Bạn quên mật khẩu
        </small>
        <small className='text-[blue] hover:text-[red] cursor-pointer'>
          Đăng kí tài khoản mới
        </small>
      </div>
    </div>
  );
};

export default Login;
