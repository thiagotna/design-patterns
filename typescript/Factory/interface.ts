import { IDatabaseConnector } from '../Singleton/interface.js'

export default interface IDataBaseFactory {
  createConnector(): IDatabaseConnector
}
