import React, { useContext } from 'react';
import { CountContext } from '../../App';
const ThirdComponent = () => {
    const [count, setCount] = useContext(CountContext);
    return (
        <div>
            <div className='context-container'>
            <h2> This is Third Component</h2>
            <div className="context-style">
                <button onClick={() => setCount(count+1)} >+</button>
                <p> Count : {count} </p>
                <button onClick={() => setCount(count-1)}>-</button>
            </div>
        </div>
        </div>
    );
};

export default ThirdComponent;