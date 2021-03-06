import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import * as mdb from "mdb-ui-kit";
import classes from "./TableStyling.css";
import "tailwindcss/tailwind.css";

class DemandCalculationSmallCategory extends Component {
  render() {
    return (
      <div>
        <h4>Demand for each small category for each shop</h4>

        {/* <input
          class="form-control basicAutoComplete"
          type="text"
          data-url="myurl"
          autocomplete="on"
          placeholder="Filter by shop name(autocomplete search bar)"
          style={{ width: "500px" }}
        ></input> */}
        {/* <table class="border-separate border border-green-800 ...">
          <thead>
            <tr>
              <th class="border border-green-600 ...">State</th>
              <th class="border border-green-600 ...">City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-green-600 ...">Indiana</td>
              <td class="border border-green-600 ...">Indianapolis</td>
            </tr>
            <tr>
              <td class="border border-green-600 ...">Ohio</td>
              <td class="border border-green-600 ...">Columbus</td>
            </tr>
            <tr>
              <td class="border border-green-600 ...">Michigan</td>
              <td class="border border-green-600 ...">Detroit</td>
            </tr>
          </tbody>
        </table> */}
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
        {/* <select class="mdb-select md-form" searchable="Search here..">
          <option value="" disabled selected>
            Choose your country
          </option>
          <option value="1">Shop 1</option>
          <option value="2">Shop 2</option>
          <option value="3">Shop 3</option>
        </select> */}
        <table className={classes.table}>
          <tr>
            <th>Small Categories</th>
            <th>Growth</th>
            <th>Demand</th>
          </tr>
          <tr>
            <td>Spice Packet</td>
            <td>
              <input></input>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Ice Cream</td>
            <td>
              <input></input>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>Noodles</td>
            <td>
              <input></input>
            </td>
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default DemandCalculationSmallCategory;
