import React, { useState } from 'react'
import Day from './Day';
import './DatePicker.css'

function DatePicker() {

    const [weekArray, setWeeekarray] = useState([0, 1, 2, 3, 4, 5, 6]);
    const WeekDayArray = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
    const [active,setActive]=useState(-1);

    const increaseDay = () => {
        let newArray =[];
        for(let i=0;i<7;i++)
        {
            newArray.push((weekArray[i]+1)%31);
        }
        // console.log(newArray);
        setWeeekarray(() => newArray
        );
        // console.log(newArray);
        // console.log(weekArray);
    }

    const decreaseDay = () => {
        let newArray =[];
        for(let i=0;i<7;i++)
        {
            newArray.push((weekArray[i]-1+31)%31);
        }
        // console.log(newArray);
        setWeeekarray(() => newArray
        );
        // console.log(newArray);
        // console.log(weekArray);
    }

    const changeActive = (item) =>{
        setActive(item);
        console.log(item);
    }

    return (
        <div className='date-picker-wrapper'>
            <button className="btn-mover" onClick={decreaseDay}><h1>&lt;</h1></button>
            {weekArray.map((item, index) => {
                return (
                    <Day date={(item + 1)}  day={WeekDayArray[((item)%7)]} changeActive={changeActive} highlighted={active===(item+1)}/>
                )
            })}
            <button className="btn-mover" onClick={increaseDay}><h1>&gt;</h1></button>
        </div>
    )
}

export default DatePicker
