import React from 'react'
import { useState } from 'react';
import router, { useRouter } from 'next/router';

const SearchBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All categories');
    const [query, setQuery] = useState('');
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const selectCategory = (category:any) => {
      setSelectedCategory(category);
      setIsOpen(false); 
    };
  
    const handleSearch = (e:any) => {
      e.preventDefault();
      router.push(`/search?query=${query}`);
      // console.log('Searching for:', searchQuery, 'in category:', selectedCategory);
    };
  return (
    <div className="max-w-lg mx-auto mt-10 ">
    <form onSubmit={handleSearch} className="flex items-center">
      {/* Dropdown Button */}
      <div className="relative">
        <button
          type="button"
          onClick={toggleDropdown}
          className="flex-shrink-0 z-10 w-40 h-16 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        >
          {selectedCategory}
          <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
              {['Mockups', 'Templates', 'Design', 'Logos'].map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => selectCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Search Input */}
      <div className="relative w-full">
        <input
          type="search"
          id="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block p-2.5 w-[550px] h-16 z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-gray-100 focus:border-gray-100 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search Products..."
          required
        />
        <button
          type="submit"
          className="absolute flex justify-center items-center top-0 -right-10 ht-0 p-2.5 text-sm w-16 font-medium h-16 text-black bg-shopYellow rounded-e-lg border border-shopYellow hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-shopYellow dark:hover:bg-yellow-300 dark:focus:ring-yellow-300"
        >
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  </div>
  )
}

export default SearchBar