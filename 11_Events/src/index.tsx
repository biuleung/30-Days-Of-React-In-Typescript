import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/main/Main';

console.log('index rendered');

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


const app = (
    <div className="app">
        <>
            <div id="mainContainer">
                <Main />
            </div>
        </>
    </div>
);
root.render(<React.StrictMode>{app}</React.StrictMode>);
