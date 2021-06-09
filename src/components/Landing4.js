import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import "../App.css"

const Landing4 = () => {

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
                <img src="News.jpg" alt="news" className="news"></img>
                <h1 className="newsname">News & Updates</h1>
            </div>
            <div className="slide4">
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
                <div className="newsimg">
                <img src="news1.jpg" className="newsimg" alt="news1"></img>
                <p style={{textAlign:"center"}}>Eastern Region Rabi Booking & Flash Sale, Kolkata Sept 2018</p>
                </div>
                <div className="newsimg"> 
                <img src="news2.jpeg" className="newsimg" alt="news2"></img>
                <p style={{textAlign:"center"}}>Aries is Brand of choice for millions of farmers</p>
                </div>
                <div className="newsimg">
                <img src="news3.jpg" className="newsimg" alt="news1"></img>
                <p style={{textAlign:"center"}}>South Dealer Meet Sept 2018</p>
                </div>
                <div className="newsimg">
                <img src="news4.jpeg" className="newsimg" alt="news1"></img>
                <p style={{textAlign:"center"}}>Patana FUTURA Event Aug-2018</p>
                </div>
                <div className="newsimg">
                <img src="news1.jpg" className="newsimg" alt="news1"></img>
                <p style={{textAlign:"center"}}>Patana FUTURA Event Aug-2018</p>
                </div>
                <div className="newsimg"> 
                <img src="news2.jpeg" className="newsimg" alt="news1"></img>
                <p style={{textAlign:"center"}}>Patana FUTURA Event Aug-2018</p>
                </div>
            </Carousel>
            </div>
        </div>
    )
}

export default Landing4


