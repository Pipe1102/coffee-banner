import { useEffect, useState } from "react";
import "./index.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const Form = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [header, setHeader] = useState("");

  function getHeaderForStep(step: number): void {
    switch (step) {
      case 1:
        setHeader("Select your coffee");
        break;
      case 2:
        setHeader("Choose your width");
        break;
      case 3:
        setHeader("Customize title and description");
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    getHeaderForStep(activeStep);
  }, [activeStep]);

  return (
    <div className="form">
      <div className="heading">
        <p className="headerTxt">
          {activeStep}. {header}
        </p>
      </div>
      <Step1 activeStep={activeStep} />
      <Step2 activeStep={activeStep} />
      <Step3 activeStep={activeStep} />
      {activeStep !== 3 && (
        <div className="actionArea">
          <button
            className="nextStepBtn"
            onClick={() => setActiveStep((prev) => prev + 1)}
          >
            <p style={{ fontWeight: "600", fontSize: "18px" }}>Next step</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Form;
