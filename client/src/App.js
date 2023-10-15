import { Routes, Route } from 'react-router-dom';
import { Login, Main, Home,Productdetails,Register,Post,PostNew,NewsManager,ProFile,Payment} from '../../client/src/pages/public';
import { path } from '../../client/src/ultils/constants';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path={path.PRODUCT} element={<Productdetails />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />
        </Route>
        <Route path={path.POST} element={<Post/>} >
        <Route index element={<PostNew />} />
        <Route path={path.NEWSMANAGER} element={<NewsManager />} />
        <Route path={path.PROFILE} element={<ProFile />} />
        <Route path={path.PAYMENT} element={<Payment />} />
          </Route>
        
      </Routes>
    </div>
  );
}

export default App;

