import React, { useState } from 'react'
import './Training.css'
import Header from '../layout/Header'
import { NewCourseCardData} from '../constants/temporary'
import NewCourseCard from '../common/NewCourseCard'
import Paginator from '../common/Paginator'
import { FaPlus } from 'react-icons/fa'

const Training = () => {
    const[Cards,setCards]=useState([])
    const[currentPage,setCurrentPage]=useState(1)
    const[CardsPerPage]=useState(16)
    const[filteredCards,setFilteredCards]=useState(NewCourseCardData)

  
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

  
  return (
    <div className="training-body">
      <Header />
      <hr />
      <div>
        <div className="new-course-content">
          <div className='new-course-filterbar'>
             <div className='new-course-filter'>Filter</div>
             <input type="text" placeholder='Search.......' />
          </div>
          <button className='gradient-blue-btn' ><FaPlus className='me-2 ' /> Add</button>
        </div>

        <div className="training-new-course">
          {currentCards.map((card, index) => (
            <div >
              <NewCourseCard
                img={card.img}
                title={card.title}
                level={card.level}
                star={card.star}
                entrolled={card.enrolled}
                key={index}
              />
            </div>
          ))}
        
        </div>
        <div>
             <Paginator  currentPage={currentPage}
                          totalPages={calculateTotalPages(filteredCards,CardsPerPage,Cards)}
                          onPageChange={handlePaginationClick}/>

          </div>
      </div>
       
        
        
    </div>
  );
};

export default Training;
