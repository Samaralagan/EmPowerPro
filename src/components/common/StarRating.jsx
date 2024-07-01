import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const StarRating = ({ rating }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<BsStarFill key={i} className="gold-star" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<BsStarHalf key={i} className="gold-star"/>);
      } else {
        stars.push(<BsStar key={i} className="gold-star"/>);
      }
    }
  
    return (
      <div className="star-rating">
        {stars}
      </div>
    );
}

export default StarRating