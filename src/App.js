import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css'; 
import './App.css';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import NotFound404 from './components/NotFound/NotFound404';
import Dashboard from './components/Dashboard/Dashboard';
import Main from './context/Main';
import UseReducer from './components/UseReducer/UseReducer';
import Code from './components/CodeSplit/Code';
import FileUpload from './components/FileUpload/FileUpload';
function App() {
  return (
   <>
    <Router>
      <Main>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/code' element={<Code />}></Route>
        <Route path='/file' element={<FileUpload />}></Route>
        <Route path='/reducer' element={<UseReducer />}></Route>
        <Route path='/signup' element = {<Signup />}></Route>
        <Route path='/dashboard' element = {<Dashboard />}></Route>
        <Route path='*' element = {<NotFound404 />}></Route>
      </Routes>
      </Main>
    </Router>
   </>
  );
}

export default App;
