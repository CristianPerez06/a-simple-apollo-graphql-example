const express = require('express')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const debug = require('debug')('apollo-graphql:server')

debug('Booting up server')

// Grapqhl APIs
const { userDefs, userResolvers } = require('./api/user/index')

// typeDefs & resolvers
const typeDefs = [userDefs]
const resolvers = [userResolvers]

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()

app.use(cors())

server.applyMiddleware({ app })

app.listen(
  { port: 4000 },
  () => {
    debug(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  }
)
