import React, { useEffect, useState } from 'react';
import './Clock.css';
import watch from '../../assets/images/watch.gif';

const Clock = () => {
    const [date, setDate] = useState(new Date().toLocaleTimeString())
    
    useEffect(() => {
        console.log('ComponentDidMount')
        
        const timerId = setInterval(() => 
            setDate(new Date().toLocaleTimeString())
        , 1000)

        return () => {
            console.log('ComponentWillUnmount')
            clearInterval(timerId)   
        }
    }, []);

    useEffect(() => {
        console.log('Component Date update')
    }, [date]);

    return (
        <div className='clock'>
            <span>
                {date}
                <img src={watch}/>
            </span>
        </div>
    )
}

export default React.memo(Clock);
