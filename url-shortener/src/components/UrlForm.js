import React from "react";

const UrlForm = () => {
	return (
		<section className="url-form-container">
			<form>
				<label htmlFor="url">
					<input type="text" name="url" id="url" placeholder="Shorten a link here..." />
				</label>
				<button type="submit">Shorten It!</button>
			</form>
		</section>
	);
};

export default UrlForm;
