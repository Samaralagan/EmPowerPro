import React from 'react'
import './Contactus.css'
import { CONTACTUS } from '../constants/contents'
import { SOCIALMEDIA } from '../constants/contents'

const Contactus = ({id}) => {
  return (
    <div className='contactus-body' id={id}>
        <div className='d-flex'>
            <div  className='contactus-body-left'>
                <h2 className='contactus-title'>{CONTACTUS.title}</h2>
                <div className='contactus-content'>{CONTACTUS.text}</div>
                
                <form action="" className='contactus-form'>
                    <div className='contactus-form-row'>
                        <div className='contactus-form-col'>
                            <div className='contactus-form-input-box'>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" placeholder='Kasun' />
                            </div>
                        </div>
                        <div className='contactus-form-col'>
                            <div className='contactus-form-input-box'>
                                <label htmlFor="firstName">Last Name</label>
                                <input type="text" placeholder='Fernando' />
                            </div>
                        </div>
                     </div>
                    <div className='contactus-form-row'>
                        <div className='contactus-form-col'>
                            <div className='contactus-form-input-box'>
                                <label htmlFor="firstName">Email Address</label>
                                <input type="text" placeholder='kasunfernando1990@gmail.com' />
                            </div>
                        </div>
                        <div className='contactus-form-col'>
                            <div className='contactus-form-input-box'>
                                <label htmlFor="firstName">Contact No.</label>
                                <input type="text" placeholder='+94 777 808 6754' />
                            </div>
                        </div>
                    </div>
                    <div className='contactus-form-row'>
                        <div className='contactus-form-input-box'>
                             <label htmlFor="firstName" className='ms-4'>Description</label>
                            <textarea type="text" placeholder='I would prefer if you ........' />
                        </div>
                    </div>
                    <div className='contactus-form-button'>
                        <button className='gradient-blue-btn '>SUBMIT</button>
                    </div>
                </form>
            </div>

            <div  className='contactus-body-right'>
                <h3 className='contactus-right-title'>{CONTACTUS.subtitle}</h3>
                <div className='mt-4'>
                    <div className='contactus-right-contact'>
                        {<CONTACTUS.location_icon />}
                        <span dangerouslySetInnerHTML={{__html:CONTACTUS.location}}/>          
                    </div>
                    <div className='contactus-right-contact'>
                        {<CONTACTUS.mail_address_icon />}
                        <span dangerouslySetInnerHTML={{__html:CONTACTUS.mail_address}}/>          
                    </div>
                    <div className='contactus-right-contact'>
                        {<CONTACTUS.phone_number_icon/>}
                        <span dangerouslySetInnerHTML={{__html:CONTACTUS.phone_number}}/>          
                    </div>
                </div>

                <div className='contactus-socialmedia'>
                    <h6>Follow  Us  On</h6>
                    <div className='mt-3 ms-3'>
                        {SOCIALMEDIA.facebook}
                        {SOCIALMEDIA.instagram}
                        {SOCIALMEDIA.linkedin}
                        {SOCIALMEDIA.twitter}
                        {SOCIALMEDIA.whatsapp}
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Contactus