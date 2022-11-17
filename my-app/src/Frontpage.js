import React, { useState, useRef } from 'react';
import './App.css';
import { v4 as uuid } from "uuid";

function App() {
    const inputRef = useRef(null);
    const [inputValues, setValues] = useState([]);

    const onClick = () => {
        const value = {
            id: uuid(),
            content: inputRef.current.value
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
            <div className="input-group mb-3">
                <input id="TODOText" className="form-control" ref={inputRef} type="text"></input>
                <div className="input-group-prepend">
                    <input id="addBut" className="btn btn-success" type="button" onClick={ onClick } value="Add" />  
                </div>
            </div>

            <div id="TODOsDiv">
                <p className="normalText">Current tasks {inputValues.length} - TODO list:</p>
                {inputValues.map((e) => {
                    e = JSON.parse(e);
                    return (
                        <div key={e.id} className="justify-content-center" name={e}>
                            <div className="d-flex border justify-content-center">
                                <span className='TODOText break-text'>{e.content}</span>
                            </div>
                            <input className="btn btn-danger deleteBut" type="button" value="Delete" name={e} onClick={() => handleRemoveItem(e)}></input>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default App;
