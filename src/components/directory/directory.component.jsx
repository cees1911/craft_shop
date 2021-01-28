import React from 'react';

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [ {
                    title: 'usa',
                    imageUrl: 'https://i.ibb.co/TRnk5pm/usa.jpg',
                    id: 1
                },
                {
                    title: 'uk',
                    imageUrl: 'https://i.ibb.co/dBwYgFs/uk.png',
                    id: 2
                },
                {
                    title: 'China',
                    imageUrl: 'https://i.ibb.co/k0ynxPM/china.png',
                    id: 3
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title, imageUrl, id } ) =>(
                        <MenuItem key={id} title={title} imageUrl={imageUrl} />
                    ))
                }

            </div>
        )
    }
}

export default Directory;