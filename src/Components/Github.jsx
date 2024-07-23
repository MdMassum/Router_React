import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'

function Github() {

    // const [data, setData] = useState([])
    // const api_url = `https://api.github.com/users/${name}`
    // const fetchData=async()=>{
    //   let resp = await fetch({api_url})
    //   let info = await resp.json();
    //     console.log(info);
    //     setData(info)
    // }
    
    // useEffect(() => {
    //   fetchData();
    // }, [])
    
  return (
    <div className='w-screen h-screen text-center bg-gray-600 text-white p-4 text-3xl'>Github followers: 2085
    <img src={null} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch(api_url)
//     return response.json()
// }