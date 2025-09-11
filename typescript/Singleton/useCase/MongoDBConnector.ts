import { IDatabaseConnector } from '../interface.js'
import mongoose, { Mongoose } from 'mongoose'

export default class MongoDBConnector implements IDatabaseConnector {
  private static instance: MongoDBConnector
  public connection: Mongoose | null = null

  private constructor() {}

  public static getInstance(): MongoDBConnector {
    if (!MongoDBConnector.instance) {
      MongoDBConnector.instance = new MongoDBConnector()
    }
    return MongoDBConnector.instance
  }

  public async connect(): Promise<void> {
    if (this.connection) {
      console.log('MongoDB já está conectado.')
      return
    }
    try {
      const MONGO_URI = process.env.MONGO_URI as string
      this.connection = await mongoose.connect(MONGO_URI)
      console.log('✅ Conexão com MongoDB estabelecida com sucesso!')
    } catch (error) {
      console.error('❌ Erro ao conectar com MongoDB:', error)
      throw error
    }
  }

  public async disconnect(): Promise<void> {
    if (this.connection) {
      await mongoose.disconnect()
      this.connection = null
      console.log('Desconectado do MongoDB.')
    }
  }
}
