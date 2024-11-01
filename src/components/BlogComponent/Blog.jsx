import React, { useEffect, useState } from "react";
import './Blog.css';
import { BookMarkCourseCardData, MyCourseCardData } from "../constants/temporary";
import NewCourseCard from "../common/NewCourseCard";
import Paginator from "../common/Paginator";
import { FaPlus } from "react-icons/fa";
import AddBlogPopup from "./AddBlogPopup";
import ViewBlogPopup from "./ViewBlogPopup";
import { getAllBlog } from "../../service/BlogService";
import LoadingSpinner from "../common/LoadingSpinner";  // Optional: You can use a spinner component for better UX

const Blog = () => {
  const [Cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [CardsPerPage] = useState(16);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [activeTab, setActiveTab] = useState("All-Blog");
  const [blogData, setBlogData] = useState([]);
  const [filteredCards, setFilteredCards] = useState([blogData]);
  const [loading, setLoading] = useState(false);  // Loading state
  const [openBlog,setOpenBlog]=useState(0);

  useEffect(() => {
    if (activeTab === 'All-Blog') {
      getAllBlogData();
    }
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'All-Blog') {
      setFilteredCards(blogData);
    } else if (tab === 'My-Blog') {
      const myBlogs = blogData.filter((data) => data.userId === 2001);
      setFilteredCards(myBlogs);
    } else if (tab === 'BookMark-Blog') {
      setFilteredCards(BookMarkCourseCardData);
    }
    setCurrentPage(1);
  };

  function getAllBlogData() {
    setLoading(true);  // Start loading
    getAllBlog()
      .then((response) => {
        setBlogData(response.data);
        setFilteredCards(response.data);  // Update filtered cards after fetching
        setLoading(false);  // Stop loading
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);  // Stop loading in case of error
      });
  }

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const calculateTotalPages = (filteredCards, CardsPerPage, Cards) => {
    const totalCards = filteredCards.length > 0 ? filteredCards.length : Cards.length;
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
            className={`nav-link ${activeTab === "All-Blog" ? "active" : ""}`}
            id="nav-All-Blog-tab"
            type="button"
            role="tab"
            aria-controls="nav-All-Blog"
            aria-selected={activeTab === "All-Blog"}
            onClick={() => handleTabChange("All-Blog")}
          >
            All Blog
          </button>
          <button
            className={`nav-link ${activeTab === "My-Blog" ? "active" : ""}`}
            id="nav-My-Blog-tab"
            type="button"
            role="tab"
            aria-controls="nav-My-Blog"
            aria-selected={activeTab === "My-Blog"}
            onClick={() => handleTabChange("My-Blog")}
          >
            My Blog
          </button>
          <button
            className={`nav-link ${activeTab === "BookMark-Blog" ? "active" : ""}`}
            id="nav-BookMark-Blog-tab"
            type="button"
            role="tab"
            aria-controls="nav-BookMark-Blog"
            aria-selected={activeTab === "BookMark-Blog"}
            onClick={() => handleTabChange("BookMark-Blog")}
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
          {loading ? (
            <div className="loading-indicator">
              <center>
              {/* Use a spinner or loading text here */}
              <LoadingSpinner />  {/* Optional spinner component */}
              <p>Loading...</p>
              </center>
            </div>
          ) : (
            currentCards.map((card, index) => (
              <div>
                
                <div onClick={()=>{
                    openModal1();
                    setOpenBlog(card.blogId);

                    }} key={index}>
                  <NewCourseCard
                    title={card.title}
                    date={card.uploadDate}
                    // Other props can be added here like img, level, etc.
                  />
                
                </div>
                  
              </div>
            ))
          )}
  
        </div>
        {currentCards.map((card, index) => (
        <div>
          {console.log(card.content)}
            {openBlog === card.blogId &&(         
                <ViewBlogPopup key={index} blogId={card.blogId} title={card.title} contant={card.content} modalIsOpen1={modalIsOpen1} closeModal1={closeModal1}  />  
            )}
          </div>
        ))}
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
