import React, { useState, useRef } from 'react';
import './App.css';
import { v4 as uuid } from "uuid";

function App() {
    const inputRef = useRef(null);
    const [inputValues, setValues] = useState([]);

    const onClick = () => {
        /* 
            The reason why I save the inputRef value in a new variable is because there is a delay between clicking the add button and it creating
            a new TODO. So it removes the text before actually adding the input so the value will be 0 when it is added. To fix this I just
            save the value in a new variable called value.
        */
        const temp = inputRef.current.value;
        const value = {
            id: uuid(),
            content: temp
        }
        setValues( arr => [...arr, JSON.stringify(value)]);
        inputRef.current.value = "";
    };

    const handleRemoveItem = e => {
        e = JSON.stringify(e);
        setValues(inputValues.filter(item => item !== e));
    };
    
    return (
        <div id="frontPageDiv">
            <p className="normalText">Add TODOs below:</p>
            <input id="TODOText" ref={inputRef} type="text"></input>
            <input id="addBut" type="button" onClick={ onClick } value="Add" />
            
            <div id="TODOsDiv">
                <p className="normalText">TODO list:</p>
                {inputValues.map((e) => {
                    e = JSON.parse(e);
                    return (
                        <div key={e.id} className="TODOs" name={e}>
                            <span className='TODOText'>{e.content}</span>
                            <input className="TODOButton" type="button" value="Delete" name={e} onClick={() => handleRemoveItem(e)}></input>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default App;
