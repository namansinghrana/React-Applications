import React from 'react'
import Link from 'next/link'

export const Header = (props) => {
  return (
    <>
    
    <div className='h-16 px-5 bg-green-400 flex items-center justify-between'>
        <div>{props.logo}</div>
        <ul className='flex gap-5'>
          <Link href={"/About"}>About</Link>
          <Link href={"/Courses"}>Courses</Link>
          <Link href={"/Product"}>Product</Link>
          <Link href={"/Account"}>Account</Link>
        </ul>
    </div>
    </>
  )
}
