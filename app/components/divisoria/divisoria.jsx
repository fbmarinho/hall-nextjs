import styles from "./divisoria.module.css";
import Button from "../button/button";

export default function Divisoria({ title, button, warning, children }) {
	return (
		<div className={styles.divisoria}>
			<div className={styles.title}>
				{title}
				{button && <Button label={button.label} href={button.href} />}
			</div>
			{warning && (
				<div className={styles.warning}>
					<span>{warning}</span>
				</div>
			)}
			{children}
		</div>
	);
}
