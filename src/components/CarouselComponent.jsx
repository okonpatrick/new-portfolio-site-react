<<<<<<< HEAD
=======
// import "react-multi-carousel/lib/styles.css";
// import { useState } from "react";
// const ReactCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handlePrev = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
//   };

//   const handleNext = () => {
//     setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
//   };

//   const slides = [
//     {
//       src: codingwithclient,
//       caption:
//         "My digital skills enable me to create functional and visually appealing UI and applications. I deliver exceptional results and drive growth that meet the unique needs of my clients and employers.",
//       title: "Web Development",
//     },
//     {
//       src: graphicDesign,
//       caption: "I create visually appealing designs that suit your needs!",
//       title: "Graphic Design",
//     },
//     {
//       src: entrepreneurship,
//       caption:
//         "I leverage my digital skills in a customer-centric and result-driven way!",
//       title: "Entrepreneurship",
//     },
//   ];

//   return (
//     <div className="carousel-div">
//       <div
//         id="carouselExampleCaptions"
//         className="carousel slide"
//         data-coreui-ride="false"
//       >
//         <div className="carousel-indicators">
//           {slides.map((slide, index) => (
//             <button
//               key={index}
//               type="button"
//               onClick={() => setActiveIndex(index)}
//               className={activeIndex === index ? "active" : ""}
//               aria-current={activeIndex === index ? "true" : undefined}
//               aria-label={`Slide ${index + 1}`}
//             ></button>
//           ))}
//         </div>
//         <div className="carousel-inner">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`carousel-item ${
//                 activeIndex === index ? "active" : ""
//               }`}
//             >
//               <img
//                 src={slide.src}
//                 className="d-block w-100 carousel-image"
//                 alt={`Slide ${index + 1}`}
//               />
//               <div className="carousel-caption text-center justify-content: center text-sm-center p-0">
//                 <h2>{slide.title}</h2>
//                 <p>{slide.caption}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           onClick={handlePrev}
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           onClick={handleNext}
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ReactCarousel;


>>>>>>> e2d8a3c8c7639ff73065e9002b6e12b026b3213c
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
<<<<<<< HEAD
                <h1 className="legend text-bold-500">Web Design Skills</h1>
                <p>I create visually appealing web designs that suit your needs!
=======
                <h1 className="legend text-bold-500">Graphic Design</h1>
                <p>I create visually appealing designs that suit your needs!
>>>>>>> e2d8a3c8c7639ff73065e9002b6e12b026b3213c
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
