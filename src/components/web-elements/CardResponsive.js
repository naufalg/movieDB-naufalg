import React from "react";
import { Link } from "react-router-dom";

// bootstrap
import { Card } from "react-bootstrap";

// components
import "../../styles/cards.scss";
import placeholder from "../assets/placeholder-vertical.jpg";

export default function CardResponsive(props) {
  return (
    <Card
      className="cardClass mb-5 bg-light text-dark mx-auto"
      style={{ width: "100%" }}
    >
      <Link to={`/movie/${props.movieId}`}>
        <Card.Img
          className="cardImg"
          //   style={{ height: "30vh" }}
          variant="top"
          src={props.image !== "N/A" ? props.image : placeholder}
        />
        <Card.Body className="pt-lg-2 pb-lg-2 px-lg-3 p-md-3">
          <Card.Title className="mb-1 cardTitle">{props.title} </Card.Title>
          <Card.Text className="cardText mb-1">{props.year}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}
