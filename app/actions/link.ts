"use server";
import { PrismaClient, Link } from "@prisma/client";

const prisma = new PrismaClient();

export async function create(formData: FormData) {
	const data = {
		icon: formData.get("icon"),
		label: formData.get("label"),
		description: formData.get("description"),
		href: formData.get("href"),
		type: formData.get("type"),
		status: "requested",
		createdAt: Date.now().toLocaleString(),
		modifiedAt: Date.now().toLocaleString(),
	};

	console.log(data);

	return data;
}
