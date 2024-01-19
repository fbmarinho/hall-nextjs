import Link from "next/link";
import styles from "./button.module.css";

export default function Button({ label, href }) {
	return (
		<Link className={styles.titlebutton} href={href} target="_blank">
			{label}
		</Link>
	);
}
