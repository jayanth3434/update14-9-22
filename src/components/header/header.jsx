import React from 'react';
import './_header.scss'
import { BrowserRouter, Route , Link } from 'react-router-dom';

const header = () =>{
    return(
        <div className='container'>
        <div className='right'>
            <br></br>
            <ul>
               <a href="./header2"> <li>Home</li></a>
                <a href=""><span><li>Admin Dashboard</li></span></a>
                <a href=""><li>Signout</li></a>
            </ul>
            <br></br>
        </div>
        </div>
    )
}

export default header;