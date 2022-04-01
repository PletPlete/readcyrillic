import './App.css';
import ReadingSyl from './components/ReadingSyl';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import UchiAzbuka from './components/Azbuka';
import ParviDumiCvqt from './components/Dumi';

function App() {
  return (
    <div>
    <Router>
      <nav className='Nav'>
      <Link to="/Bukvi">Букви</Link>
        <Link to="/Srichki">Срички</Link>
        <Link to="/Dumi">Думи</Link>
      </nav>
      <Routes>
      <Route path='/Bukvi' element={<UchiAzbuka />}> </Route>
        <Route path='/Srichki' element={<ReadingSyl />}> </Route>
        <Route path='/Dumi' element={<ParviDumiCvqt />}> </Route>
        <Route path='/' element={<ReadingSyl />}></Route>
       
      </Routes>
    </Router>
      
    
        
    </div>
  );
}

export default App;
