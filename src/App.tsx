import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import { GlobalCoffee } from "./context";
import FinishDialog from "./components/FinishDialog";

function App() {
  const [width, setWidth] = useState("300px");
  const [open, setOpen] = useState(false);
  const [coffee, setCoffee] = useState<Coffee>({
    id: 0,
    description: "",
    image: "",
    ingredients: [],
    title: "",
  });
  return (
    <div className="app">
      <GlobalCoffee.Provider
        value={{ coffee, setCoffee, width, setWidth, open, setOpen }}
      >
        <Navbar />
        <Heading />
        {open && <FinishDialog />}
        <div className="content">
          <Form />
          <Preview />
        </div>
      </GlobalCoffee.Provider>
    </div>
  );
}

export default App;
