export default interface ISingleton {
  getInstance(): ISingleton
  businessLogic(): void
}
