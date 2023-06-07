import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img className="rounded-lg" src="https://c1.wallpaperflare.com/preview/233/162/362/ballet-don-quijote-theatre-performance-stage.jpg" />
                    <p className="legend">Stage Show - 12-4-2023</p>
                </div>
                <div>
                    <img className="rounded-lg" src="https://static01.nyt.com/images/2015/08/07/theater/07HAMILTON-slide-UX39/07HAMILTON-slide-UX39-videoSixteenByNineJumbo1600-v2.jpg" />
                    <p className="legend">Stage Show - 12-4-2023</p>
                </div>
            </Carousel>
    );
};

export default Banner;