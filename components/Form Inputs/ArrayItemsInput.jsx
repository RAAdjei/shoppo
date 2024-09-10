'use ciient'
import React, { useState } from 'react' 
import { FaPlus } from "react-icons/fa6"; 
import { ImCancelCircle } from "react-icons/im";

const ArrayItemsInput = ({setTags, tags=[], itemTitle}) => {

  const [tag, setTag] = useState("")
  const [showTagForm, setShowTagForm] = useState(false)
  function addTag(){
    if(!tag) return;
    setTags([...tags,tag]);
    setTag(''); 
  }

  function removeTag(index){
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  }
  return (
    <div>
  {
    showTagForm ? (<div className="flex items-center max-w-lg mx-auto">   
      <label htmlFor="voice-search" className="sr-only">Search</label>
      <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
              </svg>
          </div>
          <input 
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`Create a ${itemTitle}`} />

      </div>
      <button 
      onClick={addTag}      
      type="button" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-black bg-shopYellow rounded-lg border border-shopYellow hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <FaPlus className="w-4 h-4 me-2"/>
        Add
      </button>
      
      <button type='button' onClick={()=>setShowTagForm(false)} className='ml-3 shrink-0 size-8 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center'>
      <ImCancelCircle className='w-4 h-4 '/>
      </button>
  </div>):(<button onClick={()=>setShowTagForm(true)}
    type='button' className='flex items-center space-x-2 py-2 px-4'>
              <FaPlus />
              <span>Add {itemTitle}</span>
              </button>
              )}

              <div className='flex flex-wrap gap-4 mt-4'>
                {
                  tags.map((item, i)=>{
                    return(
                      <div 
                      onClick={()=>removeTag(i)}
                      key={i} className='flex space-x-2 items-center bg-shopAsh px-4 py-2 rounded-lg'>
                        <p>{item}</p>
                        <button type='button'><ImCancelCircle className='w-4 h-4'/></button>
                      </div>
                    )
                  })
                }
              </div>
    </div> 
  )
}

export default ArrayItemsInput