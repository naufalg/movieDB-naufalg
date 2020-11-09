import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { getDetailActions } from "../redux/actions/getDetail.action";

// bootstrap
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

// components
import "../styles/movie.scss";
import "../styles/font.scss";
import NavbarTop from "../components/web-elements/NavbarTop";
import placeholder from "../components/assets/placeholder-vertical.jpg";

export default function Movie() {
  // const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  const movieId = params.id;

  useEffect(() => {
    dispatch(getDetailActions(movieId));
  }, [dispatch, movieId]);

  const movieData = useSelector((state) => state.getDetailReducer.data);
  const loadDetail = useSelector((state) => state.getDetailReducer.isLoading);
  const errorDetail = useSelector((state) => state.getDetailReducer.isError);
  const errorMsg = useSelector((state) => state.getDetailReducer.error);

  console.log("errorDetail", errorDetail);

  return (
    <div>
      <NavbarTop className="mb-5" />
      <Container className="px-5 pt-4 mt-5">
        {loadDetail === false ? (
          errorDetail === false ? (
            <div>
              {movieData ? (
                <Row className="mt-3">
                  <Col md={12} lg={4} className="text-center">
                    <img
                      className="mx-auto imagePoster"
                      style={{ maxWidth: "500px", borderRadius: "20px" }}
                      src={
                        movieData.Poster === "N/A"
                          ? placeholder
                          : movieData.Poster
                      }
                      alt=""
                    />
                  </Col>
                  <Col className="pl-lg-5 pl-xl-2 mt-4  mt-lg-0" md={12} lg={8}>
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
                    <p className="mt-md-4">{movieData.Plot}</p>
                  </Col>
                </Row>
              ) : (
                <Spinner
                  className="text-center"
                  animation="border"
                  variant="info"
                />
              )}
            </div>
          ) : (
            <div>
              <Row className="text-center">
                <h3 className="text-center">
                  {errorMsg.data.Error || "Network error"}
                </h3>
              </Row>
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
