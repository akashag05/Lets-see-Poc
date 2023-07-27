import React from 'react'

function Card(props) {
  console.log()
  return (
    <div className='rounded border-2 shadow-sm w-1/4 p-4'>
      {props.title.org.title}
    </div>
  )
}

export default Card