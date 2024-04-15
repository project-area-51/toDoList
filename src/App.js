
import './App.css';
import Loginform from './Components/Assests/Loginform/Loginform';
// import Dashboard from './Dashboard';
// import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Userpage from './userPage/Userpage';
function App() {
  return (
    <div className="App">
    <Loginform/>
    <Userpage/>

    {/* <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dashboard/>}></Route>
    <Route path="/Dashboard" element={<Loginform/>}></Route>
    </Routes>
      </BrowserRouter> */}

    </div>
  );
}

export default App;
