import { defineDb, defineTable, column } from "astro:db";

// https://astro.build/db/config

const User = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		email: column.text(),
		username: column.text(),
	},
});

const Todo = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		title: column.text(),
		description: column.text(),
		category: column.text(),
		user_id: column.text({ references: () => User.columns.id }),
		category_id: column.text({ references: () => Category.columns.id }),
	},
});

const Category = defineTable({
	columns: {
		id: column.text({ primaryKey: true }),
		label: column.text(),
	},
});

export default defineDb({
	tables: {
		User,
		Todo,
		Category
	},
});