import React from 'react';

export const Item = ({ item }) => {

    // Get name and time zone
    const value = item;
    const valueArr = value.split('_');
    const name = valueArr.join(' ');
    const newTimeZone = moment().tz(item).format('h:mm:ss a z');

    return (
        <div key={`${i}-${item.name}`} className='item'>
            <p>{item.name}</p>
            <p>{item.time}</p>
            <div>&#10006;</div>
        </div>
    )
}