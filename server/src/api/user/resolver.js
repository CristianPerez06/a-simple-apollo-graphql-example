const resolver = {
  Query: {
    getUsers: async () => [
      { id: 1, firstName: 'Name 1', lastName: 'LastName 1', email: 'n1@mail.com' },
      { id: 2, firstName: 'Name 2', lastName: 'LastName 2', email: 'n2@mail.com' }
    ]
  },
  Mutation: {
    addUser: async (_, args) => {
      try {
        return { id: 1, firstName: 'user', lastName: 'user', email: 'an_email' }
      } catch (e) {
        return e.message
      }
    }
  }
}

module.exports = {
  resolver
}