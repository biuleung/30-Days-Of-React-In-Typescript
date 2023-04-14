import { ChangeEvent } from 'react';
import Style from './Search.module.scss';

function Search({ setSearchText }: { setSearchText: any }) {
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };
    return (
        <div className="d-flex justify-content-center">
            <div className="w-100 d-flex justify-content-center">
                <input
                    onChange={handleInput}
                    placeholder="Search countries by name, city and language"
                    className={Style.searchCountries}
                />
            </div>
        </div>
    );
}

export default Search;
