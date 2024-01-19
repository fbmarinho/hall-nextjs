import Item from "@/app/components/item/item";
import { PrismaClient, Link } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Page() {
	const users = await prisma.link.findMany();

	return (
		<div>
			<div>
				{users.map((i: Link, n) => (
					<Item key={n} icon={i.icon} href={i.href} label={i.label} description={i.description} createdAt={i.createdAt} />
				))}
			</div>
		</div>
	);
}
