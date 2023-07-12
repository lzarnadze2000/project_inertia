// // import Upload from 'antd/es/upload/Upload'
// // import React from 'react'
// // import UploadPhoto from '../components/registration/UploadPhoto'

// // function Search() {
// //   return (
// //     <UploadPhoto/>
// //   )
// // }

// // export default Search
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Search = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/Organizations/getAllOrganizations');
//         setCategories(response.data);
//         console.log(categories);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div>
//       <h1>Categories</h1>
//       <ul>
//         {categories.map(category => (
//           <li key={category.id}>{category.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Search;
import React from 'react'
import ResendCode from './ResendCode'
import { Book } from '@mui/icons-material'

function Search() {
  return (
    <div><Book/></div>
  )
}

export default Search