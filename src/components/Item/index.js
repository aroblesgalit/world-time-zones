import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import './item.css';

const Item = ({ item, onDelete }) => {

    const [value] = useState(item);
    const [name] = useState(() => {
        let valueArr = value.split('_');
        return valueArr.join(' ');
    });
    const [time, setTime] = useState(() => {
        return moment().tz(item).format('h:mm:ss a z');
    });

    useEffect(() => {
        let isMounted = true; // For the Warning: "Can't perform a React state update on an unmounted component"
        setInterval(() => {
            if (isMounted) setTime(() => {
                return moment().tz(item).format('h:mm:ss a z');
            });
        }, 1000)
        return () => { isMounted = false };
    }, [])

    return (
        <div className='item'>
            <p>{name}</p>
            <p>{time}</p>
            <div onClick={onDelete}>&#10006;</div>
        </div>
    )
}

export default Item;