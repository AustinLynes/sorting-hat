import React from 'react';

const House = ()=> {
    return(
        <div className='house-page'>
            <p>Welcome to {window.localStorage.name}</p>
            <p>{window.localStorage.description}</p>
        </div>
    )
}
export default House;