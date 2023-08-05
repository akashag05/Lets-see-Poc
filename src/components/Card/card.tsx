import React from 'react'

function Card(props) {
  return (
    <div className={props.i==props.currentIndex?'card-active rounded border-2 p-4 bg-gray-200 cursor-pointer': 'rounded border-2 shadow-sm hover:shadow-md p-4 bg-gray-200 cursor-pointer'}>
      {props.title.org.title}
    </div>
  )
}

export default Card