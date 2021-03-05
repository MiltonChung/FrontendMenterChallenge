import React, { useState, useEffect } from "react";

const ShortenedUrl = ({ allUrls }) => {
	const [copy, setCopy] = useState([]);

	function CopyText(url, i) {
		copy[i] = true;
		console.log(copy, i);
		setCopy(copy);
		console.log(url);
	}

	useEffect(() => {
		let copyArr = [];
		allUrls.forEach(() => {
			copyArr.push(false);
		});
		setCopy(copyArr);
	}, [allUrls]);

	return (
		<div className="shortened-url-list">
			{allUrls.map((item, index) => {
				return (
					<div className="url-item" key={item.result.code}>
						<p className="original">{item.result.original_link}</p>
						<div className="right">
							<a
								href={item.result.full_short_link}
								rel="noreferrer"
								target="_blank"
								className="shortened">
								{item.result.full_short_link}
							</a>
							<button
								className={copy ? "copied" : "copy"}
								onClick={() => CopyText(item.result.full_short_link, index)}>
								{copy ? <>Copied!</> : <>Copy</>}
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ShortenedUrl;
