"use client";
import { useRef } from "react";
import styles from "./urlbar.module.css";

export default function UrlBar() {
	const url = useRef();
	function handleSubmit(e) {
		e.preventDefault();
		var url = document.getElementById("url").value;
		var fullurl = "https://accesstfa.halliburton.com/dana/home/launch.cgi?url=" + url;
		window.open(fullurl, "_blank");
	}

	return (
		<div id="urlbar" className={styles.urlbar}>
			<form id="urlform" onSubmit={handleSubmit}>
				<label htmlFor="url">URL:</label>
				<input ref={url} id="url" name="url" type="text" placeholder="Ex: tsorders ou www.google.com" />
				{url.current}
				<input type="submit" value="Abrir" disabled={url.value == "" ? true : false} />
			</form>
		</div>
	);
}
