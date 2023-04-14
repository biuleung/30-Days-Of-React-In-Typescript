import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import {
    createBrowserRouter,
    RouterProvider,
    useNavigation,
} from 'react-router-dom';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import { loader as contactsLoader } from './pages/Contacts';
import { loader as contactLoader } from './pages/Contact';
import Contact from './pages/Contact';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <div>Error Page</div>,
        children: [
            {
                path: 'home/',
                element: <Home />,
            },
            {
                path: 'contacts',
                loader: contactsLoader,
                element: <Contacts />,
                children: [
                    {
                        path: 'contact/:id',
                        loader: contactLoader as any,
                        element: <Contact />,
                    },
                ],
            },
        ],
    },
]);

function LoadingBar() {
    const { state } = useNavigation();
    return (
        <p>
            {state === 'loading' && (
                <progress
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100vw',
                    }}
                />
            )}
            return{' '}
        </p>
    );
}

function App() {
    return (
        <>
            <Header />
            <LoadingBar />
            <Main />
            <Footer />
        </>
    );
}

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
