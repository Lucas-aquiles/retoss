import React from 'react';
import { AiFillStar } from "react-icons/ai";
import './Second.css'

const StarSecond = () => {
  return (
    <div className='starDiv'>{Array(5)
        .fill()
        .map((_, index) =>
         
            <AiFillStar className="ReviewIconChildren"
              style={{ color: "orange" }}
            />
           
        )}</div>
  )
}

export default StarSecond