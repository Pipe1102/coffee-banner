import { ChangeEvent, useState } from "react";
import { useGlobalCoffee } from "../../context";

interface Props {
  activeStep: number;
}

const Step2 = ({ activeStep }: Props) => {
  const { width, setWidth } = useGlobalCoffee();
  const [radioButton, setRadioButton] = useState<string>("");
  const [customWidth, setCustomWidth] = useState<string>("350");

  const handleCoffeeRadioChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const radio = event.target.value;
    if (radio === "custom") {
      const temp = customWidth.concat("px");
      setWidth(temp);
    } else {
      setWidth(radio);
    }
    setRadioButton(radio);
  };
  const handleCustomChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomWidth(event.target.value);
    const temp = event.target.value;
    setWidth(temp.concat("px"));
  };
  return (
    <>
      {activeStep === 2 && (
        <div>
          <div className="card-area">
            <div className="card1">
              <input
                onChange={handleCoffeeRadioChange}
                checked={width === "160px"}
                type="radio"
                id="w-160px"
                name="w-160px"
                value="160px"
              />
              <label className="label-1" htmlFor="w-160px">
                160 px
              </label>
            </div>
            <div className="card2">
              <input
                onChange={handleCoffeeRadioChange}
                checked={width === "300px"}
                type="radio"
                id="w-300px"
                name="w-300px"
                value="300px"
              />
              <label className="label-2" htmlFor="w-300px">
                300 px
              </label>
            </div>
            <div className="card3">
              <input
                onChange={handleCoffeeRadioChange}
                checked={width === "100%"}
                type="radio"
                id="w-100%"
                name="w-100%"
                value="100%"
              />
              <label className="label-3" htmlFor="w-100%">
                100 %
              </label>
            </div>
          </div>
          <div className="customArea">
            <div>
              <input
                onChange={handleCoffeeRadioChange}
                checked={radioButton === "custom"}
                type="radio"
                id="custom"
                name="custom"
                value="custom"
              />
              <label className="label-3" htmlFor="custom">
                Custom
              </label>
            </div>
            <div>
              <input
                disabled={radioButton !== "custom"}
                onChange={handleCustomChange}
                type="text"
                value={customWidth}
              />
              <label
                style={{ paddingLeft: "5px" }}
                className="label-3"
                htmlFor="custom"
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
