import mysql, { PoolOptions } from 'mysql2/promise'
import { ConnectionOptions } from 'tls'

export async function query({ query, values = [] }: { query: string; values: any[] }) {
    const dbConnection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT, 10) : undefined,
    } as ConnectionOptions)

    try {
        const [results] = await dbConnection.execute(query, values)
        dbConnection.end()
        return results
    } catch (error) {
        throw new Error('Could not connect to database')
    }
}
