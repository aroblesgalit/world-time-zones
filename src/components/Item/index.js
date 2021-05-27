import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import './item.css';

const Item = ({ item }) => {

    const [value] = useState(item);
    const [name] = useState(() => {
        let valueArr = value.split('_');
        return valueArr.join(' ');
    });
    const [time, setTime] = useState(() => {
        return moment().tz(item).format('h:mm:ss a z');
    });

    useEffect(() => {
        setInterval(() => {
            setTime(() => {
                return moment().tz(item).format('h:mm:ss a z');
            });
        }, 1000)
    }, [])

    return (
        <div className='item'>
            <p>{name}</p>
            <p>{time}</p>
            <div>&#10006;</div>
        </div>
    )
}

export default Item;