// import React from 'react';

// const ProductResults = ({ products, onSelect }: { products: any[], onSelect: (product: any) => void }) => {
//   return (
//     <div className="mt-4">
//       {products.map((product) => (
//         <div key={product.id} className="p-2 border-b cursor-pointer" onClick={() => onSelect(product)}>
//           <h3 className="text-lg font-bold">{product.name}</h3>
//           <p>{product.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductResults;


// import React from 'react';

// interface Vendor {
//   vendorName: string;
//   vendorAddress: string;
//   location: {
//     latitude: number;
//     longitude: number;
//   };
// }

// interface Product {
//   id: string;
//   title: string;
//   vendors: Vendor[];
// }

// interface SearchResultsProps {
//   products: Product[];
//   onSelectLocation: (location: { lat: number; lng: number }) => void;
// }

// const SearchResults: React.FC<SearchResultsProps> = ({ products, onSelectLocation }) => {
//   return (
//     <div className="w-1/3 p-4">
//       {products.map(product => (
//         <div key={product.id} className="mb-4">
//           <h2 className="text-xl font-bold">{product.title}</h2>
//           {product.vendors.map(vendor => (
//             <div key={vendor.vendorName} className="mt-2">
//               <p>{vendor.vendorName}</p>
//               <p>{vendor.vendorAddress}</p>
//               <button
//                 className="text-blue-500"
//                 onClick={() => onSelectLocation({ lat: vendor.location.latitude, lng: vendor.location.longitude })}
//               >
//                 Show on Map
//               </button>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SearchResults;



import React from 'react';

interface Vendor {
  vendorName: string;
  vendorAddress: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

interface Product {
  id: string;
  title: string;
  vendors: Vendor[];
}

interface SearchResultsProps {
  products: Product[];
  onSelectLocation: (location: { lat: number; lng: number }) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ products, onSelectLocation }) => {
  return (
    <div className="w-1/3 p-4 overflow-y-auto">
      {products.map((product) => (
        <div key={product.id} className="mb-4">
          <h2 className="text-xl font-bold">{product.title}</h2>
          {product.vendors.map((vendor, index) => (
            <div key={index} className="mt-2">
              <p>{vendor.vendorName}</p>
              <p>{vendor.vendorAddress}</p>
              <button
                className="text-blue-500"
                onClick={() => onSelectLocation({ lat: vendor.location.latitude, lng: vendor.location.longitude })}
              >
                Show on Map
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;


















// import React, { useState } from 'react';

// const ProductSearch = ({ onSearch }: { onSearch: (query: string) => void }) => {
//   const [query, setQuery] = useState('');

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSearch(query);
//   };

//   return (
//     <form onSubmit={handleSearch} className="flex items-center">
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search for products..."
//         className="p-2 border rounded"
//       />
//       <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
//         Search
//       </button>
//     </form>
//   );
// };

// export default ProductSearch;