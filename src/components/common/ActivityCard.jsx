import React from 'react'
import { Card } from 'react-bootstrap'
import './ActivityCard.css'

const ActivityCard = ({img,name,text}) => {
  return (
    <div>
        <Card className='activity-card mt-4'> 
            <Card.Img src={img} className='activity-card-img' > 
            </Card.Img>
            <div className='activity-card-content' >
                <div dangerouslySetInnerHTML={{__html:name}} className='activity-card-title'></div>
                <div dangerouslySetInnerHTML={{__html:text}} className='activity-card-text'></div>
                <button className='activity-card-button'> VIEW DETAILS</button>
            </div>
        </Card>
    </div>
  )
}

export default ActivityCard