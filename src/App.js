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
import ComplaintsPage_Tl from './pages/ComplaintsPage_Tl.jsx';
import AttendancePage from './pages/AttendancePage.jsx';
import Complaintsmore from './components/ComplaintsComponent/Complaintsmore.jsx';
import NewComplaint from './components/ComplaintsComponent/NewComplaint.jsx';
import LeavePage from './pages/LeavePage.jsx';
function App() {
  return (
    <Router>
      <div className="App">
         <Routes>
       {/* <Vacancy_Apply_Form/> */}    
              <Route path="/" element={<HomePage/>} />
              <Route path="/Login" element={<LoginPage/>} />
              <Route path="/Dash Board" element={<SideBar />} />
              <Route path="/Attendance" element={<AttendancePage />} />
              <Route path="/Project" element={<SideBar />} />
              <Route path="/Leave" element={<LeavePage />} />
              <Route path="/Pay Roll" element={<SideBar />} />
              <Route path="/Complaints" element={<ComplaintsPage_Tl/>} />
              <Route path="/NewComplaint" element={<NewComplaint/>} />
              <Route path="/Complaintsmore" element={<Complaintsmore/>} />
              <Route path="/Training" element={<TrainingPage />} />
              <Route path="/Beneficiary" element={<SideBar />} />
           </Routes>
         </div>
       </Router>
  );
}

export default App;
