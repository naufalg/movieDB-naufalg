import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getDetailActions } from "../redux/actions/getDetail.action";

// bootstrap
import { Card, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { BackspaceFill, StarFill } from "react-bootstrap-icons";

// components
import '../styles/movie.scss'
import '../styles/font.scss'
import NavbarTop from "../components/web-elements/NavbarTop";

export default function Movie() {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  const movieId = params.id;

  useEffect(() => {
    dispatch(getDetailActions(movieId));
  }, [dispatch]);

  const movieData = useSelector((state) => state.getDetailReducer.data);
  const loadDetail = useSelector((state) => state.getDetailReducer.isLoading);
  const errorMsg = useSelector((state) => state.getDetailReducer.isError);
  console.log("errorMsg", errorMsg);

  return (
    <div>
      <NavbarTop className="mb-5" />
      <Container className="px-5 pt-4 mt-5">
        {errorMsg === false ? (
          loadDetail === true ? (
            <div className="mt-5 pt-5 text-center">
              <Spinner animation="border" variant="info" />
            </div>
          ) : (
            <div>
              {movieData ? (
                <Row className="mt-3">
                  <Col md={12} lg={4} className="text-center">
                    <img
                      className="mx-auto imagePoster"
                      style={{ maxWidth: "500px", borderRadius: "20px" }}
                      src={movieData.Poster}
                      alt=""
                    />
                  </Col>
                  <Col className="pl-lg-5 pl-xl-2" md={12} lg={8}>
                    <h3 className="mb-0">{`${movieData.Title}`}</h3>
                    <h5>{`(${movieData.Year})`}</h5>
                    <p>
                      {movieData.Type ? (
                        <strong>
                          {movieData.Type.replace(
                            /^./,
                            movieData.Type[0].toUpperCase()
                          )}
                        </strong>
                      ) : (
                        ""
                      )}
                      <br />
                      {movieData.Rated !== "N/A" ? (
                        <strong>{movieData.Rated}</strong>
                      ) : (
                        ""
                      )}
                      &nbsp;{movieData.Genre}
                      <br />
                      <strong>Rating: </strong>
                      <StarFill className="mb-2" size={20} color="orange" />
                      &nbsp;
                      <span style={{ fontSize: "1.3em" }}>
                        {movieData.imdbRating}
                      </span>
                      <small>/10</small>
                      <br />
                      <strong>Cast:</strong>{" "}
                      {movieData.Actors !== "N/A" ? movieData.Actors : ""}
                    </p>
                    <p>{movieData.Plot}</p>
                  </Col>
                </Row>
              ) : (
                {
                  /* <Spinner
                  className="text-center"
                  animation="border"
                  variant="info"
                /> */
                }
              )}
            </div>
          )
        ) : (
          <div>
            <Row className="text-center">
              <h3 className="text-center">
                Network error, Please try again or go back
              </h3>
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
}
