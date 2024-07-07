import React from 'react'
import SideBar from '../components/common/SideBar'
import Complaints from '../components/ComplaintsComponent/Complaints'

const ComplaintsPage = () => {
  return (
    <div className='d-flex'>
        <SideBar/>
        <Complaints/>
    </div>
  )
}

export default ComplaintsPage