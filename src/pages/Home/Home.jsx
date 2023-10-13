import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'

import './Home.css'
import { useEffect, useState } from 'react'



const Home = () => {

  const [blogs,setBlogs] = useState([])



  //blog api call
  
  const fetchBlogs = async ()=>{

    const response = await axios.get('http://localhost:3000/blogs')
    setBlogs(response.data.data)
   

  }

  useEffect(()=>{

    fetchBlogs()

  },[])

  

  return (
    <>
        <Navbar />
 <div className="card" style={{width: '18rem'}}>
  {blogs.map((blog)=>{
    return(
      <div key={blogs._id} className="card-body">
      <h5 className="card-title">{blog.title}</h5>
      <h5 className="card-title">{blog.subTitle}</h5>
      <p className="card-text">{blog.description}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    )
  })}
</div>
    </>
  )
}

export default Home
