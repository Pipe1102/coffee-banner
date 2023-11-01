import React from "react";

interface Props {
  activeStep: number;
}

const Step3 = ({ activeStep }: Props) => {
  return (
    <>
      {activeStep === 3 && (
        <div className="step3-container">
          <div>
            <label className="title-label" htmlFor="text">
              Text:
            </label>
            <br />
            <input className="input" type="text" id="text" />
          </div>
          <div>
            <label className="label-1" htmlFor="description">
              Description:
            </label>
            <br />
            <textarea
              className="input"
              id="description"
              name="description"
              rows={4}
              cols={50}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Step3;
