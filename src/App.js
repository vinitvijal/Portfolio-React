import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './Curve.css'
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import {analytics} from './firebase'






function App() {
  
  console.log(analytics)
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resume' element={<Resume/>}/>
        
      </Routes>
    </Router>
  );
}



export default App;
