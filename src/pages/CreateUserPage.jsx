import React from "react";
import SideBar from "../components/common/SideBar";
import CreatUser from "../components/CreateUser/CreatUser";

function CreateUserPage() {
  return (
    <div className="d-flex">
      <SideBar />
      <CreatUser />
    </div>
  );
}

export default CreateUserPage;
