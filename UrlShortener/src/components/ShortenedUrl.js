import React, { useState, useEffect } from "react";

const ShortenedUrl = ({ allUrls }) => {
	const [copy, setCopy] = useState({});

	function CopyText(url, i) {
		for (const property in copy) {
			copy[property] = false;
		}
		setCopy({ ...copy, [i]: true });
		navigator.clipboard.writeText(url);
	}

	useEffect(() => {
		if (allUrls.length !== 0) {
			copy[allUrls.length - 1] = false;
			setCopy(copy);
		}
	}, [allUrls, copy]);

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
								className={copy[index] ? "copied" : "copy"}
								disabled={copy[index] ? "disabled" : ""}
								onClick={() => CopyText(item.result.full_short_link, index)}>
								{copy[index] ? <>Copied!</> : <>Copy</>}
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ShortenedUrl;
