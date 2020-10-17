import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MovieCard = ({ title, description, posterUrl, rate, imgSrc, id }) => {
  let rateDiv = [];
  for (let i = 0; i < rate; i++) {
    rateDiv.push(<BsStarFill color="yellow" key={i} />);
  }

  return (
    <div className="box">
      <Card
        style={{ width: "18rem", margin: 10, background: "rgba(0,0,0,0.6)" }}
        className="text-center  text-white "
      >
        <Card.Header>
          {title}
          <br />
          {rateDiv}
        </Card.Header>
        <Card.Body>
          <Card.Img src={imgSrc} style={{ height: 280 }} />
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" href={posterUrl} target="_blank">
            Watch Now
          </Button>{" "}
          <Link to={`/${id}`}>
            {" "}
            <Button variant="secondary">Watch Trailer</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
