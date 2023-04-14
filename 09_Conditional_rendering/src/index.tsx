import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import image01 from './images/image01.png';
import frontend_technologies from './images/frontend_technologies.png';

console.log('index rendered');

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

function LoadingSign() {
    return <span style={{ fontSize: '48px' }}>Loading...</span>;
}

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    border: '2px solid yellow',
    color: 'white',
    backgroundColor: 'black',
    padding: '0 12px',
};
const author = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
};

function Header() {
    console.log('Header rendered');
    const [isLoading, setIsLoading] = useState(true);
    const fetchApiData = () => {
        return new Promise((resolve) => setTimeout(resolve, 3000));
    };

    fetchApiData().then(() => {
        setIsLoading(false);
    });

    return (
        <header style={headerStyle}>
            <div>
                <h1>Getting started</h1>
                <small>Dec 12, 2022</small>
                <p>
                    Instructor: {author.firstName} {author.lastName}
                </p>
            </div>
            {isLoading && (
                <div>
                    <LoadingSign />
                </div>
            )}
        </header>
    );
}

const techs = ['HTML', 'CSS', 'JavaScript'];

const user = (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img width="10%" height="10%" src={image01} alt="Tiger" />
    </div>
);

const main = (
    <main className="main">
        <div>
            <p className="prerequisite">Prerequisite</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                    width="70%"
                    height="70%"
                    src={frontend_technologies}
                    alt="frontend techs"
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ul>
                    {techs?.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    </main>
);

let date = new Date().getFullYear();

const footer = (
    <footer className="footer">
        <p>copyright {date}</p>
    </footer>
);

enum Season {
    'spring',
    'summer',
    'winter',
    'autumn',
}

function AppBody({ season }: { season: Season }) {
    const switchRender = () => {
        switch (season) {
            case Season.spring:
                return (
                    <div style={{ background: '#e0ffcd' }}>
                        <Header />
                        {main}
                        {user}
                        {footer}
                    </div>
                );
            case Season.summer:
                return (
                    <div style={{ background: '#ffcab0' }}>
                        <Header />
                        {main}
                        {user}
                        {footer}
                    </div>
                );
            case Season.winter:
                return (
                    <div style={{ background: '#c9753d' }}>
                        <Header />
                        {main}
                        {user}
                        {footer}
                    </div>
                );
            case Season.autumn:
                return (
                    <div style={{ background: '#e6a175' }}>
                        <Header />
                        {main}
                        {user}
                        {footer}
                    </div>
                );
            default:
                break;
        }
    };

    return <>{switchRender()}</>;
}

function App() {
    let season = Season.spring;
    // const month = new Date().getMonth();
    const month = Math.floor(Math.random() * 11) + 1;
    console.log('month: ', month);
    switch (true) {
        case month >= 3 && month < 6:
            season = Season.spring;
            break;
        case month >= 6 && month < 9:
            season = Season.summer;
            break;
        case month >= 9 && month < 12:
            season = Season.winter;
            break;
        case month >= 12 && month < 3:
            season = Season.autumn;
            break;
        default:
            season = Season.spring;
            break;
    }

    return (
        <div className="app">
            <AppBody season={season} />
        </div>
    );
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
