"use server";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

type Link = z.infer<typeof LinkSchemma>;
const now = new Date(Date.now()).toISOString();
const LinkSchemma = z.object({
  icon: z.string(),
  label: z.string().min(3),
  description: z.string(),
  href: z.string().url(),
  type: z.string(),
  status: z.string().default("requested"),
  createdAt: z.string().default(now),
  modifiedAt: z.string().default(now),
});

export type FormState = {
  message: string;
  errors?: string;
};

export async function create(prevState: FormState, formData: FormData) {
  const form = Object.fromEntries(formData.entries());

  // validation
  const validation = LinkSchemma.safeParse(form);

  if (!validation.success) {
    return {
      message: "validation errors",
      errors: validation.error.flatten().fieldErrors,
    };
  }

  // mutate data
  try {
    await prisma.link.create({ data: validation.data });
    return {
      message: "added",
    };
  } catch (e) {
    return {
      message: "Error creating personnel",
      errors: e,
    };
  }
}
