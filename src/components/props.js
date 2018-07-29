import React from "react";

const props = function(props) {
  return (
    <div>
      <form action="/action_page.php">
        input 10 letters
        <input
          type="text"
          pattern="[A-Za-z]{10}"
          maxLength={props.maxlength}
          minLength={props.minLength}
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
};
export default props;
