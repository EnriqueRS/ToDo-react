import './App.css';
import Header from './Header';
import Login from './Login';
import Private from './Private';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='page'>
        <div className='content'>
          <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' exact={true} element={<Login/>} />
            <Route path='/private' exact={true} element={<Private/>} />
          </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
