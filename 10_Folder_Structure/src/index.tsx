import React, { MouseEventHandler } from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import image01 from './assets/images/image01.png';
import frontend_technologies from './assets/images/frontend_technologies.png';
import { countriesData } from './data/countries';
import './styles/styles.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

console.log('index rendered');

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
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

function Flag({ flagUrl, name }: { flagUrl: string; name: string }) {
    return (
        <div className="d-flex justify-content-center mt-4">
            <img
                className="px-2 shadow rounded"
                src={flagUrl}
                alt={name}
                width="320px"
                height="220px"
            />
        </div>
    );
}

type CountryInfo = {
    name: string;
    capital: string;
    languages: string[];
    population: number;
    flag: string;
    currency: string;
};

function Country({ countryData }: { countryData: CountryInfo }) {
    const { name, capital, population, currency, languages, flag } =
        countryData;
    return (
        <div className="w-50 bg-white  shadow rounded">
            <Flag flagUrl={flag} name={name} />
            <div className="ps-4">
                <h2 className="d-flex justify-content-center">{name}</h2>
                <p>
                    <span>Capital: </span>
                    <span>{capital}</span>
                </p>
                <p>
                    <span>Languages: </span>
                    {languages.join(', ')}
                </p>
                <p>
                    <span>Population: </span>
                    <span>{population}</span>
                </p>
                <p>
                    <span>Currency: </span>
                    <span>{currency}</span>
                </p>
            </div>
        </div>
    );
}

// type CountryType = {
//     name: string;
//     capital: string;
//     languages: string[];
//     population: number;
//     flag: string;
//     currency: string;
// };

// class PickCountryClass extends React.Component<
//     {},
//     { selectedCountry: CountryType }
// > {
//     constructor(props: any) {
//         console.log('Class based PickCountry rendered');

//         super(props);
//         this.state = {
//             selectedCountry: countriesData[0],
//         };
//     }

//     onSelectCountry = () => {
//         this.setState({
//             selectedCountry:
//                 countriesData[
//                     Math.floor(Math.random() * countriesData.length - 1)
//                 ],
//         });
//     };

//     render() {
//         return (
//             <div className="p-5">
//                 <div className="d-flex justify-content-center">
//                     <Country countryData={this.state.selectedCountry} />
//                 </div>
//                 <div className="d-flex justify-content-center mt-3">
//                     <button
//                         onClick={this.onSelectCountry}
//                         className="px-4 py-2 rounded border-0 bg-info text-white">
//                         Select country
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }

function PickCountryFunc() {
    console.log('Func PickCountry rendered');

    const [selectedCountry, setSelectedCountry] = useState(countriesData[0]);
    const onSelectCountry = () => {
        setSelectedCountry(
            countriesData[Math.floor(Math.random() * countriesData.length - 1)]
        );
    };

    return (
        <div className="p-5">
            <div className="d-flex justify-content-center">
                <Country countryData={selectedCountry} />
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button
                    onClick={onSelectCountry}
                    className="px-4 py-2 rounded border-0 bg-info text-white">
                    Select country
                </button>
            </div>
        </div>
    );
}

function App() {
    const [background, setBackgournd] = useState('#E0FFFF');
    const onSetBackgroundClick = () => {
        setBackgournd(() => {
            return background === '#E0FFFF' ? '#033E3E' : '#E0FFFF';
        });
    };

    return (
        <div className="app" style={{ background: background }}>
            <>
                <Header setBackground={onSetBackgroundClick} />
                {main}
                {user}
                <PickCountryFunc />
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
