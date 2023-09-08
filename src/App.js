
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';



function App() {



  return (
    <>
   
       <Router>
         <Navbar />
        
            <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/general" element={<Home cat="general" />} />
                  <Route path="/business" element={<Home cat="business"/>} />
                  <Route path="/entertainment" element={<Home cat="entertainment"/>} />
                  <Route path="/health" element={<Home cat="health"/>} />
                  <Route path="/science" element={<Home cat="science"/>} />
                  <Route path="/sports" element={<Home cat="sports"/>} />
                  <Route path="/technology" element={<Home cat="technology"/>} />
            </Routes>
       </Router>
    </>
  );
}

export default App;
