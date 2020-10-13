import React from "react";
import { BsStarFill } from "react-icons/bs";
import { Form, FormControl } from "react-bootstrap";
const Filter = ({ title, handleSearch, handleStarRating, rate }) => {
  return (
    <div className="container" style={{ width: "24rem" }}>
      <Form className="d-flex justify-content-center">
        <FormControl
          type="text"
          value={title}
          onChange={handleSearch}
          className="mr-sm-2"
          placeholder="Search"
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          {[...Array(5)].map((elm, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i} style={{ marginRight: 5 }}>
                <input
                  type="radio"
                  style={{ display: "none" }}
                  value={ratingValue}
                  onClick={handleStarRating}
                />
                <BsStarFill
                  color={ratingValue <= rate ? "yellow" : "grey"}
                  size="32px"
                />
              </label>
            );
          })}
        </div>
      </Form>
    </div>
  );
};

export default Filter;
