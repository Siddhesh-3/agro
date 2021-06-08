import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import "../App.css"

const Landing3 = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };


    return (
        <div className="landing3">
        <div >
        <img src="crop1.png" alt="crop"></img>
        <h1>Our Range of Agricultural Products</h1>
            
        </div>
            <div className="slide3">
            <Carousel
                  swipeable={true}
                  responsive={responsive}
                  draggable={false}
                  showDots={false}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  transitionDuration={500}
                  removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                <div>
                    <img src="Jahaan.png" alt="Jahaan"></img>
                    <p style={{marginLeft:"40%"}}>Jahaan</p>
                </div>
                <div> 
                <img src="Dhanush.png" alt="Dhanush"></img>
                <p style={{marginLeft:"40%"}}>Dhanush</p>
                </div>
                <div>
                <img src="Haasil.png" alt="Haasil"></img>
                <p style={{marginLeft:"40%"}}>Haasil</p>
                </div>
                <div>
                <img src="AriPotash.png" alt="AriPotash"></img>
                <p style={{marginLeft:"40%"}}>AriPotash</p>
                </div>
                <div>
                <img src="Fertimax.png" alt="Fertimax"></img>
                <p style={{marginLeft:"40%"}}>Cauliflower</p>
                </div>
                <div> 
                <img src="Dhanush.png" alt="Dhanush"></img>
                <p style={{marginLeft:"40%"}}>Dhanush</p>
                </div>
            </Carousel>
            </div>
        </div>
    )
}

export default Landing3


