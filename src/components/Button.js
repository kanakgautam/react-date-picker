import React from 'react'
import './Button.css'

function Button() {
    const hourArray1 = [0, 1, 2, 3, 4, 5];
    const hourArray2 = [6, 7, 8, 9, 10, 11];
    const hourArray3 = [12, 13, 14, 15, 16, 17];
    const hourArray4 = [18, 19, 20, 21, 22, 23];
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
