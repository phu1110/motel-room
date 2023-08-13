import {Routes,Route} from 'react-router-dom'
import {Login,Home,Main} from '../../client/src/containers/public'
import {path} from '../../client/src/ultils/constants'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={path.HOME} element={<Home/>}>
        <Route path={path.MAIN} element={<Main/> }/>
        <Route path={path.LOGIN} element={<Login/> }/>
        </Route>
      </Routes>
      </div>
  );
}

export default App;
