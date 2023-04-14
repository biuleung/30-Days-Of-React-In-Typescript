import { MouseEventHandler } from 'react';

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

function Header({
    setBackground,
}: {
    setBackground: MouseEventHandler<HTMLButtonElement>;
}) {
    console.log('Header rendered');
    return (
        <header style={headerStyle}>
            <div>
                <h1>Getting started</h1>
                <small>Dec 12, 2022</small>
                <p>
                    Instructor: {author.firstName} {author.lastName}
                </p>
            </div>
            <button style={{ fontSize: '28px' }} onClick={setBackground}>
                Change backgournd
            </button>
        </header>
    );
}

export default Header;
