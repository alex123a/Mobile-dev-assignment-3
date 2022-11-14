import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Frontpage from './Frontpage.js';
import TopBar from './TopBar.js';

function App() {
    return (
        <div className="App">
            <TopBar />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Frontpage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
