import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Careers from './components/Careers';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<div>Main Page</div>} />
                    <Route path="/careers" element={<Careers />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
