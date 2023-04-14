import React from 'react';
import ReactDOM from 'react-dom/client';
import image01 from './images/image01.png';
import frontend_technologies from './images/frontend_technologies.png';
console.log('index rendered');

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const headerStyle = {
    border: '2px solid yellow',
    color: 'white',
    backgroundColor: 'black',
    padding: '0 12px',
};
const author = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
};
const header = (
    <header style={headerStyle}>
        <h1>Getting started</h1>
        <small>Dec 12, 2022</small>
        <p>
            Instructor: {author.firstName} {author.lastName}
        </p>
    </header>
);

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

const subscribe = (
    <div className="subscribe">
        <h1
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}>
            SUBSCRIBE
        </h1>
        <p style={{ display: 'flex', justifyContent: 'center' }}>
            Sign up with your email address to receive news and updates.
        </p>

        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '7px',
                margin: '36px 0 18px 0',
            }}>
            <input placeholder="First name"></input>
            <input placeholder="Last name"></input>
            <input placeholder="Email name"></input>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
                style={{
                    width: '20%',
                    color: 'white',
                    fontSize: '18px',
                    marginTop: '12px',
                    padding: '8px 5px',
                    backgroundColor: '#AFEEEE',
                    border: '1px solid #AFEEEE',
                    borderRadius: '5px',
                }}>
                Subscribe
            </button>
        </div>
    </div>
);

const skills = [
    'HTML',
    'CSS',
    'Sass',
    'JS',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'Flask',
    'Django',
    'NumPy',
    'Pandas',
    'Data Analysis',
    'MYSQL',
    'GraphQL',
    'D3.js',
    'Gatsby',
    'Docker',
    'Heroku',
    'Git',
];

const joinMonth = new Date().toLocaleString('default', { month: 'short' });
const joinDate = new Date().getDate();
const joinYear = new Date().getFullYear();

const userCard = (
    <div className="userCard">
        <div className="picture">
            <img width="10%" height="10%" src={image01} alt="Tiger" />
        </div>
        <div className="name">
            <span>Tiger</span>
            <span className="sign">&#10003;</span>
        </div>
        <div className="title">Senior hunter</div>
        <div className="skills">SKILLS</div>
        <div className="skillContent">
            {skills?.map((skill) => (
                <div className="skill">{skill}</div>
            ))}
        </div>
        <div className="date">
            <span>Join on </span>
            <span>{joinMonth} </span>
            <span>{joinDate}, </span>
            <span>{joinYear}</span>
        </div>
    </div>
);

let date = new Date().getFullYear();

const footer = (
    <footer className="footer">
        <p>copyright {date}</p>
    </footer>
);

const app = (
    <div className="app">
        {header}
        {main}
        {user}
        {subscribe}
        {userCard}
        {footer}
    </div>
);
root.render(<React.StrictMode>{app}</React.StrictMode>);
