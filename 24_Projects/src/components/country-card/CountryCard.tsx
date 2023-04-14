import { CountryRes } from '../../models/CountryRes';
import Style from './CountryCard.module.scss';

function CountryCard(props: CountryRes) {
    const { name, capital, flags, languages, population, currencies } = props;

    const getLangs = (languages: object) => {
        const result: string[] = [];
        if (languages && Object.keys(languages).length > 0) {
            for (let lang of Object.values(languages)) {
                result.push(lang);
            }
        }
        return result;
    };

    const getCurrencies = (currencies: object) => {
        const result: string[] = [];
        if (currencies && Object.keys(currencies).length > 0) {
            for (let currrency of Object.keys(currencies)) {
                result.push(currrency);
            }
        }
        return result;
    };

    return (
        <div className={Style.countryCard}>
            <div className={Style.countryFlag}>
                <img src={flags.png} alt={name.common} />
            </div>
            <h3 className={Style.countryName}>{name.common}</h3>
            <div>
                <p>
                    <span>Capital: {capital}</span>
                </p>
                <p>
                    <span>Languages: {getLangs(languages).join(', ')}</span>
                </p>
                <p>
                    <span>Population: {population.toLocaleString()}</span>
                </p>
                <p>
                    <span>
                        Currency: {getCurrencies(currencies).join(', ')}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default CountryCard;
