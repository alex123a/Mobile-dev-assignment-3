import React, { useState, useRef } from 'react';
import './App.css';

function App() {
    const inputRef = useRef(null);
    const [inputValues, setValues] = useState([]);

    const onClick = () => {
        /* 
            The reason why I save the inputRef value in a new variable is because there is a delay between clicking the add button and it creating
            a new TODO. So it removes the text before actually adding the input so the value will be 0 when it is added. To fix this I just
            save the value in a new variable called value.
        */
        const value = inputRef.current.value;
        setValues( arr => [...arr, value]);
        inputRef.current.value = "";
    };

    const handleRemoveItem = e => {
        setValues(inputValues.filter(item => item !== e));
    };
    
    return (
        <div>
            <input id="TODOText" ref={inputRef} type="text"></input>
            <input type="button" onClick={ onClick } value="Add" />

            <div>
                {inputValues.map( e =>
                    <div className="TODOs" name={e}>
                        <span>{e}</span>
                        <input className="TODOButton" type="button" value="delete" name={e} onClick={() => handleRemoveItem(e)}></input>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
