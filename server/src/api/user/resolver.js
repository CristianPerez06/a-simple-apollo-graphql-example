const resolver = {
  Query: {
    getUsers: async () => [
      { id: 1, firstName: 'Gomaaaaa', lastName: 'Agoora', email: 'goma@mail.com' },
      { id: 2, firstName: 'Ipi', lastName: 'Nose', email: 'ipi@mail.com' }
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