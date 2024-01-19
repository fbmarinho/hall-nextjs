import styles from "./page.module.css";
import IconSelector from "../../../components/iconselector/iconselector";
import { create } from "@/app/actions/link";

export default function Page() {
	return (
		<main className={styles.request}>
			<form action={create} method="POST">
				<div className={styles.full}>
					<div className={styles.half}>
						<label htmlFor="icon">Icon:</label>
						<IconSelector />
					</div>
					<div className={styles.half}>
						<label htmlFor="type">Type:</label>
						<select name="type">
							<option value="none">Direct access</option>
							<option value="auth">Needs email authentication</option>
							<option value="vpn">Needs to be in VPN</option>
							<option value="br">Only work in client network</option>
						</select>
					</div>
				</div>
				<div>
					<label htmlFor="label">Label:</label>
					<input type="text" name="label" placeholder="ex: Google" />
				</div>
				<div>
					<label htmlFor="description">Description:</label>
					<input type="text" name="description" placeholder="ex: Search stuff" />
				</div>
				<div>
					<label htmlFor="url">URL:</label>
					<input type="text" name="href" placeholder="ex: http://www.google.com" />
				</div>

				<input type="submit" value="Request new link" />
			</form>
		</main>
	);
}
