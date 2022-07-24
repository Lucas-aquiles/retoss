import React from "react";
import './Third.css'
import   colton from '../images/image-colton.jpg'
import   irene from '../images/image-irene.jpg'
import   anne from '../images/image-anne.jpg'


const Third = () => {
  return (
    <div className="ThirdContainer">
      <div className="Commentary Commentarypart1 ">
        <div  className="part1">  
        <img className="image" src={colton} alt="image"/> 
        <div>    
        <h3> Colton Smith </h3>
        <h4> Verified Buyer</h4>
        </div>
        </div>

<div className="part2">  
        <p>
          "We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent!"
        </p>
      </div>

      </div>



      <div className="Commentary  Commentarypart2">
        <div  className="part1">  
        <img className="image" src={irene} alt="image"/> 
        <div>    
        <h3> Irene Roberts </h3>
        <h4> Verified Buyer</h4>
        </div>
        </div>

<div className="part2">  
        <p>
        "Customer service is always excellent and very quick turn around.
          Completely delighted with the simplicity of the purchase and the speed
          of delivery."
        </p>
      </div>

      </div>




      <div className="Commentary  ">
        <div  className="part1">  
        <img className="image" src={anne} alt="image"/> 
        <div>    
        <h3> Anne Wallace</h3>
        <h4> Verified Buyer</h4>
        </div>
        </div>

<div className="part2">  
        <p>
        "Put an order with this company and can only praise them for the very
          high standard. Will definitely use them again and recommend them to
          everyone!"
        </p>
      </div>

      </div>

    </div>
  );
};

export default Third;
