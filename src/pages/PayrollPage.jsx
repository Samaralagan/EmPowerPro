import React, { useState } from 'react'
import Payroll from '../components/payrollComponent/Payroll';
import { useLocation } from 'react-router-dom';
import PayrollFS from '../components/payrollComponent/PayrollFS';
import PayrollExecutive from '../components/payrollComponent/PayrollExecutive';

const PayrollPage = () => {
  const [activeComponent, setActiveComponent] = useState("Payroll");
  const location = useLocation(); 

  var role = ''
  const getActivePageName = () => {
    const pathname = decodeURIComponent(location.pathname); // Decode the URL
     role = pathname.split('/')[2];
    return role;
  };

  const activePageName = getActivePageName();

  return (
    <div>
      {activeComponent === "Payroll" &&  role !== 'Executive' && role!=='FinanceAndSupport' &&(
        <Payroll setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "Payroll" && role==='FinanceAndSupport' &&(
        <PayrollFS setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === "Payroll" && role === 'Executive' && (
        <PayrollExecutive setActiveComponent={setActiveComponent} />
      )}
     
    </div>
    
  )
}

export default PayrollPage