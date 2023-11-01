import { useGlobalCoffee } from "../../context";

export const generateCode = (coffee: Coffee, width: string) => {
  return (
    <div
      style={{
        marginLeft: "40px",
        marginTop: "10px",
        boxShadow: "0px 1px 40px 0px rgba(66, 66, 67, 0.13)",
        borderRadius: "10px 10px 0px 0px",
      }}
    >
      <h3 style={{ marginLeft: "20px", color: "rgba(17, 160, 219, 1)" }}>
        Preview:
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "50px",
          marginRight: "50px",
          border: "1px",
          borderColor: "rgba(154, 154, 159, 1)",
        }}
      >
        <div className="card" style={{ width: `${width}` }}>
          <div
            style={{ backgroundColor: "background-color: rgba(66, 66, 67, 1)" }}
          >
            <p style={{ color: "rgba(255, 255, 255, 1)" }}>{coffee.title}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <p style={{ overflow: "hidden" }}>{coffee.description}</p>
            <img style={{ maxWidth: "95px" }} src={coffee.image} alt="coffee" />
          </div>
          <div
            style={{
              display: "flex",
              gap: "5px",
              padding: "10px",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            {coffee.ingredients.map((item: string) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: " rgba(17, 160, 219, 0.3)",
                  borderRadius: "10px",
                  padding: "5px",
                }}
              >
                <p style={{ fontSize: "13.7px" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Preview = () => {
  const { coffee, width } = useGlobalCoffee();

  return generateCode(coffee, width);
};

export default Preview;
