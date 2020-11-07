import React from "react";

export default function CardHorizontal() {
  return (
    <div className="d-none d-xl-block">
      <Link to={`/movie/${props.movieId}`}>
        <Col lg={4}>
          <img src={props.image} alt="" />
        </Col>
        <Col lg={8}>
          <p>{props.title}</p>
          <p>{props.year}</p>
        </Col>
      </Link>
    </div>
  );
}
