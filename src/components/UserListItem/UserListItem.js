import React from 'react';
import './UserListItem.css';

const SecondListItem = ({ user }) => {
    const {id, name} = user 
    console.log('SecondListItem')

    return (
        <li id={id} className='user-card'>
            <p>
                {name}
            </p>
        </li>
    );
};

export default SecondListItem;