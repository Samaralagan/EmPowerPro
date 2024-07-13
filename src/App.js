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
import AttendancePage from './pages/AttendancePage.jsx';
import LeavePage from './pages/LeavePage.jsx'
import ApplyLeaveForm from './components/LeaveComponent/ApplyLeaveForm.jsx'
import BeneficiaryPage from './pages/BeneficiaryPage.jsx'
import AppliedClaim from './components/BeneficiaryComponent/AppliedClaimForm.jsx'
import CancelledClaim from './components/BeneficiaryComponent/CanceledClaimForm.jsx'


import ApplyForm_1 from './components/BeneficiaryComponent/ApplyClaim_1.jsx'
import ApplyForm_2 from './components/BeneficiaryComponent/ApplyClaim_2.jsx'
import ApplyForm_3 from './components/BeneficiaryComponent/ApplyClaim_3.jsx'

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
              <Route path="/Leave" element={<LeavePage/>} />
              <Route path="/Pay Roll" element={<SideBar />} />
              <Route path="/Complaints" element={<SideBar />} />
              <Route path="/Training" element={<TrainingPage />} />
              <Route path="/Beneficiary" element={<BeneficiaryPage />} />

              <Route path="/Apply-leave" element={<ApplyLeaveForm/>} />
              <Route path="/Applied-claim" element={<AppliedClaim/>} />
              <Route path="/Canceled-claim" element={<CancelledClaim/>} />

              <Route path="/ApplyClaim-1" element={<ApplyForm_1/>} />
              <Route path="/ApplyClaim-2" element={<ApplyForm_2/>} />
              <Route path="/ApplyClaim-3" element={<ApplyForm_3/>} />
              






           
             

              
           </Routes>
         </div>
       </Router>
  );
}

export default App;
