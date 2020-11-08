import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// redux
import { getSearchActions } from "../redux/actions/getSearch.action";

// bootstrap
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Spinner,
  CardGroup,
} from "react-bootstrap";

// components
import "../styles/font.scss";
import "../styles/search.scss";
import SearchPagination from "../components/web-elements/SearchPagination";
import NavbarTop from "../components/web-elements/NavbarTop";
import CardResponsive from "../components/web-elements/CardResponsive";

export default function Search() {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  const searched = params.search;
  const pageNow = params.page;

  const pageNumber = parseInt(pageNow);

  console.log("pageNow", pageNow);

  useEffect(() => {
    dispatch(getSearchActions(searched, pageNow));
  }, [dispatch, searched, pageNow]);

  const searchData = useSelector((state) => state.getSearchReducer.data.Search);
  console.log("searchData", searchData);

  const loadData = useSelector((state) => state.getSearchReducer.isLoading);

  const pageData = useSelector(
    (state) => state.getSearchReducer.data.totalResults
  );
  console.log("pageData", pageData);

  const totalPage = Math.ceil(pageData / 10);
  console.log("totalPage", totalPage);

  const errorSearch = useSelector((state) => state.getSearchReducer.isError);
  const errorMsg = useSelector((state) => state.getSearchReducer.error);

  return (
    <div>
      <NavbarTop className="mb-5" />
      <Container className="px-5 pt-4 mt-5">
        <h3 className="searchTitle lato">{`Search result: ${searched}`}</h3>
        {loadData === false ? (
          errorSearch === false ? (
            <div>
              <Row className="mt-4 px-lg-4 ">
                {searchData ? (
                  searchData.map((item, index) => (
                    <Col key={index} xs={12} md={6} lg={3}>
                      <CardResponsive
                        
                        movieId={item.imdbID}
                        image={item.Poster}
                        title={item.Title}
                        year={item.Year}
                      />
                    </Col>
                  ))
                ) : (
                  <div className="mt-5 pt-5 text-center">
                    <Spinner animation="border" variant="info" />
                  </div>
                )}
              </Row>
              <br />
              <Row className="mb-3 justify-content-center mx-auto">
                {totalPage > 1 ? (
                  <SearchPagination
                  className="text-dark"
                    pageNumber={pageNumber}
                    totalPage={totalPage}
                    movieName={searched}
                  />
                ) : (
                  <div>
                    {/* <Spinner animation="border" variant="info" /> */}
                  </div>
                )}
              </Row>
            </div>
          ) : (
            <div>
              <br />
              <br />
              <br />
              <h3>{errorMsg.data.Error || "Network error"}</h3>
            </div>
          )
        ) : (
          <div className="mt-5 pt-5 text-center">
            <Spinner animation="border" variant="info" />
          </div>
        )}
      </Container>
    </div>
  );
}
