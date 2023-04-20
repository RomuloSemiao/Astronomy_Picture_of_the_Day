import axios from "axios";
import { useEffect, useState } from "react";

import "./style.scss";

interface IDataPicture {
    autor: string;
    image: string;
    title: string;
}

const PictureOfTheDay = () => {
    const [dataPicture, setDataPicture] = useState<IDataPicture>();

    const date = new Date(); // Get the current date
    const formattedDate = date.toLocaleDateString();

    useEffect(() => {
        axios
            .get(
                "https://api.nasa.gov/planetary/apod?api_key=YjlcVhv3Fbg1ocyXeMucfxmA7VpUt3pi1GpahSSj"
            )
            .then(function (response) {
                setDataPicture({
                    autor: response.data.copyright,
                    image: response.data.url,
                    title: response.data.title,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div className="PictureOfTheDay">
            <img
                className="PictureOfTheDay__image"
                src={dataPicture?.image}
                alt={dataPicture?.title}
            />
            <p className="PictureOfTheDay__date">{formattedDate}</p>
            <p className="PictureOfTheDay__photo-properties">
                <em>"{dataPicture?.title}"</em> - {dataPicture?.autor}
            </p>
            <div className="PictureOfTheDay__bottom">
                <a
                    className="PictureOfTheDay__link-linkedin"
                    href="https://www.linkedin.com/in/romulosemiao/"
                    target="_blank"
                >
                    DEV
                </a>
                <a
                    className="PictureOfTheDay__link-github"
                    href="https://github.com/RomuloSemiao"
                    target="_blank"
                >
                    Github
                </a>
                <a
                    className="PictureOfTheDay__link-image"
                    href={dataPicture?.image}
                    target="_blank"
                >
                    Picture
                </a>
                <a
                    className="PictureOfTheDay__link-api"
                    href="https://api.nasa.gov/"
                    target="_blank"
                >
                    API
                </a>
            </div>
        </div>
    );
};

export { PictureOfTheDay };
