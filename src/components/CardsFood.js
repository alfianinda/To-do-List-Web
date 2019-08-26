import React from "react";

const CardsFood = (props) => {
  return (
    <div>
        <div className="col-sm-3">
        <div className="thumbnail" style={{padding: '15px'}}>
            <img className="img-responsive" src={props.image} alt={props.id} />
            <h3 className="text-center"><b>{props.title}</b></h3>
            <p>{props.desc}</p>
        </div>
        </div>
    </div>
  ); 
}



export default CardsFood; 