import React, { useEffect, useState } from "react";
import './Blog.css';
import { BookMarkCourseCardData, MyCourseCardData } from "../constants/temporary";
import NewCourseCard from "../common/NewCourseCard";
import Paginator from "../common/Paginator";
import { FaPlus } from "react-icons/fa";
import AddBlogPopup from "./AddBlogPopup";
import ViewBlogPopup from "./ViewBlogPopup";
import { createBlogView, getAllBlog, getAllFavouriteBlog, getSearchBlog } from "../../service/BlogService";
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
  const[input,setInput] =useState("")

  useEffect(() => {
    if (activeTab === 'All-Blog' && input==="") {
      getAllBlogData();
    }else if(activeTab === 'BookMark-Blog' && input===""){
      getAllFavouriteBlogs();
    }
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'All-Blog') {
      setInput("");
      getAllBlogData();
      setFilteredCards(blogData);
    } else if (tab === 'My-Blog') {
      setInput("");
      getAllBlogData();
      const myBlogs = blogData.filter((data) => data.userId === 1);
      setFilteredCards(myBlogs);
    } else if (tab === 'BookMark-Blog') {
      setInput("");
      getAllFavouriteBlogs()
      setFilteredCards(blogData);
    }
    setCurrentPage(1);
  };
  function getAllFavouriteBlogs(){
    setLoading(true);  // Start loading
    const userId =1;
    getAllFavouriteBlog(userId)
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

  const handleInputChange = (e)=>{
    setInput(e.target.value)
    if (activeTab === 'All-Blog' && input==="") {
      getAllBlogData();
    }else if(activeTab === 'BookMark-Blog' && input===""){
      getAllFavouriteBlogs();
    }
  }

  const handleClickInput = () =>{
  
    if(input!=""){
      
    setLoading(true);  // Start loading
    getSearchBlog(input)
      .then((response) => {
        // window.alert(input)
        setBlogData(response.data);
        setFilteredCards(response.data);  // Update filtered cards after fetching
        setLoading(false);  // Stop loading
      })
      .catch((error) => {
       
        console.log(error);
        setLoading(false);  // Stop loading in case of error
      });
    }else if (activeTab === 'All-Blog' && input==="") {
      getAllBlogData();
    }else if(activeTab === 'BookMark-Blog' && input===""){
      getAllFavouriteBlogs();
    }
  }

  function handleAddBlogView(blogId){
    const userId =  1;
    createBlogView(userId,blogId)
    .then((response) => {
        // window.alert(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }

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
            <div className="new-course-filter" onClick={handleClickInput}>Filter</div>
            <input type="text" value={input} placeholder="Search......." onChange={handleInputChange}/>
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
              <LoadingSpinner />  
              <p>Loading...</p>
              </center>
            </div>
          ) : (
            currentCards.map((card, index) => (
              <div>
                
                <div onClick={()=>{
                    handleAddBlogView(card.blogId)
                    openModal1();
                    setOpenBlog(card.blogId);


                    }} key={index}>
                  <NewCourseCard
                    title={card.title}
                    date={card.uploadDate}
                    type={activeTab}
                    blogId={card.blogId}
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
                <ViewBlogPopup key={index} blogId={card.blogId} title={card.title} contant={card.content} modalIsOpen1={modalIsOpen1} closeModal1={closeModal1} addfavourite={card.favourites.some(fav => fav.userId === 1)?[false, card.favourites.find(fav => fav.userId === 1).favouriteId]:[true,0]} />  
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
