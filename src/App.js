import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "tailwindcss/tailwind.css";
import "./App.css";

import Home from "./components/home";
import DemandCalculationSmallCategory from "./components/DemandCalculationSmallCategory";
import DemandCalculationBigCategory from "./components/DemandCalculationBigCategory";
import TransferStock from "./components/TranferStock";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            supply-chain-process
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="text-green-500">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/demandcalculationsmallcategory"} className="nav-link">
                Demand Calculation(small category)
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/demandcalculationbigcategory"} className="nav-link">
                Demand Calculation(big category)
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/transferstock"} className="nav-link">
                Transfer Stock
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route
              exact
              path={["/demandcalculationsmallcategory"]}
              component={DemandCalculationSmallCategory}
            />
            <Route
              exact
              path={["/demandcalculationbigcategory"]}
              component={DemandCalculationBigCategory}
            />
            <Route exact path={["/transferstock"]} component={TransferStock} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
