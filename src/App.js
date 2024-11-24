import "./App.css";
import "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "react-icons";
import HomePage from "./pages/HomePage.jsx";
import Vacancy_Apply_Form from "./components/common/VacancyApplyForm.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SideBar from "./components/common/SideBar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage.jsx";
// import TrainingPage from './pages/TrainingPage.jsx';
import ComplaintsPage from "./pages/ComplaintsPage.jsx";
// import ComplaintsPage_Tl from './pages/ComplaintsPage_Tl.jsx';
// import ComplaintsPage from './pages/ComplaintsPage.jsx';
import ComplaintsPage_Tl from "./pages/ComplaintsPage_Tl.jsx";
import AttendancePage from "./pages/AttendancePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import Complaintsmore from "./components/ComplaintsComponent/Complaintsmore.jsx";
import NewComplaint from "./components/ComplaintsComponent/NewComplaint.jsx";
import LeavePage from "./pages/LeavePage.jsx";
import ReplyComplaint from "./components/ComplaintsComponent/ReplyComplaint.jsx";
import SupplierPage from "./pages/SupplierPage.jsx";
import InquriesPage from "./pages/InquriesPage.jsx";
import CreateUserPage from "./pages/CreateUserPage.jsx";
import EmployeePage from "./pages/EmployeePage.jsx";
import Employee from "./components/employee/Employee.jsx";
import Profile from "./components/employee/Profile.jsx";
import Team_Profile from "./components/employee/Team_Profile.jsx";

import BeneficiaryMore from "./components/BeneficiaryComponent/BeneficiaryMore.jsx";
import BeneficiaryPage from "./pages/BeneficiaryPage.jsx";
import HR_BeneficiaryPage from "./components/BeneficiaryComponent/HR_Beneficiary.jsx";
import PayrollPage from "./pages/PayrollPage.jsx";
import HR_EmployeePage from "./components/employee/HR_Employee.jsx";
// import EX_EmployeePage from "./components/employee/EX_Employees.jsx";
import EX_EmployeePage from "./pages/EX_EmployeePage.jsx";

import ApplyLeaveForm from "./components/LeaveComponent/ApplyLeaveForm.jsx";
import ApplyClaim_1 from "./components/BeneficiaryComponent/ApplyClaim_1.jsx";
import ApplyClaim_2 from "./components/BeneficiaryComponent/ApplyClaim_2.jsx";
import ApplyClaim_3 from "./components/BeneficiaryComponent/ApplyClaim_3.jsx";
import AppliedClaimForm from "./components/BeneficiaryComponent/AppliedClaimForm.jsx";
import CanceledClaimForm from "./components/BeneficiaryComponent/CanceledClaimForm.jsx";
import Layout from "./components/layout/Layout.jsx";
import JobPage from "./pages/JobPage.jsx";
import PayrollFSForm from "./components/payrollComponent/PayrollFSForm.jsx";
import PayrollApproveSalary from "./components/payrollComponent/PayrollApproveSalary.jsx";
import Performance from "./components/DashboardComponent/Performance";

import CreateNewTeam from "./components/employee/CreateTeam.jsx";

import NewApproval from "./components/employee/NewApproval.jsx";

import Teams from "./components/employee/Teams.jsx";
import GenerateReport from "./components/employee/GenerateReport.jsx";
import IncomeExpensePage from "./pages/IncomeExpensePage.jsx";
import ApplyLeavePage from "./components/LeaveComponent/ApplyLeave.jsx";
import LeaveHistory from "./components/LeaveComponent/LeaveHistory.jsx";
import LeaveRequest_HR from "./components/LeaveComponent/LeaveRequest_HR.jsx";
import LeavePageHR from "./components/LeaveComponent/LeaveHR.jsx";
import Card1 from "./components/common/Card1.jsx";
import DashboardEmployee from "./components/DashboardComponent/DashboardEmployee.jsx";
import DashboardAdmin from "./components/DashboardComponent/DashboardAdmin.jsx";
import DashboardHR from "./components/DashboardComponent/DashboardHR.jsx";
import DashboardFinance from "./components/DashboardComponent/DashboardFinance.jsx";
import DashboardExecutive from "./components/DashboardComponent/DashboardExecutive.jsx";
import EditVacancy from "./components/JobsComponent/EditVacancy.jsx";
import RepliedComplaint from "./components/ComplaintsComponent/RepliedComplaint.jsx";

// import EX_ProjectPage from "./pages/EX_ProjectPage.jsx";
import Create_Project_1 from "./components/ProjectComponent/Create_Project_1.jsx";
import ProjectAgile from "./components/ProjectComponent/Project_Agile.jsx";
import TaskReviews from "./components/ProjectComponent/TeamLead_TaskReviews.jsx";

function App() {
  const role = "Employee";

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Vacancy_Apply_Form/> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/VacancyApplyForm" element={<Vacancy_Apply_Form />} />
          <Route path="/" element={<Layout />}>
            <Route
              path="/Dash Board/Employee"
              element={<DashboardEmployee />}
            />
            <Route
              path="/Dash Board/Employee/Performance"
              element={<Performance />}
            />
            <Route path="/Dash Board/Employee/Profile" element={<Profile />} />
            <Route path="/Attendance/Employee" element={<AttendancePage />} />
            <Route path="/Project/Employee" element={<ProjectPage />} />
            <Route
              path="/Project/Employee/AgileProject"
              element={<ProjectAgile />}
            />
            <Route path="/Leave/Employee" element={<LeavePage />} />
            <Route path="/Pay Roll/Employee" element={<PayrollPage />} />
            <Route path="/Complaints/Employee" element={<ComplaintsPage />} />
            <Route path="/Blog/Employee" element={<BlogPage />} />
            <Route
              path="/Complaints/Employee/NewComplaint"
              element={<NewComplaint />}
            />
            {/* <Route path="/Training/Employee" element={<TrainingPage />} />    */}
            <Route path="/Beneficiary/Employee" element={<BeneficiaryPage />} />

            <Route path="/Dash Board/TeamLeader" element={<DashboardPage />} />
            <Route
              path="/Dash Board/TeamLeader/Performance"
              element={<Performance />}
            />
            <Route
              path="/Dash Board/TeamLeader/Profile"
              element={<Profile />}
            />
            <Route path="/Attendance/TeamLeader" element={<AttendancePage />} />
            <Route path="/Project/TeamLeader" element={<ProjectPage />} />
            <Route
              path="/Project/TeamLeader/AgileProject"
              element={<ProjectAgile />}
            />
            <Route
              path="/Project/TeamLeader/TaskReviews"
              element={<TaskReviews />}
            />
            <Route path="/Leave/TeamLeader" element={<LeavePage />} />
            <Route path="/Pay Roll/TeamLeader" element={<PayrollPage />} />
            <Route path="/Complaints/TeamLeader" element={<ComplaintsPage />} />
            <Route
              path="/ComplaintsPage_Tl_new/TeamLeader"
              element={<NewComplaint />}
            />
            <Route
              path="/ComplaintsPage_Tl_reply/TeamLeader"
              element={<ReplyComplaint />}
            />
            <Route path="/Blog/TeamLeader" element={<BlogPage />} />
            <Route
              path="/Beneficiary/TeamLeader"
              element={<BeneficiaryPage />}
            />
            <Route path="/Team members/TeamLeader" element={<EmployeePage />} />
            <Route
              path="/Team members/TeamLeader/GenerateReport"
              element={<GenerateReport />}
            />
            <Route
              path="/Team members/TeamLeader/Profile"
              element={<Profile />}
            />

            <Route path="/Dash Board/Admin" element={<DashboardAdmin />} />
            <Route
              path="/Dash Board/Admin/Performance"
              element={<Performance />}
            />
            <Route path="/Dash Board/Admin/Profile" element={<Profile />} />
            <Route path="/Attendance/Admin" element={<AttendancePage />} />
            <Route path="/Leave/Admin" element={<LeavePage />} />
            <Route path="/Pay Roll/Admin" element={<PayrollPage />} />
            <Route path="/Complaints/Admin" element={<ComplaintsPage />} />
            <Route path="/Create User/Admin" element={<CreateUserPage />} />
            <Route path="/Inquires/Admin" element={<InquriesPage />} />
            <Route path="/Beneficiary/Admin" element={<BeneficiaryPage />} />

            <Route path="/Dash Board/HR" element={<DashboardHR />} />
            <Route
              path="/Dash Board/HR/Performance"
              element={<Performance />}
            />
            <Route path="/Dash Board/HR/Profile" element={<Profile />} />
            <Route path="/Attendance/HR" element={<AttendancePage />} />
            <Route path="/Project/HR" element={<ProjectPage />} />
            <Route path="/Project/HR/AgileProject" element={<ProjectAgile />} />
            <Route path="/Leave/HR" element={<LeavePage />} />
            <Route path="/Complaints/HR" element={<ComplaintsPage />} />
            <Route path="/Pay Roll/HR" element={<PayrollPage />} />
            <Route path="/Blog/HR" element={<BlogPage />} />
            <Route path="/Employees/HR" element={<EmployeePage />} />
            <Route path="/Employees/HR/Teams" element={<Teams />} />
            <Route
              path="/Employees/HR/GenerateReport"
              element={<GenerateReport />}
            />
            <Route
              path="/Employees/HR/CreateNewTeam"
              element={<CreateNewTeam />}
            />
            <Route
              path="/Employees/HR/Team_Profile"
              element={<Team_Profile />}
            />
            <Route path="/Jobs/HR" element={<JobPage />} />
            <Route exact path={"/Jobs/HR/edit/:id"} element={<EditVacancy />} />
            <Route path="/Beneficiary/HR" element={<BeneficiaryPage />} />
            <Route path="/Employees/HR/Profile" element={<Profile />} />

            <Route
              exact
              path="/Complaints/HR/:complaintId"
              element={<Complaintsmore />}
            />

            <Route
              exact
              path="/Complaints/HR/ReplyComplaint/:complaintId"
              element={<ReplyComplaint />}
            />
            <Route
              exact
              path="/Complaints/HR/RepliedComplaint/:complaintId"
              element={<RepliedComplaint />}
            />

            <Route
              path="/Dash Board/FinanceAndSupport"
              element={<DashboardFinance />}
            />
            <Route
              path="/Dash Board/FinanceAndSupport/Performance"
              element={<Performance />}
            />
            <Route
              path="/Dash Board/FinanceAndSupport/Profile"
              element={<Profile />}
            />
            <Route
              path="/Attendance/FinanceAndSupport"
              element={<AttendancePage />}
            />
            <Route path="/Leave/FinanceAndSupport" element={<LeavePage />} />
            <Route
              path="/Pay Roll/FinanceAndSupport"
              element={<PayrollPage />}
            />
            <Route
              path="/Pay Roll/FinanceAndSupport/Form"
              element={<PayrollFSForm />}
            />
            <Route
              path="/Complaints/FinanceAndSupport"
              element={<ComplaintsPage />}
            />
            <Route
              path="/Suppliers/FinanceAndSupport"
              element={<SupplierPage />}
            />
            <Route
              path="/Beneficiary/FinanceAndSupport"
              element={<BeneficiaryPage />}
            />
            <Route
              path="/Income & Expense/FinanceAndSupport"
              element={<IncomeExpensePage />}
            />

            <Route
              path="/Dash Board/Executive"
              element={<DashboardExecutive />}
            />
            <Route path="/Dash Board/Executive/Profile" element={<Profile />} />
            <Route
              path="/Dash Board/Executive/Performance"
              element={<Performance />}
            />
            <Route path="/Attendance/Executive" element={<AttendancePage />} />
            {/* <Route path="/Project/Executive" element={<EX_ProjectPage />} /> */}
            <Route
              path="/Project/Executive/create-project"
              element={<Create_Project_1 />}
            />
            <Route path="/Leave/Executive" element={<LeavePage />} />
            <Route path="/Complaints/Executive" element={<ComplaintsPage />} />
            <Route path="/Pay Roll/Executive" element={<PayrollPage />} />
            <Route
              path="/Pay Roll/Executive/ApproveSalary"
              element={<PayrollApproveSalary />}
            />
            <Route
              path="/Beneficiary/Executive"
              element={<BeneficiaryPage />}
            />
            <Route path="/Employee/Executive" element={<EmployeePage />} />
            <Route path="/Employee/Executive/Teams" element={<Teams />} />
            <Route
              path="/Employee/Executive/GenerateReport"
              element={<GenerateReport />}
            />

            <Route
              path="/Employee/Executive/NewApproval"
              element={<NewApproval />}
            />

            <Route
              path="/Employee/Executive/CreateNewTeam"
              element={<CreateNewTeam />}
            />

            <Route path="/Employee/Executive/Profile" element={<Profile />} />
            <Route
              path="/Employee/Executive/Team_Profile"
              element={<Team_Profile />}
            />

            {/* <Route path="/Generate-Report" element={<GenerateReport />} />
           

            <Route path="/CreateNewTeam" element={<CreateNewTeam />} />

            <Route path="/NewApproval" element={<NewApproval />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
