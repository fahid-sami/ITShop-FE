import React from "react";

const heading = function(props) {
  return (
    <div color={props.bg} height={props.height}>
      <h1 color={props.bg}>Hello</h1>
    </div>
  );
};
export default heading;
