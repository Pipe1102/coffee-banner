import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="titleArea">
        <h3>Welcome to the ThinkIT Coffe Banner Generator</h3>
        <p className="instruction">
          With this tool you are able to quickly craft your ideal coffee banner!
          Choose your blend and customize every detail for a a captivating brew
          display.
        </p>
        <p>
          Simply complete the three easy steps below, and see your preview
          update as you go. Then view, copy and paste.
        </p>
      </div>
    </div>
  );
}

export default App;
