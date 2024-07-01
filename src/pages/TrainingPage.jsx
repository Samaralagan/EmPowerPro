import React from 'react'
import SideBar from '../components/common/SideBar'
import Training from '../components/TrainingComponent/Training'

const TrainingPage = () => {
  return (
    <div className='d-flex'>
        <SideBar/>
        <Training/>
    </div>
  )
}

export default TrainingPage