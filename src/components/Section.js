import React from "react";

const Section = ({ category, movies }) => {
  return (
    <div className="section">
      <h1>{category}</h1>
      <div className="movies-content">
        {movies.map((item, i) => {
          return <img src={item} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Section;
