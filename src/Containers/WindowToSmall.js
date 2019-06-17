import React from 'react';

const WindowToSmall = () => {
    return(
        <div>
            <h1>Window size is too small</h1>
            <h1>If you are on your desktop, resize the web browser and hit refresh</h1>
            <h1>Currently we do not support mobile devices</h1>
            <h1 style={{fontSize:'50px'}}>;-;</h1>
        </div>
    )
}

export default WindowToSmall;