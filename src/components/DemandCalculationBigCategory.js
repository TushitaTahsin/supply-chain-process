import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./TableStyling.css";

class DemandCalculationBigCategory extends Component {
  render() {
    return (
      <div>
        <h4>Demand for each big category for each shop</h4>
        {/* <input
          class="form-control basicAutoComplete"
          type="text"
          data-url="myurl"
          autocomplete="off"
          placeholder="Filter by shop name(autocomplete search bar)"
          style={{ width: "500px" }}
        ></input> */}
        <select
          class="form-select form-select-md mb-3"
          aria-label=".form-select-md example"
          style={{ width: "500px", marginBottom: "10px" }}
        >
          <option selected>Filter by shop name(autocomplete search bar)</option>
          <option value="1">Shop 1</option>
          <option value="2">Shop 2</option>
          <option value="3">Shop 3</option>
        </select>
        <table className={classes.table}>
          <tr>
            <th>Big Categories</th>
            <th>Target</th>
            <th>Stock Keeping %</th>
            <th>Current Stock</th>
            <th>Damaged and Over Stock</th>
            <th>Demand</th>
          </tr>

          <tr>
            <td>Rice</td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
          </tr>

          <tr>
            <td>Cosmetics</td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
          </tr>

          <tr>
            <td>Commodities</td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default DemandCalculationBigCategory;
