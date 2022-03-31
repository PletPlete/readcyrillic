import './App.css';
import ReadingSyl from './components/ReadingSyl';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import UchiAzbuka from './components/Azbuka';

function App() {
  return (
    <div>
    <Router>
      <nav className='Nav'>
      <Link to="/Bukvi">Букви</Link>
        <Link to="/Srichki">Срички</Link>
      </nav>
      <Routes>
      <Route path='/Bukvi' element={<UchiAzbuka />}> </Route>
        <Route path='/Srichki' element={<ReadingSyl />}> </Route>
        <Route path='/' element={<ReadingSyl />}></Route>
       
      </Routes>
    </Router>
      
    
        
    </div>
  );
}

export default App;
