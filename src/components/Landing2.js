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
                <h1 className="cropname">पिके </h1>
                <p className="cropname2">मेष चीलेट्सपासून पाण्यामध्ये विरघळणारे मायक्रोन्यूट्रिएंट्स आणि खते यांच्यापासून विविध पिकाचे पोषण आहार देतात.</p>
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
                    <p style={{marginLeft:"40%"}}>बटाटा</p>
                </div>
                <div> 
                <img src="m.png" alt="citrus"></img>
                <p style={{marginLeft:"40%"}}>मिरची</p>
                </div>
                <div>
                <img src="soya.png" alt="cauliflower"></img>
                <p style={{marginLeft:"40%"}}>सोयाबीन</p>
                </div>
                <div>
                <img src="water.png" alt="potato"></img>
                <p style={{marginLeft:"40%"}}>कलिंगड</p>
                </div>
                <div>
                <img src="maka.png" alt="cauliflower"></img>
                <p style={{marginLeft:"40%"}}>मका</p>
                </div>
                <div> 
                <img src="mari.png" alt="citrus"></img>
                <p style={{marginLeft:"40%"}}>झेंडू</p>
                </div>
                <div> 
                <img src="bijli.png" alt="citrus"></img>
                <p style={{marginLeft:"40%"}}>बिजली</p>
                </div>
                <div> 
                <img src="shevanta.png" alt="citrus"></img>
                <p style={{marginLeft:"40%"}}>शेवंती</p>
                </div>
                <div> 
                <img src="aster.png" alt="citrus"></img>
                <p style={{marginLeft:"40%"}}>ॲस्टर</p>
                </div>
            </Carousel>
            </div>
        </div>
    )
}

export default Landing2


