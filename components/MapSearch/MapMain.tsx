"use client"
import React from 'react'
import Navbar from '@/components/General/Navbar'
import { useState, useEffect } from 'react';
import GoogleMapComponent from './GoogleMapComponent';
import SearchResults from './SearchResults';
import MapWithMarkers from './MapWithMarkers';
import { useRouter } from 'next/router';

const MapMain = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All categories');
    const [searchQuery, setSearchQuery] = useState('');
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const selectCategory = (category:any) => {
      setSelectedCategory(category);
      setIsOpen(false); 
    };
  
    // const handleSearch = (e:any) => {
    //   e.preventDefault();
    //   console.log('Searching for:', searchQuery, 'in category:', selectedCategory);
    // };

    const [products, setProducts] = useState([]);
    const [locations, setLocations] = useState([]);

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const query = e.currentTarget.searchQuery.value.toLowerCase();

      const response = await fetch('/MOCK_DATA.json');
      const data = await response.json();

      const filteredAddresses = data.addresses.filter((address: any) =>
        address.products.some((product: string) => product.toLowerCase().includes(query))
      );

      const newLocations = filteredAddresses.map((address: any) => ({
        lat: address.latitude,
        lng: address.longitude,
      }));

      setProducts(filteredAddresses);
      setLocations(newLocations);
  

    // const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    //   e.preventDefault();
    //   const response = await fetch('/api/products/search', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ query: e.currentTarget.searchQuery.value }),
    //   });
      // const data = await response.json();
      // setProducts(data);
      // const newLocations = data.flatMap((product: any) =>
      //   product.vendors.map((vendor: any) => ({
      //     lat: vendor.location.latitude,
      //     lng: vendor.location.longitude,
      //   }))
      // );
      // setLocations(newLocations);
    };


    // interface Product {
    //   vendors: { lat: number; lng: number }[];
    //   // Add other properties of Product if needed
    // }

    // const [products, setProducts] = useState([]);
    // const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    // const [locations, setLocations] = useState<{ lat: number; lng: number }[]>([]);

  
    // const handleSelectProduct = (product: any) => {
    //   setSelectedProduct(product);
    // };

    // const handleSelectLocation = (location: { lat: number; lng: number }) => {
    //   setLocations([location]);
    // };
  return (
    <div>
        <Navbar/>
        <div className='flex mt-20'>
          <div className='flex flex-col'>

          
            <div className='m-9'>
                <div>
                   <div className="max-w-lg mx-auto mt-10 ">
    <form onSubmit={handleSearch} className="flex items-center">
      {/* Dropdown Button */}
      <div className="relative">
        <button
          type="button"
          onClick={toggleDropdown}
          className="flex-shrink-0 z-10 w-36 h-14 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
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
              {['All categories',"Fashion and Apparel", "Electronics and Gadgets", "Groceries and Food", "Home and Living", "Sports and Fitness", "Health and Wellness"].map((category) => (
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
          type="text"
          id="search-input"
          name="searchQuery"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          
          className="block p-2.5 w-[350px] h-14 z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-gray-100 focus:border-gray-100 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search Products..."
          required
        />
        <button
          type="submit"
          className="absolute flex justify-center items-center top-0 -right-10 ht-0 p-2.5 text-sm w-16 font-medium h-14 text-black bg-shopYellow rounded-e-lg border border-shopYellow hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-shopYellow dark:hover:bg-yellow-300 dark:focus:ring-yellow-300"
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
                </div>
            </div>

            <div className=''>

            <SearchResults products={products} onSelectLocation={(location) => setLocations([location])} />


            <div className="w-1/3 p-4 overflow-y-auto">
        {products.map((product, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-bold">{product.address}</h2>
            <p>Latitude: {product.latitude}</p>
            <p>Longitude: {product.longitude}</p>
            <p>Products: {product.products.join(', ')}</p>
          </div>
        ))}
      </div>              


            </div>

        </div>
            <div className='pt-9 m-10 w-[700px]'>

            {/* <GoogleMapComponent coordinates={{ lat: 5.6037, lng: -0.187 }} /> */}
            <GoogleMapComponent locations={locations} />

            {/* {selectedProduct && <MapWithMarkers coordinates={selectedProduct.vendors[0] || null} locations={selectedProduct.vendors} />} */}
            {/* <MapWithMarkers/> */}
            </div>
        </div>
    </div>
  )
}

export default MapMain

// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import Navbar from '@/components/General/Navbar';
// import ProductResults from './ProductResults';
// import MapWithMarkers from './MapWithMarkers';

// const MapMain = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState('All categories');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

//   interface Product {
//     vendors: { lat: number; lng: number }[];
//     // Add other properties of Product if needed
//   }

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const selectCategory = (category: any) => {
//     setSelectedCategory(category);
//     setIsOpen(false);
//   };

//   const handleSearch = (e: any) => {
//     e.preventDefault();
//     console.log('Searching for:', searchQuery, 'in category:', selectedCategory);
//   };

//   const [isMounted, setIsMounted] = useState(false);
//   const router = useRouter();

//   // Ensure the component is mounted on the client side before accessing `useRouter`
//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // Fetch data only when the component is mounted
//   useEffect(() => {
//     if (isMounted && router.query.query) {
//       const fetchProducts = async () => {
//         const response = await fetch(`/api/products/search?query=${router.query.query}`);
//         const data = await response.json();
//         setProducts(data);
//       };

//       fetchProducts();
//     }
//   }, [isMounted, router.query.query]);

//   const handleSelectProduct = (product: any) => {
//     setSelectedProduct(product);
//   };

//   if (!isMounted) {
//     return null; // Return null to ensure nothing is rendered on the server
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="flex mt-20">
//         <div className="flex flex-col">
//           <div className="m-9">
//             <div>
//               <div className="max-w-lg mx-auto mt-10 ">
//                 <form onSubmit={handleSearch} className="flex items-center">
//                   {/* Dropdown Button */}
//                   <div className="relative">
//                     <button
//                       type="button"
//                       onClick={toggleDropdown}
//                       className="flex-shrink-0 z-10 w-36 h-14 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
//                     >
//                       {selectedCategory}
//                       <svg
//                         className="w-2.5 h-2.5 ms-2.5"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 10 6"
//                       >
//                         <path
//                           stroke="currentColor"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="m1 1 4 4 4-4"
//                         />
//                       </svg>
//                     </button>

//                     {/* Dropdown Menu */}
//                     {isOpen && (
//                       <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//                         <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
//                           {['All categories', 'Mockups', 'Templates', 'Design', 'Logos'].map((category) => (
//                             <li key={category}>
//                               <button
//                                 type="button"
//                                 className="block px-4 py-2 w-full text-left hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                                 onClick={() => selectCategory(category)}
//                               >
//                                 {category}
//                               </button>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                   </div>

//                   {/* Search Input */}
//                   <div className="relative w-full">
//                     <input
//                       type="search"
//                       id="search-input"
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       className="block p-2.5 w-[350px] h-14 z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-gray-100 focus:border-gray-100 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
//                       placeholder="Search Products..."
//                       required
//                     />
//                     <button
//                       type="submit"
//                       className="absolute flex justify-center items-center top-0 -right-10 ht-0 p-2.5 text-sm w-16 font-medium h-14 text-black bg-shopYellow rounded-e-lg border border-shopYellow hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-shopYellow dark:hover:bg-yellow-300 dark:focus:ring-yellow-300"
//                     >
//                       <svg
//                         className="w-6 h-6"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 20 20"
//                       >
//                         <path
//                           stroke="currentColor"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                         />
//                       </svg>
//                       <span className="sr-only">Search</span>
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>

//           <div>
//             <ProductResults products={products} onSelect={handleSelectProduct} />
//           </div>
//         </div>
//         <div className="m-10">
//           {selectedProduct && <MapWithMarkers locations={selectedProduct.vendors} />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MapMain;
