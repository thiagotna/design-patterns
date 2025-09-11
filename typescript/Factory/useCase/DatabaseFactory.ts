import { IDatabaseConnector } from '../../Singleton/interface.js'
import MongoDBConnector from '../../Singleton/useCase/MongoDBConnector.js'
import PostgreSQLConnector from '../../Singleton/useCase/PostgreSQLConnector.js'
import IDataBaseFactory from '../interface.js'

export default class DatabaseFactory implements IDataBaseFactory {
  createConnector(): IDatabaseConnector {
    const databaseType = process.env.DB_TYPE?.toLocaleLowerCase()

    switch (databaseType) {
      case 'mongodb':
        return MongoDBConnector.getInstance()
      case 'postgres':
        return PostgreSQLConnector.getInstance()
      default:
        throw new Error('Invalid Database type.')
    }
  }
}
