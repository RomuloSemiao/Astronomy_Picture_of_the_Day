import axios from "axios";
import { useEffect, useState } from "react";

import "./style.scss";

interface IDataPicture {
    autor: string;
    day: string;
    description: string;
    image: string;
    title: string;
}

const PictureOfTheDay = () => {
    const [dataPicture, setDataPicture] = useState<IDataPicture>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get(
                "https://api.nasa.gov/planetary/apod?api_key=YjlcVhv3Fbg1ocyXeMucfxmA7VpUt3pi1GpahSSj"
            )
            .then(function (response) {
                setDataPicture({
                    autor: response.data.copyright,
                    day: response.data.date,
                    description: response.data.explanation,
                    image: response.data.hdurl,
                    title: response.data.title,
                });
                setIsLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setIsLoading(false);
            });
    }, []);

    isLoading && <>...Loading</>;

    return (
        <div className="PictureOfTheDay">
            <img
                className="PictureOfTheDay__image"
                src={dataPicture?.image}
                alt={dataPicture?.title}
            />
            <p className="PictureOfTheDay__description">
                {dataPicture?.description}
            </p>
            <p className="PictureOfTheDay__photo-properties">
                {dataPicture?.title} - {dataPicture?.autor}
            </p>
        </div>
    );
};

export { PictureOfTheDay };
