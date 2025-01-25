import style from "./pages.module.css";

const Pages = ({
  totalDrivers,
  currentPage,
  setCurrentPage,
  driversPerPage,
  handlePageChange
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalDrivers / driversPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviousPage = () => {
    handlePageChange(currentPage - 1);
  };

  const onNextPage = () => {
    handlePageChange(currentPage + 1);
  };

  const onSpecificPage = (n) => {
    handlePageChange(n);
  };

  const maxDisplayedPages = 5;
  const halfMaxDisplayedPages = Math.floor(maxDisplayedPages / 2);

  let startPage = Math.max(1, currentPage - halfMaxDisplayedPages);
  
  let endPage = Math.min(
    Math.ceil(totalDrivers / driversPerPage),
    startPage + maxDisplayedPages - 1
  );

  if (endPage - startPage < maxDisplayedPages - 1) {
    startPage = Math.max(1, endPage - maxDisplayedPages + 1);
  }
  if(currentPage > 1 && totalDrivers <= 9) {
    handlePageChange(1)
  }

  const visiblePageNumbers = pageNumbers.slice(startPage - 1, endPage);
console.log(visiblePageNumbers);
  return (
    <div className={style.paginationcontainer}>
      
      <button
        onClick={onPreviousPage}
        disabled={currentPage === 1}
        className={style.buttonn}
      >
        Previous
      </button>

      {visiblePageNumbers.map((noPage) => (
        <button
          key={noPage}
          onClick={() => onSpecificPage(noPage)}
          className={`${style.paginationbutton} ${
            noPage === currentPage ? style.paginationbuttonactive : ""
          }`}
        >
          {noPage}
        </button>
      ))}

      <button
        onClick={onNextPage}
        disabled={currentPage === Math.ceil(totalDrivers / driversPerPage)}
        className={style.butonn}
      >
        Next
      </button>
    </div>
  );
};

export default Pages;

{/* <button
        onClick={onPreviousPage}
        disabled={currentPage === 1}
        className={style.buttonn}
      >
        Previous
      </button>

      {visiblePageNumbers.map((noPage) => (
        <button
          key={noPage}
          onClick={() => onSpecificPage(noPage)}
          className={`${style.paginationbutton} ${
            noPage === currentPage ? style.paginationbuttonactive : ""
          }`}
        >
          {noPage}
        </button>
      ))}

      <button
        onClick={onNextPage}
        disabled={currentPage === Math.ceil(totalDrivers / driversPerPage)}
        className={style.butonn}
      >
        Next
      </button> */}