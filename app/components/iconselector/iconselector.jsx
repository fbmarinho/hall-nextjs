"use client";

import { icons } from "lucide-react";
import Icon from "../icon/icon";
import { useState } from "react";
import styles from "./iconselector.module.css";

export default function IconSelector() {
	const [currentIcon, setCurrentIcon] = useState("none");
	const names = Object.getOwnPropertyNames(icons).filter((p) => typeof icons[p] === "object");
	const handleChange = (e) => {
		setCurrentIcon(e.target.value);
	};
	return (
		<div className={styles.selector}>
			<select name="icon" onChange={handleChange}>
				<option value="" selected="true">
					None
				</option>
				{names.map((name, i) => (
					<option key={i} valeu={name}>
						{name}
					</option>
				))}
			</select>
			<Icon name={currentIcon} size={28} />
		</div>
	);
}
