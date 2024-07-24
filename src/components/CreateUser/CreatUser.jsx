import React from "react";
import "./createuser.css";
import Header from "../layout/Header";
function CreatUser() {
  return (
    <div>
          <Header />
   
    <div className="createuser-body">
   
      <form action="">
        <div className="darkbox">PERSONAL DETAILS</div>
        <br />
        <div class="d-flex">

          <div class="did-floating-label-content">
            <input class="did-floating-input" type="text" placeholder=" " />
            <label class="did-floating-label">First Name</label>
          </div>
          <div class="did-floating-label-content" style={{ marginLeft: "10%" }}>
            <input class="did-floating-input" type="text" placeholder=" " />
            <label class="did-floating-label">Last Name</label>
          </div>
        </div>

        <div class="d-flex">
          <div class="did-floating-label-content">
            <input class="did-floating-input" type="text" placeholder=" " />
            <label class="did-floating-label">Address</label>
          </div>
          <div class="did-floating-label-content" style={{ marginLeft: "10%" }}>
            <input class="did-floating-input" type="text" placeholder=" " />
            <label class="did-floating-label">Email Address</label>
          </div>
        </div>

        <div class="d-flex">
          <div class="did-floating-label-content">
            <input class="did-floating-input" type="text" placeholder=" " />
            <label class="did-floating-label">Phone Number</label>
          </div>
          <div class="did-floating-label-content" style={{ marginLeft: "10%" }}>
            <input class="did-floating-input" type="text" placeholder=" " />
            <label class="did-floating-label">Emergency contact</label>
          </div>
        </div>
        <br />

        <div className="darkbox">OTHER DETAILS</div>
        <br />
        <div class="d-flex">
          <div class="did-floating-label-content">
            <input class="did-floating-input" type="text" placeholder=" " />
            <label class="did-floating-label">Work Title</label>
          </div>
          <div class="did-floating-label-content" style={{ marginLeft: "10%" }}>
            <input class="did-floating-input" type="text" placeholder=" " />
            <label class="did-floating-label">Role</label>
          </div>
        </div>
        <div class="d-flex">
          <div class="did-floating-label-content">
            <input class="did-floating-input" type="text" placeholder=" " />
            <label class="did-floating-label">Team Name(optional)</label>
          </div>
          <div class="did-floating-label-content" style={{ marginLeft: "10%" }}>
            <input class="did-floating-input" type="text" placeholder=" " />
            <label class="did-floating-label">Remarks</label>
          </div>
        </div>

        <div className="create-button-row">
            <button className="cancel-button" >Cancel</button>
            <button className="create-button" >Create User</button>
          </div>
      </form>
    </div>
    </div>
  );
}

export default CreatUser;
