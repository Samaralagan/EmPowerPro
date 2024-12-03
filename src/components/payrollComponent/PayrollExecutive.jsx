import "./payroll.css";
import React, { useState, useEffect } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { payrollDetailsData } from "../constants/temporary";
import { HiDotsHorizontal } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useScatterChartProps } from "@mui/x-charts/internals";
import axios from "axios";
function PayrollExecutive() {
  const [data,setData] = useState([])
  
  const navigation = useNavigate();
  const handleclickbutton = () => {
    navigation("/Pay Roll/Executive/ApproveSalary");
  };

  const fetchPayRolls = async()=> {
    try{
      const response = await axios.get("http://localhost:8080/api/v1/executive/slip-all");
      // console.log(response.data)
      setData(response.data);
      
    }catch(error){
      console.error("Error in fetching data", error);
    }
  };

  useEffect(() => {
    fetchPayRolls()
  },[]);

  const handleStatusChange = async (id)=>{
    try{
      const response = await axios.put(`http://localhost:8080/api/v1/executive/slip-permission/${id}`);
      
    }catch(error){
      console.error("Error in fetching data", error);
    }
  }



  return (
    <div className="payroll-body ">
      <br />
      <br />
      <br />
      <br />

      <div className="">
        <div className="payroll-middle1">
          {/* <div>
            <input type="checkbox" className="me-2 mt-3 ms-3" />
            <label htmlFor="" className="fs-7 ">
              Select All
            </label>
          </div> */}
          {/* <div >         
               <button className="gradient-blue-btn me-3 mt-3" onClick={handleclickbutton}>Approve Salary</button>
          </div> */}
        </div>

        <div className="payroll-fs-content">
          <div className="payroll-fs-content-title">
            <div className="payroll-fs-content-title1">Employee</div>
            <div className="payroll-fs-content-title21">Position</div>
            <div className="payroll-fs-content-title3">Gross Pay</div>
            <div className="payroll-fs-content-title3">Tax</div>
            <div className="payroll-fs-content-title3">Total Salary</div>
            <div className="payroll-fs-content-title41">Action</div>
          </div>
          <div className="payroll-fs-content-datas">
            {data.map((data) => (
              <div className="payroll-fs-content-data mt-2" key={data.id}>
                <div className="payroll-fs-content-data1">
                  {/* <img className="img1 ms-3" src={card.img} alt="" /> */}
                  <div className="ms-2">
                    <div className="payroll-fs-content-data1-name">
                      {data.name}
                    </div>
                    {/* <div className="payroll-fs-content-data1-emp">
                      {card.emp}
                    </div> */}
                  </div>
                </div>
                <div className="payroll-fs-content-data21">{data.postion}</div>
                <div className="payroll-fs-content-data3">{data.grossPay}</div>
                <div
                  className="payroll-fs-content-data3"
                  style={{ color: "#F39F7C" }}
                >
                  {data.tax}
                </div>
                <div
                  className="payroll-fs-content-data3"
                  style={{ color: "#037A0F" }}
                >
                  {data.totalSalary}
                </div>
                <div className="payroll-fs-content-data41 ">
                  <button
                    onClick={() => {handleStatusChange(data.id)}}
                    className="gradient-blue-btn "
                    style={{ padding: "5px 10px 5px 10px" }}
                  >
                    {data.status}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayrollExecutive;