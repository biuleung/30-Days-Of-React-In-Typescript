import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

console.log('index rendered');

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

function App() {
    return (
        <div className="app">
            <>
                <Header />
                <Main />
                <Footer />
            </>
        </div>
    );
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
