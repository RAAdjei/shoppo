import React from 'react'
import { MdInventory } from "react-icons/md";

const LargeCard = ({className}: {className: string}) => {
  return (
    <div className={`rounded-lg text-white ${className}`}>
        <MdInventory />
        <h4>Product Count</h4>
        <h2>550</h2>
    </div>
  )
}

export default LargeCard