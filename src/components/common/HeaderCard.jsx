import React from 'react'
function HeaderCard(props) {
  return (
    <>
    <div className="payroll-small-square">
     {props.icon}
    </div>

    <div className="leave-box-content">
        <div className="leave-sub-box-content-1" style={{fontSize: '20'}}>
        {" "}
        {props.title}{" "}
      </div>
      <div className="leave-main-box-content">{props.value}</div>
      
    </div>
    </>
  )
}

export default HeaderCard