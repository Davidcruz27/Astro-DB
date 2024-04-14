import { db, User } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
	await db.insert (User).values([
		{
			id: "dus12",
			email: "john.c.calhoun@examplepetstore.com",
			username: "patricio",
		},
		{
			id: "dus13",
			email: "juanlhoun@examplepetstore.com",
			username: "juan",
		},
	]);
}
