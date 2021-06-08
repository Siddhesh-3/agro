import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import "../App.css"

const Landing2 = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4
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
        <div style={{marginTop:"5%"}}>
            <div>
                <img src="crop1.png" alt="crop" className="crop"></img>
                <h1 className="cropname">Crops We Nourish</h1>
                <p className="cropname2">Aries offers diverse crop nourishment products ranging from Chelates to water soluble micronutrients & fertilizers.</p>
            </div>
            <div className="slide2">
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
                    <img src="potato.png" alt="potato"></img>
                    <p style={{marginLeft:"40%"}}>Potato</p>
                </div>
                <div> 
                <img src="citrus.png" alt="citrus"></img>
                <p style={{marginLeft:"40%"}}>Citrus</p>
                </div>
                <div>
                <img src="cauliflower.png" alt="cauliflower"></img>
                <p style={{marginLeft:"40%"}}>Cauliflower</p>
                </div>
                <div>
                <img src="potato.png" alt="potato"></img>
                <p style={{marginLeft:"40%"}}>Potato</p>
                </div>
                <div>
                <img src="cauliflower.png" alt="cauliflower"></img>
                <p style={{marginLeft:"40%"}}>Cauliflower</p>
                </div>
                <div> 
                <img src="citrus.png" alt="citrus"></img>
                <p style={{marginLeft:"40%"}}>Citrus</p>
                </div>
            </Carousel>
            </div>
        </div>
    )
}

export default Landing2


