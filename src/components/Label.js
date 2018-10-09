import React from "react";

const label = function(props) {
	return (
		<label className={props.classes}> {props.label} </label>
	)
};

export default label;