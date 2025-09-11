import { Mongoose } from 'mongoose'
import { DataSource } from 'typeorm'

export interface IDatabaseConnector {
  connection: Mongoose | DataSource | null
  connect(): Promise<void>
  disconnect(): Promise<void>
}
