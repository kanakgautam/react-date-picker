import React from 'react'
import './Day.css'

function Day(props) {
    const {date,changeActive} = props;
    return (
        <div onClick={()=>{
            changeActive(props.date);
        }}>
            <button className={props.highlighted ? 'btn-highlighted': 'btn'}>
                <p>{props.day}</p>
                <h1 className='day'>{props.date}</h1>
            </button>
        </div>
    )
}

export default Day
