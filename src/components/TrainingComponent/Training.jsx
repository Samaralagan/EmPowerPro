import React from 'react'
import './Training.css'
import Header from '../layout/Header'
import { NewCourseCardData, OnTimeTrainingCardData } from '../constants/temporary'
import NewCourseCard from '../common/NewCourseCard'
import { MyCourseCardData } from '../constants/temporary'
import MyCourseCard from '../common/MyCourseCard'
import OnTimeTrainingCard from '../common/OnTimeTrainingCard'

const Training = () => {
  return (
    <div className="training-body">
      <Header />
      <hr />
      <div>
        <div className="new-course-content">
          <h5>NEW COURSES</h5>
          <p>View All {">>>"}</p>
        </div>

        <div className="training-new-courses">
          {NewCourseCardData.map((card, index) => (
            <div>
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
      </div>

        <div>
           <h5 className='mycourse-title'>MY COURSES</h5>
           <div className='mycourse-card'>
              {MyCourseCardData.map((card,index)=>(
                 <MyCourseCard img={card.img} title={card.title} started={card.started} level={card.level} star={card.star} Progress={card.Progress}  key={index} />
              ))}
           </div>
        </div>

       <div>
          <h5 className='ontimetraining-title'>ON TIME TRAININGS</h5>
          <div  className='ontimetraining-content'>
             <div className='ontimetraining-content-left'>
                {OnTimeTrainingCardData.map((card,index)=>(
                   <OnTimeTrainingCard title={card.title} date={card.date} time={card.time} link={card.link} key={index}/>
                ))}
             </div>
             <div className='ontimetraining-content-right'>2</div>
          </div>
       </div>
        
    </div>
  );
};

export default Training;
