import React from 'react';
import './_header2.scss'

const header = () =>{
    return(
        <div className='container'>
            <div className='right'>
            <ul>
                <a href="">Admin Dashboard</a><span>/</span>
                <a href="">User Access</a><span>/</span>
                <span><li>Change Permission</li></span>
            </ul>
            </div>
        </div>
    )
}

export default header;