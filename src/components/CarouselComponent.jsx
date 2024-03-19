import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import graphicDesign from ".././assets/img/graphicDesign2.jpg";
import codingwithclient from ".././assets/img/softwarepics2.jpg";
import entrepreneurship from ".././assets/img/banner-bg5.jpg";

const ReactCarousel = () => {
    return (
        <Carousel>
            <div>
                <img src={graphicDesign} style={{ width: "30%" }}/>
                <h1 className="legend text-bold-500">Web Design Skills</h1>
                <p>I create visually appealing web designs that suit your needs!
                </p>
            </div>
            <div>
                <img src={codingwithclient} style={{ width: "30%" }}/>
                <h1 className="legend">Software Development</h1>
                <p>My digital skills enable me to create functional and visually appealing UI and applications. I deliver exceptional results and drive growth that meet the unique needs of my clients and employers</p>
            </div>
            <div>
                <img src={entrepreneurship} style={{ width: "30%" }} />
                <h1 className="legend font-bold">Entrepreneurship </h1>
                <p>I leverage my digital skills in a customer-centric and result-driven way!</p>
            </div>
        </Carousel>
    );
};

export default ReactCarousel;
