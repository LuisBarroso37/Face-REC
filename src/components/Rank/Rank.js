import React from 'react';
import './Rank.css';

const Rank = ( { name, entries }) => {
    return (
        <div className='rank-container'>
            <div className='rank-text'>{`${name}, your current entry count is...`}</div>
            <div className='rank'>{`${entries}`}</div>
        </div>
    );
}

export default Rank;