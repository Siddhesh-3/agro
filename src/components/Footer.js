import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Button, Paper } from '@material-ui/core';

const Footer = () => {
    return (
        <div style={{ height: 600 }}>
            <div style={{ backgroundColor: "#f2f2f2", fontFamily: 'Arial' }}>
                <Grid container direction="row" xs={12} lg={12} sm={12} md={12}>
                    <Grid lg={4} md={4} sm={12} xs={12} style={{ color: "#ffffff" }} >
                        <h2 style={{ color: "#569f4f", textAlign: "center" }}>Adi शिवशक्ती Agro limited</h2>
                        <Grid>
                            <div>
                                <h4 style={{ color: "#808080", textAlign: "center" }}>सह्याद्री विद्यालया समोर,<br></br> ब्राह्मणवाडा, अकोले, अहमदनगर -422610 </h4>
                                <h4 style={{ color: "#808080", textAlign: "center" }}>मोबाइल नंबर: <a href="tel:7775998692">7775998692</a></h4>
                                <h4 style={{ color: "#808080", textAlign: "center" }}>ई-मेल: <a style={{ color: "#3366ff" }} href="mailto:aadishivshaktiagro427@gmail.com">aadishivshaktiagro427@gmail.com</a> </h4>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid  container direction="row" lg={12} md={12} sm={12} xs={12} style={{ marginLeft:"15%"}}>
                        <div style={{ marginTop: "2%" }}>
                            <a1 target="_blank" class="icon fab fa-facebook-f" ></a1>
                            &nbsp;  &nbsp;
                            &nbsp;  &nbsp;
                            <a3 target="_blank" class="icon fab fa-instagram"></a3>

                        </div>

                    </Grid>
                        {/* <div>
                            <h6 style={{ 
                                color: "black",marginLeft:"15%" }}>दर्शविलेली सर्व उत्पादने चित्रे केवळ स्पष्टीकरण<br></br> हेतूसाठी आहेत. उत्पादन वाढीमुळे वास्तविक उत्पादन<br></br> बदलू शकते.</h6>
                        </div> */}
                    <Grid lg={12} md={12} sm={12} xs={12} >
                        <p style={{ textAlign: "center", marginTop: "5%" }}>© 2021 by Adi Shivshakti Agro limited ® </p>

                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Footer
