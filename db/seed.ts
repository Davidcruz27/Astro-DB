import { db, User, Todo, Category } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
		{
			id: "dus12",
			email: "john.c.calhoun@examplepetstore.com",
			username: "patricio",
		},
		{
			id: "djhg13",
			email: "juanlhoun@examplepetstore.com",
			username: "juan",
		},
	]);

	await db.insert(Category).values([
		{
			id: "kjaa145",
			label: "Frameworks",
		},
		{
			id: "hiufhf65",
			label: "Marketing",
		},
	]);

	await db.insert(Todo).values([
		{
			id: "hgft12",
			title: "Crear funcion fecha",
			description: "Crear funcion que adapte las fechas",
			category_id: "kjaa145",
			user_id: "dus12",
		},
		{
			id: "hgft13",
			title: "Crear anucio",
			description: "Crear anuncio publicitario",
			category_id: "hiufhf65",
			user_id: "djhg13",
		}
	]);
}
