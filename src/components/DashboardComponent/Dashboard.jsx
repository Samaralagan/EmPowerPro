import React from 'react'
import './Dashboard.css'
import Header from '../layout/Header'

const Dashboard = () => {
  return (
    <div className='dashboard-body'>
        <Header/>
        <hr />
        <div className='dashboard-content'>
            <div className='dashboard-content-left'>
                <div className='dashboard-content-top-boxs'>
                    <div className='dashboard-content-top-box'></div>
                    <div className='dashboard-content-top-box'></div>
                    <div className='dashboard-content-top-box'></div>
                </div>
                <div className='dashboard-content-middle-boxs'>
                    <div className='dashboard-content-middle-box'></div>
                    <div className='dashboard-content-middle-box'></div>
                </div>
                <div className=''></div>
            </div>
            <div className='dashboard-content-right'></div>
        </div>
    </div>
  )
}

export default Dashboard