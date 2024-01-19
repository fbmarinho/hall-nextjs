import Link from "next/link";
import styles from "./item.module.css";
import Icon from "../icon/icon";

export default function Item({ icon, label, href, description, createdAt }) {
	const now = Date.now();
	const creation = createdAt ? Date.parse(createdAt) : Date.now();
	const diffTime = Math.abs(now - creation);
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	return (
		<div className={styles.item}>
			<Link className={styles.link} href={href} target="_blank">
				{diffDays < 31 && <span className={styles.new}>NEW</span>}
				<div className={styles.label}>
					<Icon name={icon} size={20} />
					{label}
				</div>
				<div className={styles.description}>{description}</div>
			</Link>
		</div>
	);
}
