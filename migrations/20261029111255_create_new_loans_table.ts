import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable("loans", function (table) {
		table.increments();
		table.integer("toolid", 100).notNullable().references("tools.id").onDelete("CASCADE");
		table.integer("studentId", 100).notNullable().references("students.id");
		table.string("lentAt", 500);
		table.string("returnedAt", 500).nullable();
		// empty (null) = the tool is available, otherwise the id of the student who has it
	});
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTable("loans");
}
