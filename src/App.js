import './App.css';
import Header from './components/header/Header';
import Login from './components/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useToken from './middlewares/useToken';


function App() {
  const { token, setToken } = useToken();

  return (
    <div className='App'>
      <div className='page'>
        <div className='content'>
          <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' exact={true} element={<Login token={token} setToken={setToken}/>} />
          </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
