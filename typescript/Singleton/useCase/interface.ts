import { Mongoose } from 'mongoose'
import { DataSource } from 'typeorm'

export interface IDatabaseConnector {
  connect(): Promise<void>
  disconnect(): Promise<void>
}
