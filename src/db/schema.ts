import { pgTable, serial, varchar, boolean, integer, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { title } from "process";

export const customers = pgTable("customers", {
    id: serial("id").primaryKey(),
    firstName: varchar("first_name", { length: 255 }).notNull(),
    lastName: varchar("last_name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).unique().notNull(),
    phone: varchar("phone", { length: 255 }).notNull(),
    address1: varchar("address1", { length: 255 }).notNull(),
    address2: varchar("address2",),
    city: varchar("city", { length: 255 }).notNull(),
    state: varchar("state", { length: 255 }).notNull(),
    zip: varchar("zip", { length: 255 }).notNull(),
    country: varchar("country", { length: 255 }).notNull(),
    notes: text("notes"),
    active: boolean("active").default(true).notNull(),

    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()),
});

export const tickets = pgTable("tickets", {
    id: serial("id").primaryKey(),
    customerId: integer("customer_id").notNull().references(() => customers.id),
    title: varchar("title", { length: 255 }).notNull(),
    description: text("description"),
    completed: boolean("completed").default(false).notNull(),
    tech: varchar("tech", { length: 255 }).default("unassigned").notNull(),


})

export const customersRelations = relations(customers, ({ many }) => ({
    tickets: many(tickets),
}));

export const ticketsRelations = relations(tickets, ({ one }) => ({
    customer: one(customers, {
        fields: [tickets.customerId],
        references: [customers.id],
    }),
}));
