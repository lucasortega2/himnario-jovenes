import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const himnos = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    titulo: column.text(),
    letra: column.text(),
    acordes: column.text({ optional: true }),
  },
});

export default defineDb({
  tables: {
    himnos,
  },
});
