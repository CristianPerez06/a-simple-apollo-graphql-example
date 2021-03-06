import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_USERS_ALL_INFO, GET_USERS_ONLY_FIRSTNAME } from '../User/requests'

const User = () => {
  const { loading, data, error } = useQuery(GET_USERS_ALL_INFO)
  // const { loading, data, error } = useQuery(GET_USERS_ONLY_FIRSTNAME)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const { getUsers = [] } = data

  return (
    <div className='User'>
      User Page
      <div>
        {getUsers.map(user => {
          return <div key={user.id} style={{ display: 'block', marginTop: 30 + 'px' }}>
            <p>Firstname: {user.firstName || '-'}</p>
            <p>LastName: {user.lastName || '-'}</p>
            <p>Email: {user.email || '-'}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default User