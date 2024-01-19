"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import styles from "./header.module.css";
import Link from "next/link";

const SchemeToggle = dynamic(() => import("../schemetoggle"), { ssr: false });

export default function Header() {
	const pathname = usePathname();
	return (
		<div className={styles.topbar}>
			<div className={styles.title}>Halliburton usefull links</div>

			{pathname === "/" ? (
				<>
					<Link href="/link/manager">Manager</Link>
					<Link href="/link/request">Request a link</Link>
				</>
			) : (
				<Link href="/">Back to Home</Link>
			)}

			<SchemeToggle />
		</div>
	);
}
