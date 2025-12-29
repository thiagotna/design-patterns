import { IDatabaseConnector } from '../Singleton/useCase/interface.js'

export default interface IDataBaseFactory {
  createConnector(): IDatabaseConnector
}
