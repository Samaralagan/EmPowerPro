import "./payroll.css";
import React,{useState, useEffect} from "react";
import { FaPlusSquare } from "react-icons/fa";
import { payrollDetailsData } from "../constants/temporary";
import { HiDotsHorizontal } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import BankAccountModal from "./BankAccountModal";
import axios from 'axios'
function PayrollFS() {
  const [data,setData] = useState([])
    const navigation = useNavigate();
    const handleclickbutton =()=>{
        navigation('/Pay Roll/FinanceAndSupport/Form')
    }
    const fetchPayRolls = async()=> {
      try{
        const response = await axios.get("http://localhost:8080/api/v1/finance/slip-all");
        // console.log(response.data)
        setData(response.data);
        
      }catch(error){
        console.error("Error in fetching data", error);
      }
    };

    useEffect(() => {
      fetchPayRolls()
    },[]);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const navication = useNavigate()
    const openModal = () => {
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };
      const handleback = ()=>{
        navication('/Pay Roll/FinanceAndSupport')
      }
    console.log(data);
    
  return (
    <div className="payroll-body "> 

      <br />
      <br />
      <br />
      <br />

      <div className="" >
       
         <div className="payroll-middle1">
         <div className="payroll-Searchbar pt-3 pb-3">
            <div className="payroll-Search">Search</div>
            <input type="text" placeholder="Search......." />
          </div>
          <div >         
               <button className="gradient-blue-btn me-3 mt-3" onClick={openModal}><FaPlusSquare className='me-2'/>Add Bank Details</button>
          </div>
          <BankAccountModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>

          <div >         
               <button className="gradient-blue-btn me-3 mt-3" onClick={handleclickbutton}><FaPlusSquare className='me-2'/>Add New Payment</button>
          </div>
         </div>
        
        <div className="payroll-fs-content">
            <div className="payroll-fs-content-title" >
                <div className="payroll-fs-content-title1" >Employee</div>
                <div className="payroll-fs-content-title2" >Position</div>
                <div className="payroll-fs-content-title3" >Gross Pay</div>
                <div className="payroll-fs-content-title3" >Tax</div>
                <div className="payroll-fs-content-title3" >Total Salary</div>
                <div className="payroll-fs-content-title4" >Action</div>
            </div>
            <div className="payroll-fs-content-datas">
            {data.map((data)=>(
              <div className="payroll-fs-content-data mt-2" key={data.id}>
                <div className="payroll-fs-content-data1" >
                    {/* <img className="img1 ms-4" src={card.img} alt="" /> */}
                    <div className="ms-2">
                        <div className="payroll-fs-content-data1-name">{data.name}</div>
                        {/* <div className="payroll-fs-content-data1-emp">{card.emp}</div> */}
                    </div>
                </div>
                <div className="payroll-fs-content-data2" >{data.postion}</div>
                <div className="payroll-fs-content-data3" >{data.grossPay}</div>
                <div className="payroll-fs-content-data3" style={{color:'#F39F7C'}}>{data.tax}</div>
                <div className="payroll-fs-content-data3" style={{color:'#037A0F'}} >{data.totalSalary}</div>
                <div className="payroll-fs-content-data4 " ><HiDotsHorizontal /></div>
              </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default PayrollFS;
