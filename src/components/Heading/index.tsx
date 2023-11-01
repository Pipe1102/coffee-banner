import "./index.css";

const Heading = () => {
  return (
    <div className="headerArea">
      <div>
        <h2>Welcome to the ThinkIT Coffe Banner Generator</h2>
      </div>
      <div>
        <p>
          With this tool you are able to quickly craft your ideal coffee banner!
          Choose your blend and customize every detail for a a captivating brew
          display.
        </p>
      </div>
      <div>
        <p style={{ fontWeight: "500", fontSize: "18px" }}>
          Simply complete the three easy steps below, and see your preview
          update as you go. Then view, copy and paste.
        </p>
      </div>
    </div>
  );
};

export default Heading;
