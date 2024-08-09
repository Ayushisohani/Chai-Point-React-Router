import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Insta() {
    const data = useLoaderData()  
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Insta followers: {data.followers}
    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_Q0lPwwTmASpxF6pAIRoRJXRjz_IkRGLyQ&s"} alt="Git picture" width={300} />
    </div>
  )
}

export default Insta

export const InstaInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ayushisohani')
    return response.json()
}