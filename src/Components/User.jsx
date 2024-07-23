import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='w-screen h-screen bg-gray-600 text-white text-3xl p-4 text-center'>User Id is: {userid}</div>
  )
}

export default User