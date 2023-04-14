import axios from 'axios';
import { useEffect, useState } from 'react';
import { CountryRes } from '../../models/CountryRes';
import Countries from '../countries/Countries';
import Search from '../search/Search';
import Stats from '../stats/Stats';

function Main() {
    const [countries, setCountries] = useState<CountryRes[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [showCountries, setShowCountries] = useState<CountryRes[]>([]);

    const getCountries = async () => {
        const result: { data: CountryRes[] } = await axios.get(
            'https://restcountries.com/v3.1/all'
        );
        return result.data;
    };
    useEffect(() => {
        getCountries().then((result) => {
            setCountries(result);
        });
    }, []);

    useEffect(() => {
        setShowCountries(countries);
    }, [countries]);

    useEffect(() => {
        setShowCountries(
            countries.filter(
                (country) =>
                    country.name.common
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    (country.capital &&
                        country.capital.length &&
                        country.capital
                            .join()
                            .toLowerCase()
                            .includes(searchText.toLowerCase())) ||
                    (country.languages &&
                        Object.keys(country.languages).length > 0 &&
                        getLangs(country.languages)
                            .join()
                            .toLowerCase()
                            .includes(searchText.toLowerCase()))
            )
        );
    }, [searchText, countries]);

    const getLangs = (languages: object) => {
        const result: string[] = [];
        if (languages && Object.keys(languages).length > 0) {
            for (let lang of Object.values(languages)) {
                result.push(lang);
            }
        }
        return result;
    };
    return (
        <div className="main">
            <Search setSearchText={setSearchText} />
            <Stats />
            <Countries countries={showCountries} />
        </div>
    );
}

export default Main;
