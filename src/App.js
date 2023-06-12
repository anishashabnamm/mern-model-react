import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PublicHolidays from './components/publicHolidays';

function App() {
  return (
    <div className="App">
      <Router>
        <h2>HOME</h2>
        <ul className='nav'>
          <li><Link to='/'>Public Holidays</Link></li>
        </ul>
        <Routes>
          <Route exact path='/' element={<PublicHolidays />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
