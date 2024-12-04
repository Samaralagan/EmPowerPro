import React, { useState } from "react";
import "./RatingPopup.css";
import Modal from "react-modal";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { createBlogRating } from "../../service/BlogService";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%) ",
    width: "30%",
    height: "30%",
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    zIndex: 1200,
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    backdropFilter: "blur(5px)",
    zIndex: 1200,
  },
};

const RatingPopup = ({ modalIsOpen, closeModal ,blogId }) => {
  const [ratingValue, setRatingValue] = useState(0);

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };

  const handleDone = () => {
    const userId =1;
    console.log("Selected Rating:", ratingValue);
    createBlogRating(userId,blogId,ratingValue).then((response)=>{
       closeModal();
  }).catch(error => {
      console.log(error);
  })
   
  };

  return (
    <div className="addblog-popup-body">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Rating Modal"
      >
        <div>
          <center>
            <h5>Rating</h5>
            <hr />
            <Stack spacing={1}>
              <center>
                <Rating
                  className="fs-2"
                  style={{ fontSize: "7vh" }}
                  name="half-rating"
                  defaultValue={0}
                  precision={1}
                  onChange={handleRatingChange}
                />
              </center>
            </Stack>
          </center>
          <div className="viewblog-Rating-bottom mt-3">
            <button className="viewblog-rating-cancel" onClick={closeModal}>
              Cancel
            </button>
            <button className="viewblog-rating-Done" onClick={handleDone}>
              Done
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RatingPopup;
