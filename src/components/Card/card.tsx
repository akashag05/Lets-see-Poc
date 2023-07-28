import React from 'react'

function Card(props) {
  console.log()
  return (
    <div className='rounded border-2 shadow-sm hover:shadow-md w-1/4 p-4 bg-gray-200 cursor-pointer'>
      {props.title.org.title}
    </div>
  )
}

export default Card