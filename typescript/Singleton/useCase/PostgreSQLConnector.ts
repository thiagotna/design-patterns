import { IDatabaseConnector } from '../interface.js'
import { DataSource } from 'typeorm'

export default class PostgreSQLConnector implements IDatabaseConnector {
  private static instance: PostgreSQLConnector
  public connection: DataSource | null = null

  private constructor() {}

  public static getInstance(): PostgreSQLConnector {
    if (!PostgreSQLConnector.instance) {
      PostgreSQLConnector.instance = new PostgreSQLConnector()
    }
    return PostgreSQLConnector.instance
  }

  public async connect(): Promise<void> {
    if (this.connection) {
      console.log('PostgreSQL já está conectado.')
      return
    }
    try {
      const AppDataSource = new DataSource({
        type: 'postgres',
        host: process.env.PG_HOST as string,
        port: Number(process.env.PG_PORT),
        username: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
        synchronize: true,
        entities: [],
      })
      console.log('✅ Conexão com PostgreSQL estabelecida com sucesso!')
    } catch (error) {
      console.error('❌ Erro ao conectar com PostgreSQL:', error)
      throw error
    }
  }

  public async disconnect(): Promise<void> {
    if (this.connection) {
      this.connection = null
      console.log('Desconectado do PostgreSQL.')
    }
  }
}
