import React from "react";
import SideBar from "../components/common/SideBar";
import Training from "../components/BlogComponent/Blog";
import Blog from "../components/BlogComponent/Blog";

const BlogPage = () => {
  return (
    <div className="d-flex">
      {/* <SideBar/> */}
      {/* <Training/> */}
      <Blog />
    </div>
  );
};

export default BlogPage;
