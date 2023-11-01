import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  activeStep: number;
}

const Step1 = ({ activeStep }: Props) => {
  const [coffeeList, setCoffeeList] = useState<Coffee[]>([]);
  const [selectedRadio, setSelectedRadio] = useState<string>("hot");
  const [selectedCoffe, setSelectedCoffee] = useState<Coffee>(coffeeList[0]);

  const handleNextStep = () => {};

  function getIcedCoffee(): void {
    fetch("https://api.sampleapis.com/coffee/iced")
      .then((res) => res.json())
      .then((data) => {
        setCoffeeList(data);
        setSelectedCoffee(data[0]);
      });
  }
  function getHotCoffee(): void {
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((res) => res.json())
      .then((data) => {
        setCoffeeList(data);
        setSelectedCoffee(data[0]);
      });
  }
  useEffect(() => {
    getHotCoffee();
  }, []);

  const handleCoffeeRadioChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const radio = event.target.value;
    if (radio === "iced") {
      getIcedCoffee();
    } else {
      getHotCoffee();
    }
    setSelectedRadio(radio);
  };

  const handleCoffeeSelectChange = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    const selected = coffeeList.filter(
      (el: Coffee) => el.title === event.target.value
    );
    setSelectedCoffee(selected[0]);
  };

  return (
    <>
      {activeStep === 1 && (
        <div className="step1-container">
          <div>
            <input
              onChange={handleCoffeeRadioChange}
              type="radio"
              name="hotCoffee"
              id="hotCoffee"
              value="hot"
              checked={selectedRadio === "hot"}
            />
            <label className="label-1" htmlFor="hotCoffee">
              Hot coffee
            </label>
          </div>
          <div>
            <input
              onChange={handleCoffeeRadioChange}
              type="radio"
              name="icedCoffee"
              id="icedCoffee"
              value="iced"
              checked={selectedRadio === "iced"}
            />
            <label className="label-2" htmlFor="icedCoffee">
              Iced coffee
            </label>
          </div>
          <select
            onChange={handleCoffeeSelectChange}
            className="coffeeSelect"
            name="country"
            id="country"
          >
            {coffeeList.map((coffee: Coffee) => (
              <option key={coffee.id} value={coffee.title}>
                {coffee.title}
              </option>
            ))}
          </select>
        </div>
      )}
    </>
  );
};

export default Step1;
