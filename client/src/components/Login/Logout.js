import React, { useState } from 'react';
import { useUser } from 'Auth/useUser';
import { withAuth } from 'Auth/withAuth';
import { Navigate } from "react-router-dom"

const Logout = () => {
  const { user, logout } = useUser();
  const [redirect, setRedirect] = useState();
  if (redirect) {
      return(
          <Navigate to={redirect}/>
      )
  }
  return (
    <div >
      <div>Private</div>
      {
        user?.email &&
        <div>
          <div>Email: {user.email}</div>
          <button onClick={() => logout(()=>setRedirect('/register'))}>Logout</button>
        </div> 
      }
    </div>
  )
}

export default withAuth(Logout);