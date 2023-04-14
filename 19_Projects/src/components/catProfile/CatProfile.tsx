import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import { CatData } from '../catParadise/CatParadise';

function CatProfile({ catData }: { catData: CatData[] }) {
    let baseUrl = 'https://api.thecatapi.com/v1/images/search?breed_id=';
    let breedId = '';

    const [apiUrl, setApiUrl] = useState(baseUrl);

    const [catProfile, setCatProfile] = useState<{
        name: string;
        imgUrl: string;
        width: number;
        height: number;
    }>({
        name: '',
        imgUrl: '',
        width: 0,
        height: 0,
    });

    useEffect(() => {
        axios
            .get(apiUrl)
            .then(
                (res: {
                    data: { url: string; width: number; height: number }[];
                }) => {
                    if (res?.data?.length) {
                        const pic = res.data[0];
                        setCatProfile((prevState) => {
                            return {
                                ...prevState,
                                imgUrl: pic.url,
                                height: pic.height,
                                width: pic.width,
                            };
                        });
                    }
                }
            );
    }, [apiUrl]);

    const handlePickCatProfile = () => {
        const randomCatProfile =
            catData[Math.floor(Math.random() * catData.length - 1)];
        breedId = randomCatProfile.id;
        setCatProfile((prevState) => {
            return {
                ...prevState,
                imgUrl: '',
                name: randomCatProfile.name,
            };
        });

        setApiUrl(() => baseUrl + breedId);
    };

    return (
        <div className="d-block">
            <div className="d-flex justify-content-center align-items-center">
                <h1 className="mb-0 me-2">Cat Profile</h1>
                <div
                    style={{ fontSize: '24px', cursor: 'pointer' }}
                    onClick={handlePickCatProfile}>
                    <AiOutlineReload />
                </div>
            </div>
            <h2>{catProfile.name}</h2>
            <img
                className="rounded mx-auto d-block"
                src={catProfile.imgUrl}
                alt="Cat loading"
                width={catProfile.width * 0.3}
                height={catProfile.height * 0.3}
            />
        </div>
    );
}

export default CatProfile;
