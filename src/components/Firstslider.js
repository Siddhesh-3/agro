import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'टोमॅटो च्य प्लॉट ला प्रत्यक्ष भेट',
    imgPath:"first.jpg"
    
  },
  {
    label: 'Manufacturing Quality of Products',
    imgPath:
      'second.jpg',
    
  },
  {
    label: 'Award Winning Marketing',
    imgPath:
    '	third.jpg',
     
  }

];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
     
  },
  header: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    backgroundcolor: 'black',
    color: 'white',
    paddingleft: '20px',
    paddingright: '20px'
    
  },
  img: {
    height: '100%',
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
    // overflow: 'hidden',
    // overflowY: 'hidden',
    // overflowX: 'hidden',
    
  },
}));

function Firstslider() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = tutorialSteps.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
          
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>  
            {/* img */}
            {Math.abs(activeStep - index) <= 2 ? (
                <div className="container" >
                <img className={classes.img} src={step.imgPath} alt={step.label} />
                <div class="text-block">
                <h1 className="imgtext">{step.label}</h1>
                </div>
                
                </div>
            ) : null}


          </div>
 
        ))}
      </AutoPlaySwipeableViews>
      
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </Button>
        }
      /> */}
    </div>
  );
}

export default Firstslider;
