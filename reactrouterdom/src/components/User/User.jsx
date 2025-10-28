import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='bg-orange-400 text-white p-5 shadow-amber-200 my-6 font-bold'>
      User : {userId}
    </div>
  )
}

export default User
