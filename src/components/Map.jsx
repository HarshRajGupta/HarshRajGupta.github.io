import { memo } from "react";
import Spinner from "./Spinner";

function Map() {
  return (
    <div className="map-container">
      <Spinner test={"loading"} />
      <iframe
        title={`Map`}
        id={`map`}
        src={`https://maps.google.com/maps?q=iiit%20bhubaneswar&t=&z=15&ie=UTF8&iwloc=&output=embed`}
      ></iframe>
    </div>
  );
}

export default memo(Map);
