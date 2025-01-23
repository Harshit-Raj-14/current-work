import { boolean, serial, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const Users = pgTable('users',{
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    email: varchar('email').notNull(),
    imageURL: varchar('imageURL').notNull(),
    subscription: boolean('subscription').default(false)
})