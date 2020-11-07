import React from "react";
// import { useHistory } from "react-router-dom";

import { Pagination } from "react-bootstrap";

export default function SearchPagination(props) {
  //   const history = useHistory();
  const pageNumber = props.pageNumber;
  const totalPage = props.totalPage;
  const movieName = props.movieName;

  const goFirstPage = () => {
    window.location.href = `/search/${movieName}/${1}`;
  };

  const goSecondPage = () => {
    window.location.href = `/search/${movieName}/2`;
  };

  const goThirdPage = () => {
    window.location.href = `/search/${movieName}/3`;
  };

  const goFourthPage = () => {
    window.location.href = `/search/${movieName}/4`;
  };

  const goFifthPage = () => {
    window.location.href = `/search/${movieName}/5`;
  };

  const goSixthPage = () => {
    window.location.href = `/search/${movieName}/6`;
  };

  const goSeventhPage = () => {
    window.location.href = `/search/${movieName}/7`;
  };

  const goBackTwo = () => {
    window.location.href = `/search/${movieName}/${pageNumber - 2}`;
  };

  const goBackOne = () => {
    window.location.href = `/search/${movieName}/${pageNumber - 1}`;
  };

  const goNextOne = () => {
    window.location.href = `/search/${movieName}/${pageNumber + 1}`;
  };

  const goNextTwo = () => {
    window.location.href = `/search/${movieName}/${pageNumber + 2}`;
  };

  //   const goFifthLast = () => {
  //     window.location.href = `/search/${movieName}/${totalPage - 4}`;
  //   };

  //   const goFourthLast = () => {
  //     window.location.href = `/search/${movieName}/${totalPage - 3}`;
  //   };

  const goThirdLast = () => {
    window.location.href = `/search/${movieName}/${totalPage - 2}`;
  };

  const goSecondLast = () => {
    window.location.href = `/search/${movieName}/${totalPage - 1}`;
  };

  const goLastPage = () => {
    window.location.href = `/search/${movieName}/${totalPage}`;
  };

  //   const minusTwoTotal = parseInt(totalPage - 2);
  //   console.log("minusTwoTotal", minusTwoTotal);

  switch (true) {
    case totalPage === 2:
      switch (true) {
        case pageNumber === 1:
          return (
            <Pagination>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 2:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item active>{2}</Pagination.Item>
            </Pagination>
          );
        default:
          break;
      }
      break;
    case totalPage === 3:
      switch (true) {
        case pageNumber === 1:
          return (
            <Pagination>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 2:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item active>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 3:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item active>{3}</Pagination.Item>
            </Pagination>
          );
        default:
          break;
      }
      break;
    case totalPage === 4:
      switch (true) {
        case pageNumber === 1:
          return (
            <Pagination>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 2:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item active>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 3:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item active>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 4:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item active>{4}</Pagination.Item>
            </Pagination>
          );
        default:
          break;
      }
      break;
    case totalPage === 5:
      switch (true) {
        case pageNumber === 1:
          return (
            <Pagination>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
              <Pagination.Item onClick={goFifthPage}>{5}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 2:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item active>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
              <Pagination.Item onClick={goFifthPage}>{5}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 3:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item active>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
              <Pagination.Item onClick={goFifthPage}>{5}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 4:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item active>{4}</Pagination.Item>
              <Pagination.Item onClick={goFifthPage}>{5}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 5:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
              <Pagination.Item active>{5}</Pagination.Item>
            </Pagination>
          );
        default:
          break;
      }
      break;
    case totalPage === 6:
      switch (true) {
        case pageNumber === 1:
          return (
            <Pagination>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
              <Pagination.Item onClick={goFifthPage}>{5}</Pagination.Item>
              <Pagination.Item onClick={goSixthPage}>{6}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 2:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item active>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
              <Pagination.Item onClick={goFifthPage}>{5}</Pagination.Item>
              <Pagination.Item onClick={goSixthPage}>{6}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 3:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item active>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
              <Pagination.Item onClick={goFifthPage}>{5}</Pagination.Item>
              <Pagination.Item onClick={goSixthPage}>{6}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 4:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item active>{4}</Pagination.Item>
              <Pagination.Item onClick={goFifthPage}>{5}</Pagination.Item>
              <Pagination.Item onClick={goSixthPage}>{6}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 5:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
              <Pagination.Item active>{5}</Pagination.Item>
              <Pagination.Item onClick={goSixthPage}>{6}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 6:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
              <Pagination.Item onClick={goFifthPage}>{5}</Pagination.Item>
              <Pagination.Item active>{6}</Pagination.Item>
            </Pagination>
          );
        default:
          break;
      }
      break;
    case totalPage === 7:
      switch (true) {
        case pageNumber === 1:
          return (
            <Pagination>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
              <Pagination.Item onClick={goFifthPage}>{5}</Pagination.Item>
              <Pagination.Item onClick={goSixthPage}>{6}</Pagination.Item>
              <Pagination.Item onClick={goSeventhPage}>{7}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 2:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item active>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
              <Pagination.Item onClick={goFifthPage}>{5}</Pagination.Item>
              <Pagination.Item onClick={goSixthPage}>{6}</Pagination.Item>
              <Pagination.Item onClick={goSeventhPage}>{7}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 3:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item active>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
              <Pagination.Item onClick={goFifthPage}>{5}</Pagination.Item>
              <Pagination.Item onClick={goSixthPage}>{6}</Pagination.Item>
              <Pagination.Item onClick={goSeventhPage}>{7}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 4:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item active>{4}</Pagination.Item>
              <Pagination.Item onClick={goFifthPage}>{5}</Pagination.Item>
              <Pagination.Item onClick={goSixthPage}>{6}</Pagination.Item>
              <Pagination.Item onClick={goSeventhPage}>{7}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 5:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
              <Pagination.Item active>{5}</Pagination.Item>
              <Pagination.Item onClick={goSixthPage}>{6}</Pagination.Item>
              <Pagination.Item onClick={goSeventhPage}>{7}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 6:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
              <Pagination.Item onClick={goFifthPage}>{5}</Pagination.Item>
              <Pagination.Item active>{6}</Pagination.Item>
              <Pagination.Item onClick={goSeventhPage}>{7}</Pagination.Item>
            </Pagination>
          );
        case pageNumber === 7:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
              <Pagination.Item onClick={goFifthPage}>{5}</Pagination.Item>
              <Pagination.Item onClick={goSixthPage}>{6}</Pagination.Item>
              <Pagination.Item active>{7}</Pagination.Item>
            </Pagination>
          );
        default:
          break;
      }
      break;
    case totalPage > 7:
      switch (true) {
        case pageNumber === 1:
          return (
            <Pagination>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Last onClick={goNextOne} />
              <Pagination.Item onClick={goLastPage}>
                {totalPage}
              </Pagination.Item>
            </Pagination>
          );
        case pageNumber === 2:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item active>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
              <Pagination.Last onClick={goNextOne} />
              <Pagination.Item onClick={goLastPage}>
                {totalPage}
              </Pagination.Item>
            </Pagination>
          );
        case pageNumber === 3:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item active>{3}</Pagination.Item>
              <Pagination.Item onClick={goFourthPage}>{4}</Pagination.Item>
              <Pagination.Item onClick={goFifthPage}>{5}</Pagination.Item>
              <Pagination.Last onClick={goNextOne} />
              <Pagination.Item onClick={goLastPage}>
                {totalPage}
              </Pagination.Item>
            </Pagination>
          );
        case pageNumber === 4:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.Item onClick={goSecondPage}>{2}</Pagination.Item>
              <Pagination.Item onClick={goThirdPage}>{3}</Pagination.Item>
              <Pagination.Item active>{4}</Pagination.Item>
              <Pagination.Item onClick={goFifthPage}>{5}</Pagination.Item>
              <Pagination.Item onClick={goSixthPage}>{6}</Pagination.Item>
              <Pagination.Last onClick={goNextOne} />
              <Pagination.Item onClick={goLastPage}>
                {totalPage}
              </Pagination.Item>
            </Pagination>
          );
        case pageNumber > 4 && pageNumber < totalPage - 3:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.First onClick={goBackOne} />

              <Pagination.Item onClick={goBackTwo}>
                {pageNumber - 2}
              </Pagination.Item>
              <Pagination.Item onClick={goBackOne}>
                {pageNumber - 1}
              </Pagination.Item>
              <Pagination.Item active>{pageNumber}</Pagination.Item>
              <Pagination.Item onClick={goNextOne}>
                {pageNumber + 1}
              </Pagination.Item>
              <Pagination.Item onClick={goNextTwo}>
                {pageNumber + 2}
              </Pagination.Item>

              <Pagination.Last onClick={goNextOne} />
              <Pagination.Item onClick={goLastPage}>
                {totalPage}
              </Pagination.Item>
            </Pagination>
          );
        case pageNumber === totalPage - 3:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.First onClick={goBackOne} />

              <Pagination.Item onClick={goBackTwo}>
                {pageNumber - 2}
              </Pagination.Item>
              <Pagination.Item onClick={goBackOne}>
                {pageNumber - 1}
              </Pagination.Item>
              <Pagination.Item active>{pageNumber}</Pagination.Item>
              <Pagination.Item onClick={goThirdLast}>
                {totalPage - 2}
              </Pagination.Item>

              <Pagination.Item onClick={goSecondLast}>
                {totalPage - 1}
              </Pagination.Item>
              <Pagination.Item onClick={goLastPage}>
                {totalPage}
              </Pagination.Item>
            </Pagination>
          );
        case pageNumber === totalPage - 2:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.First onClick={goBackOne} />

              <Pagination.Item onClick={goBackTwo}>
                {pageNumber - 2}
              </Pagination.Item>
              <Pagination.Item onClick={goBackOne}>
                {pageNumber - 1}
              </Pagination.Item>
              <Pagination.Item active>{pageNumber}</Pagination.Item>
              <Pagination.Item onClick={goSecondLast}>
                {totalPage - 1}
              </Pagination.Item>
              <Pagination.Item onClick={goLastPage}>
                {totalPage}
              </Pagination.Item>
            </Pagination>
          );
        case pageNumber === totalPage - 1:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.First onClick={goBackOne} />
              <Pagination.Item onClick={goBackTwo}>
                {pageNumber - 2}
              </Pagination.Item>
              <Pagination.Item onClick={goBackOne}>
                {pageNumber - 1}
              </Pagination.Item>
              <Pagination.Item active>{pageNumber}</Pagination.Item>
              <Pagination.Item onClick={goLastPage}>
                {totalPage}
              </Pagination.Item>
            </Pagination>
          );
        case pageNumber === totalPage:
          return (
            <Pagination>
              <Pagination.Item onClick={goFirstPage}>{1}</Pagination.Item>
              <Pagination.First onClick={goBackOne} />

              <Pagination.Item onClick={goBackTwo}>
                {pageNumber - 2}
              </Pagination.Item>
              <Pagination.Item onClick={goBackOne}>
                {pageNumber - 1}
              </Pagination.Item>
              <Pagination.Item active>{totalPage}</Pagination.Item>
            </Pagination>
          );
        default:
          break;
      }
      break;
    default:
      break;
  }
}
