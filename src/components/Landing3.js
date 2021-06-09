import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Grid} from '@material-ui/core'
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
        <div className="landing3">
         <Grid lg={12} xs={12} sm={12} container direction="row">
        <Grid container item xs={2}>
            
        <img src="crop1.png" alt="crop" className="crop2"></img>
        </Grid>

        <Grid container item xs={6}>
        <h1 className="lan3text">Our Range of<br></br> Agricultural Products</h1>
        </Grid>

        </Grid>       
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
                <img src="Jahaan.png" alt="Jahaan" className="productimg"></img>
                    <p style={{marginLeft:"40%"}}>Jahaan</p>
                </div>
                <div> 
                <img src="Dhanush.png" alt="Dhanush"  className="productimg"></img>
                     <p style={{marginLeft:"40%"}}>Dhanush</p>
                </div>
                <div>
                <img src="Haasil.png" alt="Haasil"  className="productimg"></img>
                     <p style={{marginLeft:"40%"}}>Haasil</p>
                </div>
                <div>
                <img src="AriPotash.png" alt="AriPotash"  className="productimg"></img>
                     <p style={{marginLeft:"40%"}}>AriPotash</p>
                </div>
                <div>
                <img src="Fertimax.png" alt="Fertimax"  className="productimg"></img>
                    <p style={{marginLeft:"40%"}}>Cauliflower</p>
                </div>
                <div> 
                <img src="Dhanush.png" alt="Dhanush"  className="productimg"></img>
                     <p style={{marginLeft:"40%"}}>Dhanush</p>
                </div>
            </Carousel>
            </div>
        </div>
    )
}

export default Landing3


