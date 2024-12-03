import React from 'react'

export const PayrollButton = (props) => {
  return (
    <button
    className="gradient-blue-btn "
    style={{
      color: "white",
      width: "167px",
      height: "45px",
      padding: "10px",
      marginLeft:"49rem"
    }}
  >
   {props.icon}
    Apply Leave
  </button>
  )
}
