import React, { useState, useRef } from 'react';
import './App.css';
import { v4 as uuid } from "uuid";

function App() {
    const inputRef = useRef(null);
    const [inputValues, setValues] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);

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

    const handleCompletedItem = e => {
        e = JSON.stringify(e);
        setCompletedTodos( arr => [...arr, e]);
        setValues(inputValues.filter(item => item !== e));
    }
    
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
                <p className="normalText">TODOs can be seen below - Current tasks left {inputValues.length}</p>
                {inputValues.map((e) => {
                    e = JSON.parse(e);
                    return (
                        <div key={e.id} className="justify-content-center" name={e}>
                            <div className="d-flex justify-content-center border border-3 border-dark">
                                <span className='TODOText break-text'>{e.content}</span>
                            </div>
                            <input className="btn btn-success TodoBut" type="button" value="Complete" name={e} onClick={() => handleCompletedItem(e)}></input>
                            <input className="btn btn-danger TodoBut" type="button" value="Delete" name={e} onClick={() => handleRemoveItem(e)}></input>
                        </div>
                    )
                })}
            </div>

            <div id="TODOsCompletedDiv">
                <p className='normalText'>Completed tasks below - {completedTodos.length} tasks completed</p>
                {completedTodos.map((e) => {
                    e = JSON.parse(e);
                    return (
                        <div key={e.id} className="d-flex justify-content-center border border-3 border-dark marginAdjuster" name={e}>
                            <span className='TODOText break-text'>{e.content}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default App;
