import "./App.css";
import Form from "./components/Form";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Heading />
      <Form />
    </div>
  );
}

export default App;
