import CountryCard from '../country-card/CountryCard';
import Style from './Countries.module.scss';
import { CountryRes } from '../../models/CountryRes';

function Countries({ countries }: { countries: CountryRes[] }) {
    return (
        <div className={Style.countryWrap}>
            {countries.map((country) => (
                <CountryCard
                    name={country.name}
                    capital={country.capital}
                    flags={country.flags}
                    currencies={country.currencies}
                    languages={country.languages}
                    population={country.population}
                    key={country.name.common}
                />
            ))}
        </div>
    );
}

export default Countries;
