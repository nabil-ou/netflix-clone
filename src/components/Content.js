import React from "react";
import Section from "./Section";

const Content = (props) => {
  return (
    <div className="sections-container">
      {props.data.map((item) => {
        return <Section category={item.category} movies={item.images} />;
      })}
    </div>
  );
};

export default Content;
