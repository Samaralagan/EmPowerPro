import './App.css';
import "react-bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import 'react-icons'
import HomePage from './pages/HomePage.jsx'
import Vacancy_Apply_Form from './components/common/VacancyApplyForm.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SideBar from './components/common/SideBar.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrainingPage from './pages/TrainingPage.jsx';
import ComplaintsPage from './pages/ComplaintsPage.jsx';

function App() {
  return (
    <Router>
      <div className="App">
         <Routes>
       {/* <Vacancy_Apply_Form/> */}    
              <Route path="/" element={<HomePage/>} />
              <Route path="/Login" element={<LoginPage/>} />
              <Route path="/Dash Board" element={<SideBar />} />
              <Route path="/Attendance" element={<SideBar />} />
              <Route path="/Project" element={<SideBar />} />
              <Route path="/Leave" element={<SideBar />} />
              <Route path="/Pay Roll" element={<SideBar />} />
              <Route path="/Complaints" element={<ComplaintsPage/>} />
              <Route path="/Training" element={<TrainingPage />} />
           </Routes>
         </div>
       </Router>
  );
}

export default App;
