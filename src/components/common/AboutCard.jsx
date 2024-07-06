import React from 'react'
import { Card } from 'react-bootstrap'
import StarRating from './StarRating'
import { FaPlus } from 'react-icons/fa'

const AboutCard = ({img,title,star,text}) => {

      {if(title === "empty") {
        return(
          <Card style={{ width: '14rem', height:'16rem', margin:'10px',  display:'flex', alignItems:'center', justifyContent:'center'}}>      
              <FaPlus style={{ width: '9rem', height:'10rem' }} />    
          </Card>
        )
      } else {
        return(
          <Card style={{ width: '14rem', height:'16rem', margin:'10px' }}>
            <Card.Img variant="top" src={img} style={{ width: '5rem',margin:'auto' }} />
            <Card.Body>
                <Card.Title style={{ textAlign:'center', marginBottom:'0',marginTop:'0' }}>{title}</Card.Title>
                <center><StarRating rating={star} /></center>
                <Card.Text>
                {text}
                </Card.Text>
            </Card.Body>
        </Card>
        )
      }}
      
}

export default AboutCard