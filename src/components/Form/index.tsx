import { MouseEvent, useEffect, useState } from "react";
import "./index.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { useGlobalCoffee } from "../../context";

const Form = () => {
  const { setWidth, setOpen } = useGlobalCoffee();
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

  const handleViewAnyCopyCode = (event: MouseEvent<HTMLButtonElement>) => {
    setOpen(true);
  };
  const handleStartOver = (event: MouseEvent<HTMLButtonElement>) => {
    setActiveStep(1);
    setWidth("300px");
  };

  return (
    <>
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
              className="actionButtons"
              onClick={() => setActiveStep((prev) => prev + 1)}
            >
              <p style={{ fontWeight: "600", fontSize: "18px" }}>Next step</p>
            </button>
          </div>
        )}
        {activeStep === 3 && (
          <div className="finishArea">
            <button className="startOverBtn" onClick={handleStartOver}>
              <p style={{ fontWeight: "bold", fontSize: "18px" }}>Start over</p>
              <i
                className="fa fa-undo"
                aria-hidden="true"
                style={{ fontSize: "18px" }}
              ></i>
            </button>
            <button className="actionButtons" onClick={handleViewAnyCopyCode}>
              <i
                className="fa fa-code"
                aria-hidden="true"
                style={{ fontSize: "18px" }}
              ></i>
              <p style={{ fontWeight: "600", fontSize: "18px" }}>
                View and copy code
              </p>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
