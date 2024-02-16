import React, { useState, createContext } from 'react'
import ComponentB from './ComponentB.jsx'

export const UserContext = createContext();
function ComponentA () { 

  const [user, setUser] = useState('Bhupesh')

  return(
    <div className="box">
      <h2>{`Hello ${user}`}</h2>
      <h1>component A</h1>
      <UserContext.Provider value={user}>
      <ComponentB user={user}/>
      </UserContext.Provider>
      
    </div>
  )
}

export default ComponentA