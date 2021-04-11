import React from "react";

const DetailedPage = props => {
	return (
		<div>
			<h2>detailed page</h2>
			<h2>{props.match.params.country}</h2>
		</div>
	);
};

export default DetailedPage;
