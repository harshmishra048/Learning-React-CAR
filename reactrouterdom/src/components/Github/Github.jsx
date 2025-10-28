// import { useLoaderData } from "react-router-dom"
import React, { useEffect, useState } from 'react'

function Github() {
    // const data = useLoaderData()
    const [data , setdata] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/harshmishra048')
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setdata(data);
          });
    }, [])
    
  return (
    <div className='bg-gray-500 text-3xl text-center p-4 m-4 text-white'>
          Github Followers : {data.followers}
          <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

// export const githubInfoLoader = async () => {
//     const response = await fetch("https://api.github.com/users/harshmishra048");
//     return response.json
// }

// the above is not done because of making it into new file as a component 
