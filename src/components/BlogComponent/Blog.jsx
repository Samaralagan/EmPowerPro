import React, { useState } from "react";
import './Blog.css'
import { NewCourseCardData } from "../constants/temporary";
import NewCourseCard from "../common/NewCourseCard";
import Paginator from "../common/Paginator";
import { FaPlus } from "react-icons/fa";
import AddBlogPopup from "./AddBlogPopup";
import ViewBlogPopup from "./ViewBlogPopup";

const Blog = () => {
  const [Cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [CardsPerPage] = useState(16);
  const [filteredCards, setFilteredCards] = useState(NewCourseCardData);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [activeTab, setActiveTab] = useState("my-complaints");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const calculateTotalPages = (filteredCards, CardsPerPage, Cards) => {
    const totalCards =
      filteredCards.length > 0 ? filteredCards.length : Cards.length;
    return Math.ceil(totalCards / CardsPerPage);
  };

  const indexOfLastCard = currentPage * CardsPerPage;
  const indexOfFirstCard = indexOfLastCard - CardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const openModal1 = () => {
    setModalIsOpen1(true);
  };

  const closeModal1 = () => {
    setModalIsOpen1(false);
  };

  return (
    <div className="contentbodyall">
     
     <nav>
      <div className="nav nav-tabs mt-4" id="nav-tab" role="tablist">
        <button
          className={`nav-link ${activeTab === "my-complaints" ? "active" : ""}`}
          id="nav-my-complaints-tab"
          type="button"
          role="tab"
          aria-controls="nav-my-complaints"
          aria-selected={activeTab === "my-complaints"}
          onClick={() => handleTabChange("my-complaints")}
        >
          All Blog
        </button>
        <button
          className={`nav-link ${activeTab === "complaints-to-me" ? "active" : ""}`}
          id="nav-complaints-to-me-tab"
          type="button"
          role="tab"
          aria-controls="nav-complaints-to-me"
          aria-selected={activeTab === "complaints-to-me"}
          onClick={() => handleTabChange("complaints-to-me")}
        >
          My Blog
        </button>
        <button
          className={`nav-link ${activeTab === "all-complaints" ? "active" : ""}`}
          id="nav-all-complaints-tab"
          type="button"
          role="tab"
          aria-controls="nav-all-complaints"
          aria-selected={activeTab === "all-complaints"}
          onClick={() => handleTabChange("all-complaints")}
        >
          BookMark Blog
        </button>
      </div>
    </nav>

      <div>
        <div className="new-course-content mt-2">
          <div className="new-course-filterbar">
            <div className="new-course-filter">Filter</div>
            <input type="text" placeholder="Search......." />
          </div>
          <button className="gradient-blue-btn" onClick={openModal}>
            <FaPlus className="me-2 " /> Add
          </button>
          <AddBlogPopup modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </div>

       

        <div className="training-new-course">
          {currentCards.map((card, index) => (
            <div onClick={openModal1}>
              <NewCourseCard
                img={card.img}
                title={card.title}
                level={card.level}
                star={card.star}
                entrolled={card.enrolled}
                key={index}
                
              />
            </div>
          ))}
          
        </div>
        <ViewBlogPopup modalIsOpen1={modalIsOpen1} closeModal1={closeModal1} />
        <div>
          <Paginator
            currentPage={currentPage}
            totalPages={calculateTotalPages(filteredCards, CardsPerPage, Cards)}
            onPageChange={handlePaginationClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
