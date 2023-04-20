import { PictureOfTheDay } from "../PictureOfTheDay/PictureOfTheDay";

import "./style.scss";

function App() {
    return (
        <div className="Content">
            <h1 className="Content__title">Astronomy Picture of the Day</h1>
            <PictureOfTheDay />
        </div>
    );
}

export default App;
