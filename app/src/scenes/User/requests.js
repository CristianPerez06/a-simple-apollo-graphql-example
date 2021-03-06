import gql from 'graphql-tag'

// requests
export const GET_USERS_ALL_INFO = gql`
  query getUsersAllInfo {
    getUsers {
      id
      firstName
      lastName
      email
    }
  }
`
export const GET_USERS_ONLY_FIRSTNAME = gql`
  query getUsersOnlyNames {
    getUsers {
      id
      firstName
    }
  }
`
