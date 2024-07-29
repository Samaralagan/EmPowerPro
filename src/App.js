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
import ProjectPage from './pages/ProjectPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import Complaintsmore from './components/ComplaintsComponent/Complaintsmore.jsx';
import NewComplaint from './components/ComplaintsComponent/NewComplaint.jsx';
import LeavePage from './pages/LeavePage.jsx';
import SupplierPage from './pages/SupplierPage.jsx';
import ReplyComplaint from './components/ComplaintsComponent/ReplyComplaint.jsx';
import InquriesPage from './pages/InquriesPage.jsx';
import CreateUserPage from './pages/CreateUserPage.jsx';
import EmployeePage from './pages/EmployeePage.jsx';
import Employee from './components/employee/Employee.jsx';
import Profile from './components/employee/Profile.jsx';
import GenerateReport from './components/employee/GenerateReport.jsx';
import ApplyLeavePage from './components/LeaveComponent/ApplyLeave.jsx';
import LeaveHistory from './components/LeaveComponent/LeaveHistory.jsx';
import LeavePageHR from './components/LeaveComponent/LeaveHR.jsx'


function App() {
  const role = 'Employee';
  return (
    <Router>
      <div className="App">
         <Routes>
       {/* <Vacancy_Apply_Form/> */}    
              <Route path="/" element={<HomePage/>} />
              <Route path="/Login" element={<LoginPage/>} />

              <Route path="/Dash Board/Employee" element={<DashboardPage />} />
              <Route path="/Attendance/Employee" element={<AttendancePage />} />
              <Route path="/Project/Employee" element={<ProjectPage />} />
              <Route path="/Leave/Employee" element={<LeavePage />} />
              <Route path="/Leave/Employee/ApplyLeave" element={<ApplyLeavePage />} />
              <Route path="/Pay Roll/Employee" element={<SideBar />} />
              <Route path="/Complaints/Employee" element={<ComplaintsPage/>} />
              <Route path="/Complaints/Employee/NewComplaint" element={<NewComplaint/>} />
              <Route path="/Training/Employee" element={<TrainingPage />} />   
              <Route path="/Beneficiary/Employee" element={<Vacancy_Apply_Form/>} />
              
              <Route path="/Dash Board/TeamLeader" element={<SideBar />} />
              <Route path="/Attendance/TeamLeader" element={<SideBar />} />
              <Route path="/Project/TeamLeader" element={<ProjectPage />} />
              <Route path="/Leave/TeamLeader" element={<LeavePage />} />
              <Route path="/Leave/TeamLeader/ApplyLeave" element={<ApplyLeavePage />} />
              <Route path="/Pay Roll/TeamLeader" element={<SideBar />} />
              <Route path="/Complaints/TeamLeader" element={<ComplaintsPage/>} />
              <Route path="/ComplaintsPage_Tl_new/TeamLeader" element={<NewComplaint/>} />
              <Route path="/ComplaintsPage_Tl_reply/TeamLeader" element={<ReplyComplaint />} />
              <Route path='/Training/TeamLeader' element={<TrainingPage />} />
              <Route path="/Beneficiary/TeamLeader" element={<SideBar />} />
              <Route path="/Team members/TeamLeader" element={<EmployeePage/>} />
              <Route path="/Team members/TeamLeader/GenerateReport" element={<GenerateReport/>} />
              <Route path="/Team members/TeamLeader/Profile" element={<Profile/>} />

              <Route path="/Dash Board/Admin" element={<SideBar />} />
              <Route path="/Attendance/Admin" element={<SideBar />} />
              <Route path="/Leave/Admin" element={<LeavePage />} />
              <Route path="/Leave/Admin/ApplyLeave" element={<ApplyLeavePage />} />
              <Route path="/Pay Roll/Admin" element={<SideBar />} />
              <Route path="/Complaints/Admin" element={<ComplaintsPage/>} />
              <Route path='/Create User/Admin' element={<CreateUserPage />} />
              <Route path="/Inquires/Admin" element={<InquriesPage />} />
              <Route path="/Beneficiary/Admin" element={<SideBar />} />

              <Route path="/Dash Board/HR" element={<SideBar />} />
              <Route path="/Attendance/HR" element={<SideBar />} />
              <Route path="/Project/HR" element={<ProjectPage />} />
              <Route path="/Leave/HR" element={<LeavePageHR />} />
              <Route path="/Complaints/HR" element={<ComplaintsPage />} />
              <Route path="/Pay Roll/HR" element={<SideBar />} />
              <Route path="/Training/HR" element={<TrainingPage />} />
              <Route path="/Employees/HR" element={<SideBar />} />
              <Route path="/Jobs/HR" element={<SideBar />} />
              <Route path="/Beneficiary/HR" element={<SideBar />} />

              <Route path="/Dash Board/FinanceAndSupport" element={<SideBar />} />
              <Route path="/Attendance/FinanceAndSupport" element={<SideBar />} />
              <Route path="/Leave/FinanceAndSupport" element={<LeavePage />} />
              <Route path="/Leave/FinanceAndSupport/ApplyLeave" element={<ApplyLeavePage />} />
              <Route path="/Pay Roll/FinanceAndSupport" element={<SideBar />} />
              <Route path="/Complaints/FinanceAndSupport" element={<ComplaintsPage />} />            
              <Route path="/Suppliers/FinanceAndSupport" element={<SupplierPage />} />
              <Route path="/Beneficiary/FinanceAndSupport" element={<SideBar />} />
              
              <Route path="/Dash Board/Executive" element={<SideBar />} />
              <Route path="/Attendance/Executive" element={<SideBar />} />
              <Route path="/Project/Executive" element={<ProjectPage />} />
              <Route path="/Leave/Executive" element={<SideBar />} />
              <Route path="/Complaints/Executive" element={<ComplaintsPage />} />
              <Route path="/Pay Roll/Executive" element={<SideBar />} />
              <Route path="/Beneficiary/Executive" element={<SideBar />} />
              <Route path="/Team members/Executive" element={<SideBar />} />

           </Routes>
         </div>
       </Router>
  );
}

export default App;
