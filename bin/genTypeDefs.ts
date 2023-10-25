import config from "../src/core/config";
import knex from "../src/db/knex";

async function generateTypeDefs() {
    // Fetch table names from the database
    const result = await knex.raw('SELECT table_name FROM information_schema.tables WHERE table_schema = ?', [config.DB_NAME]);
    const tables = result[0];
    const typeDefs = [];

    const tablesToSkip = [config.MIGRATION_TABLE, `${config.MIGRATION_TABLE}_lock`];

    for (const table of tables) {
        const tableName = table['table_name'];

        // Check if the table should be skipped
        if (tablesToSkip.includes(tableName)) continue;

        // Now, you can proceed as before to fetch column information and generate type definitions.
        const columns = await knex(tableName).columnInfo();
        const fields = Object.keys(columns).map((column) => {
            return `  ${column}: ${mapColumnTypeToGraphQL(columns[column].type)}`;
        });

        typeDefs.push(`type ${tableName} {\n${fields.join('\n')}\n}\n`);
    }

    console.log(typeDefs.join('\n'));
}

function mapColumnTypeToGraphQL(dbType : any) {
    // Map database column types to GraphQL types as needed
    // You may need to handle different data types and GraphQL scalars here
    // For example, map 'INT' to 'Int', 'VARCHAR' to 'String', etc.
    // Map common MySQL data types to GraphQL scalars
    switch (dbType) {
        case 'int':
            return 'Int';
        case 'bigint':
            return 'Int'; // You might choose to use a custom scalar for larger integers
        case 'varchar':
        case 'text':
            return 'String';
        case 'datetime':
            return 'DateTime'; // You may need to define a custom DateTime scalar
        case 'decimal':
            return 'Float';
        // Add more cases for other data types as needed
        default:
            return 'String'; // Fallback to String for unknown data types
    }
}

generateTypeDefs()