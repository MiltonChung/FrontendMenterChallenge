import React, { useState } from "react";
import { BASE_URL } from "../api";
import ShortenedUrl from "./ShortenedUrl";

const UrlForm = () => {
	const [apiRes, setApiRes] = useState({});
	const [allUrls, setAllUrls] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	function ShortenUrl(e) {
		e.preventDefault();
		setLoading(true);
		fetch(`${BASE_URL}shorten?url=${e.target.url.value}`)
			.then(res => res.json())
			.then(data => {
				if (data.ok) {
					setApiRes(data);
					setAllUrls([...allUrls, data]);
					setLoading(false);
					setError("");
					e.target.url.value = "";
				} else {
					setError(`Error Code ${data.error_code}: ${error}`);
					setLoading(false);
				}
			});
	}

	return (
		<>
			<section className="url-form-container">
				<form onSubmit={ShortenUrl}>
					<label htmlFor="url">
						<input type="text" name="url" id="url" placeholder="Shorten a link here..." />
					</label>
					<button type="submit">Shorten It!</button>
				</form>
			</section>
			<ShortenedUrl allUrls={allUrls} />
		</>
	);
};

export default UrlForm;
