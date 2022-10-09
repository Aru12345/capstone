import * as React from "react";
import "./stylingfolder/Filter.css";

function Filter({ handleFilter }) {
  return (
    <>
      <div>
        <select onChange={handleFilter} name="wgtmsr" id="wgtmsr">
          <option>All</option>
          <option value="alc">Fine Dinning</option>
          <option value="coffeeshop">Cafe</option>
          <option value="bar">Pub</option>
        </select>
      </div>
    </>
  );
}
export default Filter;
