import { Routes, Route } from 'react-router-dom';
import { Login, Main, Home } from '../../client/src/containers/public';
import { path } from '../../client/src/ultils/constants';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          {/* Hiển thị cả header và main khi vào trang home */}
          <Route index element={<Main />} />
          <Route path={path.LOGIN} element={<Login />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;

