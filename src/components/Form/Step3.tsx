import React from "react";

interface Props {
  activeStep: number;
}

const Step3 = ({ activeStep }: Props) => {
  const step = 3;
  return <div hidden={activeStep !== step}>Step3</div>;
};

export default Step3;
