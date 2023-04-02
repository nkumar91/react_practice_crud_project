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
function App() {
  return (
   <>
    <Router>
      <Main>
      <Routes>
        <Route path='/' element={<Login />}></Route>
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
