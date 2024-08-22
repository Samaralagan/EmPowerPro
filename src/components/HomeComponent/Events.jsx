import React, { useEffect, useRef, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import './Event.css'
import Activity_card from '../common/ActivityCard';
import { EVENT_ACTIVITY_CARD ,EVENT_VACANCY_CARD} from '../constants/temporary';
import { EVENT,EVENT_VACANCY_CARD_ICONS } from '../constants/contents';
import Paginator from '../common/Paginator';
import Event_Vacancy_Popup from '../common/EventVacancyPopup';



const Events = ({id}) => {
  const Ref = useRef(null);
  const[Cards,setCards]=useState([])
  const [isActivity,setIsActivity]=useState(true)
  const [isVacancy,setIsVacancy]=useState(false)
  const[currentPage,setCurrentPage]=useState(1)
  const[CardsPerPage]=useState(3)
  const[filteredCards,setFilteredCards]=useState(EVENT_ACTIVITY_CARD)
  const [modalIsOpen, setModalIsOpen] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const rect = Ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        Ref.current.classList.add('fade-in');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleActivityClick=()=>{
    setIsActivity(true)
    setIsVacancy(false)
  }
  const  handleVacancyClick=()=>{
     setIsActivity(false)
     setIsVacancy(true)
  }

  const handlePaginationClick = (pageNumber) =>{
    setCurrentPage(pageNumber)
}

  const calculateTotalPages = (filteredCards,CardsPerPage,Cards)=>{
    const totalCards = filteredCards.length >0 ? filteredCards.length : Cards.length
    return Math.ceil(totalCards/CardsPerPage)
}

const indexOfLastCard = currentPage * CardsPerPage
const indexOfFirstCard = indexOfLastCard - CardsPerPage
const currentCards = filteredCards.slice(indexOfFirstCard,indexOfLastCard)

//open and clocse popup
const openModal = () => {
  setModalIsOpen(true);
};

const closeModal = () => {
  setModalIsOpen(false);
};
  return (
    <div className='about-body' id={id} > 
      <Container >
      <Row className="pt-5">
        <Col fluid className="title-fade text-center" ref={Ref}>
          <h1 className='about-title'>{EVENT.title}</h1>
          <p className="about-text pt-4" >
             {EVENT.text}
          </p>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center mt-3'>

         <Col md={3} 
          className={`event-top-tap  border-start-round ${isActivity ?`event-top-tap-active` : `event-top-tap-nonactive`  }`} 
          onClick={handleActivityClick}>
            Activities
          </Col>

         <Col md={3}
          className={`event-top-tap  border-end-round ${isVacancy?`event-top-tap-active` : `event-top-tap-nonactive`  }`} 
          onClick={handleVacancyClick}>
            Job  Vacancies
          </Col>

      </Row>
      {isActivity && (
         <Row className='mt-4 '> 
         <Col className='d-flex justify-content-center'>
            {currentCards.map((card,index)=>(
              <Activity_card img={card.img} name={card.name} text={card.text} key={index}/>
            ))}
            </Col>
            <Paginator  currentPage={currentPage}
                        totalPages={calculateTotalPages(filteredCards,CardsPerPage,Cards)}
                        onPageChange={handlePaginationClick}/>
         </Row>
      )}
      
      {isVacancy &&(
          <div className='row mt-4 ps-5 pe-5'>
                {EVENT_VACANCY_CARD.map((card,index)=>(
                  
                    <div key={index}   className='event-vacancy-card'>
                        <div  className='event-vacancy-type'><span>{card.type}</span></div>
                        <div dangerouslySetInnerHTML={{__html:card.name}} className='event-vacancy-name'></div>
                        <div className='event-vacancy-time'>{<EVENT_VACANCY_CARD_ICONS.time className='event-vacancy-card-icon'/>} {card.time} </div>
                        <div className='event-vacancy-salary'>{<EVENT_VACANCY_CARD_ICONS.salary className='event-vacancy-card-icon'/>} {card.salary}</div>
                        <div><button className='event-vacancy-card-button' onClick={openModal}>READ MORE</button></div>
                        <div className='event-vacancy-updated-time'>{card.updated_time}</div>
                        <Event_Vacancy_Popup modalIsOpen={modalIsOpen} closeModal={closeModal}/>
                    </div>
                 
                ))}
                 <Paginator  currentPage={currentPage}
                        totalPages={calculateTotalPages(filteredCards,CardsPerPage,Cards)}
                        onPageChange={handlePaginationClick}/>
          </div>
      )}

      
      
    </Container>
    </div>
  )
}

export default Events