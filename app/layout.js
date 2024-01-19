import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Halliburton usefull links",
	description: "Halliburton usefull links",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
