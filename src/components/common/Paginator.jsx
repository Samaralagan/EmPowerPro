import React from 'react'
import './Paginator.css'


const Paginator = ({currentPage,totalPages,onPageChange}) => {
    const pageNumbers = Array.from({length:totalPages},(_,i)=>i+1)
  return (
    <nav>
        <ul className="pagination justify-content-center mt-4">
           {pageNumbers.map((pageNumber)=>(
            <li key={pageNumber}
                className={`page-item ${currentPage === pageNumber?"active" : ""}`}
            >
                <button className="page-link " style={{margin:'3px' ,height:'10px' ,width:'40px',borderRadius:'10px',padding:'0px'}} onClick={()=>onPageChange(pageNumber)}>
                    {}
                </button>
            </li>
           ))}
        </ul>
    </nav>
  )
}

export default Paginator