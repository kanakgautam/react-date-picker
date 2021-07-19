import React from 'react'
import './Button.css'

function Button() {
    const hourArray1 = [10, 10, 10, 10];
    const hourArray2 = [10, 10, 3, 10];
    const hourArray3 = [10, 10, 10, 10];
    const hourArray4 = [10];
    return (
        <div className='container-btn'>
            <div>
                {hourArray1.map((item) => {
                    return (
                        <button className='btn-hour'>{item}:00</button>
                    )
                })}
            </div>
            <div>
                {hourArray2.map((item) => {
                    return (
                        <button className='btn-hour'>{item}:00</button>
                    )
                })}
            </div>
            <div>
                {hourArray3.map((item) => {
                    return (
                        <button className='btn-hour'>{item}:00</button>
                    )
                })}
            </div>
            <div>
                {hourArray4.map((item) => {
                    return (
                        <button className='btn-hour'>{item}:00</button>
                    )
                })}
            </div>
        </div>
    )
}

export default Button
