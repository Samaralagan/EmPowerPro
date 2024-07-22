import React from "react";
import SideBar from "../components/common/SideBar";
import Complaints from "../components/ComplaintsComponent/Complaints";
import ComplaintsToMe from "../components/ComplaintsComponent/ComplaintsToMe";
import Header from "../components/layout/Header";
const ComplaintsPage_Tl = () => {
  return (
    <div className="d-flex">
      <SideBar />
      <div className="complaints-body">
        <Header />
        <hr />
        {/* <ComplaintsToMe /> */}
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              My Complaints
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Complaints to me
            </button>
          </div>
        </nav>
        <div
          class="tab-content"
          id="nav-tabContent"
          // style={{
          //   boxShadow: `
          //     -4px 0px 4px rgba(0, 0, 0, 0.2),
          //     0px -4px 4px rgba(0, 0, 0, 0.2),
          //     0px 4px 4px rgba(0, 0, 0, 0.2),
          //     4px 0px 4px rgba(0, 0, 0, 0.2)
          //   `,
          // }}
        >
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabindex="0"
          >
            <Complaints />
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabindex="0"
          >
            <ComplaintsToMe />
          </div>
        </div>
      </div>

      {/* <div className="toggle-button">complaints teamlead</div> */}
    </div>
  );
};

export default ComplaintsPage_Tl;
