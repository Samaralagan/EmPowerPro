import React, { useEffect, useState } from 'react';
import "./BlogComment.css";
import Modal from 'react-modal';
import moment from 'moment';
import { createBlogComment,deleteBlogComment,getAllBlogComment  } from "../../service/BlogService";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%) ',
    width: '30%',
    height: '80%',
    backgroundColor: 'white', // Modal content background
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    zIndex: 1200,
    overflow: 'hidden',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)', // Dark background
    backdropFilter: 'blur(5px)', // Blur effect
    zIndex: 1200,
  },
};

const BlogComment = ({ modalIsOpen2, closeModal2 ,blogId}) => {
  const [text,setText]=useState("");
  const [allComment,setAllComment]=useState([]);
  // useEffect(() => {
  //   getAllBlog(blogId).then((response)=>{
  //     console.log(response.data)
  //     setAllComment(response.data);
  //   }).catch((error)=>{
  //     console.error(error);
  //   })
  
  // }, []);
  const handleChange = (e)=>{
      setText(e.target.value)
  }
  const handleSend = ()=>{
    console.log(text)
   
    const data = {
      "userId":1,
      "commentText":text,
      "blogId":blogId
    };
    createBlogComment(data).then((response) => {
      console.log(response.data);
      setText("")
    })
    .catch((error) => {
      console.error(error); 
      
    });
  }

   getAllBlogComment(blogId).then((response)=>{
    console.log(response.data)
    setAllComment(response.data);
  }).catch((error)=>{
    console.error(error);
  })

  function timeAgo(dateString) {
    return moment(dateString).fromNow();
  }

  const handleDeleteComment = (commentId) =>{
     if (window.confirm("Are you sure you want to delete this comment?")) {
        deleteBlogComment(commentId).then((response)=>{
          console.log(response.data);
      }).catch(error=>{
          console.log(error);
      })
     }
  }

  return (
    <div className="addblog-popup-body">
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="Example Modal"
      >
         <div> 
            <div className='blogcomment-top'>
                <center>
                    <h5>Comment</h5>
                </center>
                <hr />
            </div>
            <div className='blogcomment-content'>
                {
                   allComment.map((item,index)=>(
                     <div className='blogcomment-comment'>
                      <div className='blogcomment-avatar'>
                          K
                      </div>
                      <div className='blogcomment-data' key={index}>
                        <span>Kavalajan MVPS </span>
                        <p className='ps-3' >{item.commentText}</p>
                        <div className='blogcomment-time'>
                          {item.userId===1 &&<div className='blogcomment-delete' onClick={()=>handleDeleteComment(item.commentId)}>delete</div>}
                          {timeAgo(item.uploadDate)}
                        </div>
                      </div>
                    </div>
                   ))
                }
                
            </div>
            <div className='blogcomment-textarea'>
                <textarea name="" id="" value={text} placeholder='typing...' onChange={handleChange}/>
            </div>
            <div className='blogcomment-bottom mt-3'>   
                <button className='blogcomment-cancel' onClick={closeModal2}>Cancel</button>
                <button className='blogcomment-sent' onClick={handleSend}>Send</button>
            </div>
        </div>
      </Modal>    
    </div>
  );
};

export default BlogComment;
