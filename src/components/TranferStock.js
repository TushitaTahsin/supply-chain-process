import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-validation/build/form";
import classes from "./TableStyling.css";

class TransferStock extends Component {
  render() {
    return (
      <div>
        <h4>Transfer Stock</h4>
        <Form>
          <input
            class="form-control basicAutoComplete"
            type="text"
            data-url="myurl"
            autocomplete="on"
            placeholder="Filter by shop name(autocomplete search bar)"
            style={{ width: "500px", marginBottom: "10px" }}
          ></input>
          <select
            class="form-select form-select-md mb-3"
            aria-label=".form-select-md example"
            style={{ width: "500px", marginBottom: "10px" }}
          >
            <option selected>Filter by Big Categories</option>
            <option value="1">Rice</option>
            <option value="2">Cosmetics</option>
            <option value="3">Commodities</option>
          </select>
          <input
            class="form-control basicAutoComplete"
            type="text"
            data-url="myurl"
            autocomplete="on"
            placeholder="Transfer to Shop(autocomplete search bar)"
            style={{ width: "500px", marginBottom: "10px" }}
          ></input>
          <input
            class="form-control basicAutoComplete"
            type="text"
            data-url="myurl"
            autocomplete="off"
            placeholder="Available to Transfer(auto generate)"
            style={{ width: "500px", marginBottom: "10px" }}
            disabled="true"
          ></input>
          <input
            class="form-control basicAutoComplete"
            type="text"
            data-url="myurl"
            autocomplete="off"
            placeholder="Demand(auto generate)"
            style={{ width: "500px", marginBottom: "10px" }}
            disabled="true"
          ></input>
          <input
            class="form-control"
            type="text"
            data-url="myurl"
            autocomplete="off"
            placeholder="Transfer Amount"
            style={{ width: "500px", marginBottom: "10px" }}
          ></input>

          <div className="form-group">
            <button className="btn btn-primary btn-block">Transfer</button>
          </div>
        </Form>
      </div>
    );
  }
}

export default TransferStock;
