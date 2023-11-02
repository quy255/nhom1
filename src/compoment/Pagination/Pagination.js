import ReactPaginate from "react-paginate";
import "./Pagination.css"


function Pagination({pageCount ,handPageClick}) {
  return (
    <div> <ReactPaginate
    breakLabel="..."
    breakClassName="break-class"
    activeClassName="activepagination"
    containerClassName={"pagination"}
    nextLabel="next >"
    onPageChange={handPageClick}
    pageRangeDisplayed={5}
    pageCount={pageCount}
    previousLabel="< previous"
    renderOnZeroPageCount={null}
  />
  </div>
  )
}

export default Pagination;