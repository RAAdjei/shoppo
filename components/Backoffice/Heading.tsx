import React from 'react'

const Heading = ({title}: {title: string}) => {
  return (
    <h2 className='text-2xl font-semibold text-black'>{title}</h2>
  )
}

export default Heading