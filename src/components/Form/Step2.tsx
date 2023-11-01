import React from "react";

interface Props {
  activeStep: number;
}

const Step2 = ({ activeStep }: Props) => {
  return (
    <>
      {activeStep === 2 && (
        <div>
          <div className="card-area">
            <div className="card1">
              <input type="radio" id="radio1" name="radio1" />
              <label className="label-1" htmlFor="radio1">
                160 px
              </label>
            </div>
            <div className="card2">
              <input type="radio" id="radio2" name="radio2" />
              <label className="label-2" htmlFor="radio2">
                300 px
              </label>
            </div>
            <div className="card3">
              <input type="radio" id="radio3" name="radio3" />
              <label className="label-3" htmlFor="radio3">
                100 %
              </label>
            </div>
          </div>
          <div className="customArea">
            <div>
              <input type="radio" id="radio3" name="radio3" />
              <label className="label-3" htmlFor="radio3">
                Custom
              </label>
            </div>
            <div>
              <input type="text" placeholder="350px" />
              <label
                style={{ paddingLeft: "5px" }}
                className="label-3"
                htmlFor="radio3"
              >
                px
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Step2;
