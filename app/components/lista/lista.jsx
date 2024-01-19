import styles from "./lista.module.css";
import Item from "../item/item";

export default function Lista({ items }) {
	return (
		<div className={styles.lista}>
			{items?.map((i, n) => (
				<Item key={n} icon={i.icon} href={i.href} label={i.label} description={i.description} createdAt={i.createdAt} />
			))}
		</div>
	);
}
