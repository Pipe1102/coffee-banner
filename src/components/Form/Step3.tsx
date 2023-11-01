import { ChangeEvent } from "react";
import { useGlobalCoffee } from "../../context";

interface Props {
  activeStep: number;
}

const Step3 = ({ activeStep }: Props) => {
  const { coffee, setCoffee } = useGlobalCoffee();

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const obj = { ...coffee, title: event.target.value };
    setCoffee(obj);
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const obj = { ...coffee, description: event.target.value };
    setCoffee(obj);
  };
  return (
    <>
      {activeStep === 3 && (
        <div className="step3-container">
          <div>
            <label className="title-label" htmlFor="title">
              Text:
            </label>
            <br />
            <input
              className="input"
              type="text"
              id="title"
              value={coffee.title}
              onChange={handleTitleChange}
            />
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
              value={coffee.description}
              onChange={handleDescriptionChange}
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
