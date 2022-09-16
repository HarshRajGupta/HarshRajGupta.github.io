import { memo } from "react";

function Spinner({ text }) {
  return (
    <div className="spinner-container">
      <div className="spinner">
        {text}
        <div className="spinner-sector spinner-sector-red"></div>
        <div className="spinner-sector spinner-sector-blue"></div>
        <div className="spinner-sector spinner-sector-green"></div>
      </div>
    </div>
  );
}

export default memo(Spinner);
