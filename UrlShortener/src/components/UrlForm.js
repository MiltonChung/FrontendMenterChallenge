import React, { useState } from "react";
import { BASE_URL } from "../api";
import ShortenedUrl from "./ShortenedUrl";
import LoadingIcon from "./LoadingIcon";

const UrlForm = () => {
	const [allUrls, setAllUrls] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	function ShortenUrl(e) {
		e.preventDefault();

		if (e.target.url.value === "") {
			setError("Please add a link");
			return;
		}

		setError("");
		setLoading(true);
		fetch(`${BASE_URL}shorten?url=${e.target.url.value}`)
			.then(res => res.json())
			.then(data => {
				if (data.ok) {
					setAllUrls([...allUrls, data]);
					setLoading(false);
					setError("");
					e.target.url.value = "";
				} else {
					setError(`${data.error}`);
					setLoading(false);
				}
			})
			.catch(err => console.log(err));
	}

	return (
		<>
			<section className="url-form-container">
				<form onSubmit={ShortenUrl}>
					<label htmlFor="url">
						<input
							className={error ? "input-error" : ""}
							type="text"
							name="url"
							id="url"
							placeholder="Shorten a link here..."
						/>
					</label>
					{loading ? (
						<button disabled>
							<LoadingIcon />
						</button>
					) : (
						<button type="submit">Shorten It!</button>
					)}
				</form>
				<small className={error ? "error" : "hide"}>{error}!</small>
			</section>
			<ShortenedUrl allUrls={allUrls} />
		</>
	);
};

export default UrlForm;
