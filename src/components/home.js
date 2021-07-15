import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

class Home extends Component {
  render() {
    return (
      // <div class="limiter">
      //   <div class="container-table100">
      //     <div class="wrap-table100">
      //       <div class="table100 ver1 m-b-110">
      //         <div class="table100-head">
      //           <table>
      //             <thead>
      //               <tr class="row100 head">
      //                 <th class="cell100 column1">Class name</th>
      //                 <th class="cell100 column2">Type</th>
      //                 <th class="cell100 column3">Hours</th>
      //                 <th class="cell100 column4">Trainer</th>
      //                 <th class="cell100 column5">Spots</th>
      //               </tr>
      //             </thead>
      //           </table>
      //         </div>

      //         <div class="table100-body js-pscroll">
      //           <table>
      //             <tbody>
      //               <tr class="row100 body">
      //                 <td class="cell100 column1">Like a butterfly</td>
      //                 <td class="cell100 column2">Boxing</td>
      //                 <td class="cell100 column3">9:00 AM - 11:00 AM</td>
      //                 <td class="cell100 column4">Aaron Chapman</td>
      //                 <td class="cell100 column5">10</td>
      //               </tr>

      //               <tr class="row100 body">
      //                 <td class="cell100 column1">Mind & Body</td>
      //                 <td class="cell100 column2">Yoga</td>
      //                 <td class="cell100 column3">8:00 AM - 9:00 AM</td>
      //                 <td class="cell100 column4">Adam Stewart</td>
      //                 <td class="cell100 column5">15</td>
      //               </tr>

      //               <tr class="row100 body">
      //                 <td class="cell100 column1">Crit Cardio</td>
      //                 <td class="cell100 column2">Gym</td>
      //                 <td class="cell100 column3">9:00 AM - 10:00 AM</td>
      //                 <td class="cell100 column4">Aaron Chapman</td>
      //                 <td class="cell100 column5">10</td>
      //               </tr>

      //               <tr class="row100 body">
      //                 <td class="cell100 column1">Wheel Pose Full Posture</td>
      //                 <td class="cell100 column2">Yoga</td>
      //                 <td class="cell100 column3">7:00 AM - 8:30 AM</td>
      //                 <td class="cell100 column4">Donna Wilson</td>
      //                 <td class="cell100 column5">15</td>
      //               </tr>
      //             </tbody>
      //           </table>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <MDBTable>
        <MDBTableHead color="primary-color" textWhite>
          <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    );
  }
}

export default Home;
