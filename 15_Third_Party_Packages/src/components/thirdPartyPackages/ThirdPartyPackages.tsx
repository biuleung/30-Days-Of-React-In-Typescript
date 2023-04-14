import Styles from '../../styles/thirdPartyPackages.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
    TiSocialLinkedinCircular,
    TiSocialGithubCircular,
    TiSocialTwitterCircular,
} from 'react-icons/ti';
import moment from 'moment';

function ThirdPartyPackages() {
    const [countries, setCountries] = useState<string[]>([]);
    const API_URL =
        'http://universities.hipolabs.com/search?country=United+States';

    const fetchCountries = () => {
        axios.get(API_URL).then((res) => {
            const data = res.data as Array<any>;
            setCountries(() =>
                data
                    .slice(0, 20)
                    .map((country: { name: string }) => country.name)
            );
        });
    };

    useEffect(() => {
        fetchCountries();
        return () => {};
    }, []);

    return (
        <>
            <p className={Styles.title}>Third party packages</p>
            <p>Countries:</p>
            <p>{countries.join(', ')}</p>
            <div className="d-flex justify-content-center display-3">
                <TiSocialLinkedinCircular />
                <TiSocialGithubCircular />
                <TiSocialTwitterCircular />
            </div>
            <div>
                <p>
                    This challenge was started {moment('2022-12-01').fromNow()}
                </p>
                <p>
                    The challenge will be over in{' '}
                    {moment('2022-12-31').fromNow()}
                </p>
                <p>
                    Today is {moment(new Date()).format('MMMM DD, YYYY HH:mm')}
                </p>
            </div>
        </>
    );
}

export default ThirdPartyPackages;
