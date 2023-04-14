import React, { MouseEventHandler } from 'react';
import ReactDOM from 'react-dom/client';
console.log('index rendered');

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

class Square extends React.Component<{
    num: number | string;
    colorCode: string;
}> {
    render() {
        const { num, colorCode } = this.props;
        return (
            <div
                className="number d-flex justify-content-center align-items-center"
                style={{ background: colorCode, color: 'white' }}>
                {num}
            </div>
        );
    }
}

//In the following design, evens are green, odds are yellow and prime numbers are red. Build the following colors using React component

class Numbers extends React.Component<{ number: number }> {
    isPrime = (num: number): boolean => {
        if (!isFinite(num) || num < 2) {
            return false;
        }
        const sqrtNum = Math.floor(Math.sqrt(num));
        for (let i = 2; i <= sqrtNum; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    render() {
        const { number } = this.props;
        const rendered = [];
        for (let num = 0; num < number; num++) {
            let colorCode = 'green';

            if (num % 2 === 1) {
                colorCode = 'yellow';
            }

            if (this.isPrime(num)) {
                colorCode = 'red';
            }

            rendered.push(<Square key={num} num={num} colorCode={colorCode} />);
        }
        return <div className="numbers">{rendered}</div>;
    }
}

class NumberGenerator extends React.Component {
    number = 32;

    render() {
        return (
            <>
                <h1 className="d-flex justify-content-center">Day 6</h1>
                <h2 className="d-flex justify-content-center">
                    Number generator
                </h2>
                <div className="d-flex justify-content-center">
                    <Numbers number={this.number} />
                </div>
            </>
        );
    }
}

function HexaColors({ number }: { number: number }) {
    const rendered = [];

    const hexaCode = () => {
        const hexaStr = '123456789abcdef';
        let code = '';
        for (let i = 0; i < 6; i++) {
            code += hexaStr[Math.floor(Math.random() * hexaStr.length)];
        }

        return '#' + code;
    };

    for (let num = 0; num < number; num++) {
        let colorCode = hexaCode();
        rendered.push(
            <Square key={colorCode} num={colorCode} colorCode={colorCode} />
        );
    }
    return <div className="hexaColors">{rendered}</div>;
}

function HexaColorsGenerator() {
    const number = 32;
    return (
        <div className="mt-3-rem">
            <h2 className="d-flex justify-content-center">
                Hexadecimal Colors
            </h2>
            <div className="d-flex justify-content-center">
                <HexaColors number={number} />
            </div>
        </div>
    );
}

function Bar({ percentage }: { percentage: number }) {
    return (
        <div className="d-flex">
            <div
                style={{
                    width: percentage * 100 + '%',
                    background: 'orange',
                    borderRadius: '3px',
                    fontSize: '1.5rem',
                }}>
                &nbsp;
            </div>
            <div style={{ width: (1 - percentage) * 100 + '%' }}></div>
        </div>
    );
}

class ChartBar extends React.Component<{
    country: string;
    percentage: number;
    population: number;
}> {
    render() {
        const { country, percentage, population } = this.props;

        return (
            <div className="chartBar d-flex">
                <div className="country">{country.toUpperCase()}</div>
                <div className="bar">
                    <Bar percentage={percentage} />
                </div>
                <div className="population">{population.toLocaleString()}</div>
            </div>
        );
    }
}

type Data = {
    items: { country: string; population: number }[];
};

function Chart({ items }: Data) {
    const worldPopulation = items[0].population;
    const getCountryPopulationRatio = (population: number) => {
        return population / worldPopulation;
    };
    return (
        <div className="w-80 mt-1-rem">
            {items.map((item) => {
                return (
                    <ChartBar
                        country={item.country}
                        percentage={getCountryPopulationRatio(item.population)}
                        population={item.population}
                    />
                );
            })}
        </div>
    );
}

function WorldPopulation() {
    let tenHighestPopulation = [
        { country: 'World', population: 7693165599 },
        { country: 'China', population: 1377422166 },
        { country: 'India', population: 1295210000 },
        { country: 'United States of America', population: 323947000 },
        { country: 'Indonesia', population: 258705000 },
        { country: 'Brazil', population: 206135893 },
        { country: 'Pakistan', population: 194125062 },
        { country: 'Nigeria', population: 186988000 },
        { country: 'Bangladesh', population: 161006790 },
        { country: 'Russian Federation', population: 146599183 },
        { country: 'Japan', population: 126960000 },
    ];
    tenHighestPopulation.sort((a, b) => b.population - a.population);
    return (
        <div className="mt-3-rem">
            <h2 className="d-flex justify-content-center">World population</h2>
            <small className="d-flex justify-content-center">
                Ten most populated countries
            </small>
            <div className="d-flex justify-content-center">
                <Chart items={tenHighestPopulation} />
            </div>
        </div>
    );
}

class Button extends React.Component<{
    onClick: MouseEventHandler<HTMLButtonElement>;
}> {
    render() {
        return (
            <div className="d-flex justify-content-center mt-3-rem mb-3-rem">
                <button onClick={this.props.onClick}>Show</button>
            </div>
        );
    }
}

const onClick = () => {
    alert('Clicked');
};

const app = (
    <div className="app">
        <>
            <NumberGenerator />
            <HexaColorsGenerator />
            <WorldPopulation />
            <Button onClick={onClick} />
        </>
    </div>
);
root.render(<React.StrictMode>{app}</React.StrictMode>);
