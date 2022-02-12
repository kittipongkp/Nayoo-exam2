import React, {useEffect, useState} from "react";
import Header from "./Header";
import { Container, Row } from "react-bootstrap";
import Stepper from 'bs-stepper'
import 'bs-stepper/dist/css/bs-stepper.min.css';

const Login = () => {

    
    function getSteps() {
        return ['Home', 'Form', 'Accept'];
      }
      //const classes = useStyles();
      const [activeStep, setActiveStep] = useState(0);

      const steps = getSteps();
    
      const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
      };
    
      const handleReset = () => {
        setActiveStep(0);
      };
      
      //สำหรับ get Step ตาม index
      function getStepContent(stepIndex:any) {
        switch (stepIndex) {
          case 0:
            return "Home";
          case 1:
            return 'Form';
          case 2:
              return 'Accept';
          default:
            return 'Unknown stepIndex';
        }
      }
    


  return (
    <Container>
    <Row>
      <Header />
    </Row>
    <Row >
    <div id="stepper1" className="bs-stepper">
          <div className="bs-stepper-header" style={{ width: "90%", margin: 'auto'}} >
            <div className="step" data-target="#test-l-1">
              <button className="step-trigger" onClick={()=>setActiveStep(0) } >
                <span className="bs-stepper-circle1" style={ activeStep === 0 || activeStep ===1 || activeStep === 2 ? { background: "#25c100"} : {} } >1</span>
              </button>
            </div>
            <div className="line" style={ activeStep === 1 || activeStep === 2 ? {  background : "#25c100"} : {} }  ></div>
            <div className="step" data-target="#test-l-2">
              <button className="step-trigger" onClick={()=>setActiveStep(1) } >
                <span className="bs-stepper-circle1"  style={ activeStep === 1 || activeStep === 2 ? { background: "#25c100"} : {} }  >2</span>
              </button>
            </div>
            <div className="line" style={ activeStep === 2 ? {  background : "#25c100"} : {} }  ></div>
            <div className="step" data-target="#test-l-3">
              <button className="step-trigger" onClick={()=>setActiveStep(2) } >
                <span className="bs-stepper-circle1" style={ activeStep === 2 ? { background: "#25c100"} : {} }  >3</span>
              </button>
            </div>
          </div>
          <div className="bs-stepper-content">
            {getStepContent(activeStep)}
          </div>
        </div>
    </Row>
    </Container>
  );
};

export default Login;
