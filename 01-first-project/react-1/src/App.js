import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialog/Dialog';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
              {/*          <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialog" element={<Dialog/>}/>*/}

                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/dialog' element={<Dialog/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}
export default App;