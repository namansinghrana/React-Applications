"use client"
import React from 'react'
import { useState } from 'react'
import { Header } from '@/Components/Header'
import axios from 'axios'

const page = () => {
  
  const [Images, setImages] = useState([])
  const getImages = async ()=> {
    try {
    const response = await axios.get("https://picsum.photos/v2/list")
    const data = response.data;
    setImages(data);
    console.log(Images);
    
    } catch (error) {
      console.error("Error Fetching Images");
      
    }
    
  }

  return (
    <>
    Main Page

    <button onClick={getImages} className='text-bold
    bg-green-800 text-white px-3 py-2'>Get Images</button>
    
    <div className='p-10'></div>
      {Images.map((elem,i) => {
        return <img key={i}
        src = {elem.download_url}    
        width={300}
        height={300}
        className='m-10 rounded inline-block'
        />

      })}
    </>
  )
}

export default page