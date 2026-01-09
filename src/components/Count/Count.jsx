import { useState } from "react";
import "./Count.css";

export const Count = ({ btnText, onConfirm }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const confirm = () => {
    if (count > 0) {
      onConfirm(count);
    }
    setCount(1);
  };

  return (
    <div className="count-container">
      <div className="count-buttons">
        <span className="count-label">Cantidad</span>

        <div className="count-controls">
          <button
            className="btn"
            onClick={decrement}
            disabled={count === 1}
          >
            −
          </button>

          <span className="count-value">{count}</span>

          <button className="btn" onClick={increment}>
            +
          </button>
        </div>
      </div>

      <button className="btn btn-add" onClick={confirm}>
        {btnText}
      </button>

      <small className="count-help">
        Sin compromiso, solo para coordinar
      </small>
    </div>
  );
};
