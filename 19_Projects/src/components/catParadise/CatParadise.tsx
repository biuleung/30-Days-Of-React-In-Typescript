import axios from 'axios';
import { useEffect, useState } from 'react';
import CatProfile from '../catProfile/CatProfile';
import styled from './CatParadise.module.css';
import { AiOutlineReload } from 'react-icons/ai';

export type CatData = {
    life_span: string;
    weight: { metric: string };
    origin: string;
    name: string;
    id: string;
};

function CatParadise() {
    const [catData, setCatData] = useState<CatData[]>([]);
    const [numOfBreeds, setNumOfBreeds] = useState(0);
    const [averageWeight, setAverageWeight] = useState(0);
    const [averageLive, setAverageLive] = useState(0);
    const [numOfCountriesHaveCatBreeds, setNumOfCountriesHaveCatBreeds] =
        useState(0);
    const [countryHasHighestCatBreeds, setCountryHasHighestCatBreeds] =
        useState('');

    const [countryRanking, setCountryRanking] = useState<string[]>([]);

    useEffect(() => {
        fetchCatsData().then((res: { data: CatData[] }) => {
            setCatData(() => res.data);
        });
    }, []);

    useEffect(() => {
        if (!catData.length) {
            return;
        }
        setNumOfBreeds(catData.length);

        const weightData = catData.map((item) => item.weight.metric);
        setAverageWeight(Number(getAverage(weightData).toFixed(2)));

        const liveData = catData.map((item) => item.life_span);
        setAverageLive(Number(getAverage(liveData).toFixed(2)));

        setNumOfCountriesHaveCatBreeds(
            catData
                .map((item) => item.origin)
                .filter((country, index, countries) => {
                    return countries.indexOf(country) === index;
                }).length
        );

        const duplicateCountries = catData
            .map((item) => item.origin)
            .filter((country, index, countries) => {
                return countries.indexOf(country) !== index;
            });

        const devidedCountries = new Map<string, number>();

        duplicateCountries.sort().forEach((country, index) => {
            if (index + 1 === duplicateCountries.length) {
                return;
            }
            if (country !== duplicateCountries[index + 1]) {
                devidedCountries.set(duplicateCountries[index + 1], 1);
            } else {
                const getNum = devidedCountries.get(country);
                getNum
                    ? devidedCountries.set(country, getNum + 1)
                    : devidedCountries.set(country, 0);
            }
        });

        const countryhasHighest = { name: '', num: 0 };
        devidedCountries.forEach((num, name) => {
            if (num > countryhasHighest.num) {
                countryhasHighest.name = name;
                countryhasHighest.num = num;
            }
        });
        setCountryHasHighestCatBreeds(countryhasHighest.name);

        const countryRanking = [];

        for (const [key, value] of Array.from(devidedCountries)) {
            countryRanking.push({ name: key, num: value });
        }

        countryRanking.sort((a, b) => {
            if (a.num < b.num) return -1;
            else return 1;
        });
        setCountryRanking(countryRanking.map((country) => country.name));
    }, [catData]);

    const getStringToNumber = (str: string): number => {
        if (!str.length) {
            return 0;
        }
        return (
            str
                .split(' - ')
                .reduce((acc, current) => acc + Number(current), 0) / 2
        );
    };

    const getAverage = (weights: string[]): number => {
        let totalWeight = 0;
        weights.forEach((metric) => {
            totalWeight += getStringToNumber(metric);
        });
        return totalWeight / weights.length;
    };

    const fetchCatsData = () => {
        const url = 'https://api.thecatapi.com/v1/breeds';
        const data = axios.get(url);
        return data;
    };

    return (
        <div className={styled.content}>
            <h1>Cat Paradise</h1>
            <p className="d-flex align-items-center">
                There are{' '}
                <span className={styled.spotlight}>{numOfBreeds}</span> cat
                breeds
            </p>
            <p className={styled.catsStats}>
                On average a cat can weight about{' '}
                <span className={styled.spotlight}>{averageWeight}</span> Kg and
                live <span className={styled.spotlight}>{averageLive}</span>{' '}
                years.
            </p>
            <p className={styled.catsStats}>
                <span className={styled.spotlight}>
                    {numOfCountriesHaveCatBreeds}
                </span>{' '}
                countries have cat breeds.
            </p>
            <div className={styled.catsStats + ' d-flex align-items-center'}>
                <h2 className={styled.countryName + ' m-0'}>
                    {countryHasHighestCatBreeds}
                </h2>
                <span>&nbsp;has the highest number of cat breeds.</span>
            </div>
            <div className="d-block">
                <h2>
                    Countries in ascending order based on the number of cat
                    breeds:
                </h2>
                <div className="px-1">
                    {countryRanking.map((country, index) => (
                        <em
                            key={index}
                            className={
                                styled.rankingCountryName +
                                ' ' +
                                styled.countryName +
                                ' mx-2'
                            }>
                            {country}
                        </em>
                    ))}
                </div>
            </div>
            <CatProfile catData={catData} />
        </div>
    );
}

export default CatParadise;
