import React from 'react'

export const UserList = ({list}) => {
    console.log({list})
  return (
    <div>
        {
            list.map(({name, email, id}) => 
            <div key={id.value}>
                <h1>{name.first}</h1>
                <p>{email}</p>
            </div>
            )
        }
    </div>
  )
}

export default UserList
