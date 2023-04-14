import { Link, Outlet } from 'react-router-dom';

function Main() {
    return (
        <div className="main">
            <h1>main</h1>
            <div className="d-flex w-100 vh-100 border-top">
                <div
                    style={{
                        width: '10%',
                        borderRight: '1px solid lightgray',
                        marginRight: '12px',
                    }}>
                    <h3>Side</h3>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to={`contacts`}>Contacts</Link>
                                </li>
                                <li>
                                    <Link to={`home`}>Home</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Main;
