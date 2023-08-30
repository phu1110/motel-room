import { Routes, Route } from 'react-router-dom';
import { Login, Main, Home,Productdetails,Register,Post,PostNew } from '../../client/src/containers/public';
import { path } from '../../client/src/ultils/constants';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          {/* Hiển thị cả header và main khi vào trang home */}
          <Route index element={<Main />} />
          <Route path={path.PRODUCT} element={<Productdetails />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />
        </Route>
        <Route path={path.POST} element={<Post/>} >
        <Route index element={<PostNew />} />
          </Route>
        
      </Routes>
    </div>
  );
}

export default App;

