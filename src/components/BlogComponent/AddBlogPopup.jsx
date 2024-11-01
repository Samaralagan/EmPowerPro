import React, { useState, useEffect, useRef } from "react";
import { MultiSelect } from 'primereact/multiselect';
import "./AddBlogPopup.css";
import Modal from "react-modal";
import TextEditor from "../common/TextEditor";
import Quill from "quill";
import 'primereact/resources/themes/saga-blue/theme.css';  // Or any theme you are using
import 'primereact/resources/primereact.min.css';           // Core PrimeReact CSS
import 'primeicons/primeicons.css';    
import { createBlog } from "../../service/BlogService";
const Delta = Quill.import("delta");
const customStyles = {
  content: {
    zIndex: 1000,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%) ",
    width: "70%",
    height: "80%",
    backgroundColor: "white", // Modal content background
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
    overflowY: "scroll",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.15)", // Dark background
    backdropFilter: "blur(5px)", // Blur effect
    zIndex: 999, 
  },
};

const AddBlogPopup = ({ modalIsOpen, closeModal }) => {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);
  const quillRef = useRef(null);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [roles, setRoles] = useState([
      { name: 'Web Development', code: 'WD' },
      { name: 'Mobile Development', code: 'MD' },
      { name: 'Architecture Pattern', code: 'AP' },
      { name: 'Database', code: 'DB' },
      { name: 'Front End', code: 'FE' },
      { name: 'Back End', code: 'BE' },
      { name: 'React', code: 'REACT' },
      { name: 'Spring Boot', code: 'SB' }
    ]);

    
    const submitBlog = async () => {
      if (quillRef.current) {
        const quillEditor = quillRef.current.getEditor();  // Get the Quill editor instance
        if (quillEditor) {
          const blogContent = quillEditor.getContents();  // Retrieve the contents
          const blogData = {
            id: 1,
            title: document.getElementById('exampleFormControlInput1').value,
            searchNames: selectedRoles.map(role => role.name),
            content: JSON.stringify(blogContent), 
            
          };
          console.log(blogData)
  
           // Submit the blog data
          createBlog(blogData)
            .then((response) => {
              console.log(response.data);
              closeModal();
              window.location.reload();
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          console.error("Quill editor instance is not available.");
        }
      } else {
        console.error("Quill editor ref is not initialized.");
      }
    };
    
  


  
  return (
    <div className="addblog-popup-body">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="close-button" onClick={closeModal}>
          ×
        </button>
        <h2>New Blog</h2>
        <div className="mb-3 mt-4">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter the Title"
          />
        </div>
        <div>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Search Name
          </label>
          <br />
          {/* <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          /> */}
        {/* <MultiSelect
          value={se}
          onChange={(e) => setSelectedRoles(e.value)}
          options={}
          optionLabel="name"
          placeholder="Select Cities"
          maxSelectedLabels={3}
          className="form-control"
          panelStyle={{ zIndex: 1300 }} // Ensure dropdown has higher zIndex than modal
        /> */}

        <MultiSelect
          value={selectedRoles}
          onChange={(e) => setSelectedRoles(e.value)}
          options={roles}
          optionLabel="name"
          placeholder="Select Technologies"
          maxSelectedLabels={3}
          className="form-control"
        />


        </div>
        <div className="mb-3 mt-4">
          <label htmlFor="quillEditor" className="form-label">
            Blog Content
          </label>
         
          {/* <TextEditor
            ref={quillRef}
            readOnly={readOnly}
            defaultValue={new Delta()
              .insert("Create ")
              .insert("Blog", { bold: true })
              .insert(" ")
              .insert("content", { underline: true })
              .insert("\n")}
            onSelectionChange={setRange}
            onTextChange={setLastChange}
          /> */}
          <TextEditor 
          ref={quillRef}
  editorId="file1" 
  defaultValue={'file1Content'} 
  onSelectionChange={setRange} 
  onTextChange={setLastChange} 
  readOnly={false} 
/>

{/* <TextEditor 
  editorId="file2" 
  defaultValue={file2Content} 
  onSelectionChange={handleSelectionChange} 
  onTextChange={handleTextChange} 
  readOnly={false} 
/> */}
        </div>
        <div>
          <center>
            <button className="gradient-blue-btn" onClick={submitBlog}>Submit</button>
          </center>
        </div>
      </Modal>
    </div>
  );
};

export default AddBlogPopup;
