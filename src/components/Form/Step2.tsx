import React from "react";

interface Props {
  activeStep: number;
}

const Step2 = ({ activeStep }: Props) => {
  return <>{activeStep === 2 && <div></div>}</>;
};

export default Step2;
