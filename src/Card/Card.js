import React from 'react';

import './Card.css';


const card = (props) => {
    return <div className="Card" key={props.index}>
        <h4 >{props.title}</h4>
        {props.video ? <div className="videoWrapper"><iframe width="100%" height="auto" src={"https://www.youtube.com/embed/" + props.video + "?&autoplay=1"} allow="autoplay" frameborder="0"></iframe></div> : null}

        {props.image ? <img style={{width: "100%", lineHeight: "0"}} alt={props.name} src={props.image} className="cardImage" /> : null}

        {props.quote ? <h3 className="quote">{props.quote} </h3> : null}

        {props.desc ? <p className="desc">{props.desc}</p> : null}
    </div>
};

export default card;