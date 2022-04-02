import React, { useContext } from 'react';
import './FirstComponent.css';
// কন্টেক্স ইমপোর্ট করা হয়েছে
import { CountContext } from '../../App';
const FirstComponent = () => {
    // কন্টেক্স ব্যবহারের জন্য কল করা হয়েছে
    const [count, setCount] = useContext(CountContext);
    return (
        <div className='context-container'>
            <h2> This is First Component</h2>
            <div className="context-style">
                // সেট করা হয়েছে
                <button onClick={() => setCount(count+1) } >+</button>
                <p> Count :{count} </p>
                <button onClick={() => setCount(count-1) } >-</button>
            </div>
        </div>
    );
};

export default FirstComponent;