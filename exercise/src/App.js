
import './App.css';
import Post from './Post';
import Header from './Header';
import {Route, Routes} from "react-router-dom";
import Layout from './Layout';
import IndexPage from './page/IndexPage';
import LoginPage from './page/LoginPage';
import RegisterPage from './page/RegisterPage';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<IndexPage/>}/>
      <Route path={'/login'} element={<LoginPage/>}/>
      <Route path={'/register'} element={<RegisterPage/>}/>
      </Route>
    </Routes>

  );
}

export default App;
