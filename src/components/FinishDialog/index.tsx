import { useEffect, useState } from "react";
import { useGlobalCoffee } from "../../context";
import "./index.css";
import ReactDOMServer from "react-dom/server";
import { generateCode } from "../Preview";

const FinishDialog = () => {
  const { open, setOpen, coffee, width } = useGlobalCoffee();
  const [code, setCode] = useState("");

  useEffect(() => {
    const result = generateCode(coffee, width);
    let codeTemp = ReactDOMServer.renderToString(result);
    setCode(codeTemp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setOpen(false);
  };

  return (
    <dialog className="dialog" open={open}>
      <div className="closeArea">
        <button className="close" onClick={() => setOpen(false)}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
      <div className="titleArea">
        <p style={{ color: "rgba(118, 118, 118, 1)" }}>That's it! All done!</p>
        <p style={{ color: "rgba(118, 118, 118, 1)" }}>
          Simply copy the code below, and paste it into your website!
        </p>
      </div>
      <div className="codeArea">
        <textarea
          value={code}
          className="codeInput"
          name="code"
          rows={20}
          cols={50}
        />
      </div>
      <div className="copy">
        <button onClick={handleCopyToClipboard} className="copyBtn">
          <i className="fa fa-clipboard" aria-hidden="true"></i>
          <p>Copy to clipboard</p>
        </button>
      </div>
    </dialog>
  );
};

export default FinishDialog;
