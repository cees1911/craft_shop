import React from 'react'

import './homepage.styles.scss'

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                   <h1 className='title'>USA</h1> 
                   <span classname='subtitle'>Koop nu</span>
                </div>
            </div>
        </div>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                   <h1 className='title'>UK</h1> 
                   <span classname='subtitle'>Koop nu</span>
                </div>
            </div>
        </div>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                   <h1 className='title'>CHINA</h1> 
                   <span classname='subtitle'>Koop nu</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;