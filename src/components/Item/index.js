import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import './item.css';

export const Item = ({ item }) => {

    const [value] = useState(item);
    const [name] = useState(() => {
        let valueArr = value.split('_');
        return valueArr.join(' ');
    });
    const [time, setTime] = useState(() => {
        return moment().tz(item).format('h:mm:ss a z')
    });

    // // Get name and time zone
    // const value = item;
    // const valueArr = value.split('_');
    // const name = valueArr.join(' ');
    // let time;

    useEffect(() => {
        setInterval(() => {
            setTime(() => {
                moment().tz(item).format('h:mm:ss a z');
            });
        }, 1000)
    }, [])

    return (
        <div key={`${i}-${value}`} className='item'>
            <p>{name}</p>
            <p>{time}</p>
            <div>&#10006;</div>
        </div>
    )
}