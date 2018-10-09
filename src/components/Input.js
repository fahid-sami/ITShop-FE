import React from "react";

const input = function(props) {
	console.log(props);
	return (
         <input className="form-control" maxLength={props.properties.maxLength} type={props.properties.type} required={props.properties.required} />
	)
};

export default input;