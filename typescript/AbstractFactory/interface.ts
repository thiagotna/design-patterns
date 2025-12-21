export default interface AbstractUserFactory {
  createUserAdmin(): AbstractUserAdmin
  createUserEditor(): AbstractUserEditor
}
