import axios from 'axios';
import React, { useState } from 'react'

function ResendCode() {
    const currentDate = new Date();
const localDateTime = currentDate.toLocaleString();
console.log(localDateTime);
    const postData = () => {
        axios.get('https://',[inputValue,localDateTime])
          .then(response => {
            console.log(response.data);
            // Process the response data here
          })
          .catch(error => {
            console.error(error);
            // Handle the error here
          });
      };
    const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    const regex = /^[0-9]{0,6}$/; // Regex to allow only 6 digits
    if (regex.test(value)) {
      setInputValue(value);
    }
  };

  const handleButtonClick = () => {
    setDisplayValue(inputValue);
    console.log(inputValue);
    postData();
  };

  return (
  

    <div className="absolute w-96 h-80 left-1/2 transform -translate-x-1/2 top-1/2  transform -translate-y-1/2 border border-solid border-[#7D3B52]">
<div className="absolute w24 h-4 left-1/2  pt-10 transform -translate-x-1/2 ">
    <p className="font-inter font-semibold text-base  flex items-center text-[#7D3B52]">
confirm email:</p>
</div>
<div class="absolute w-64 h-11 left-1/2 transform -translate-x-1/2 ">
<div className="absolute w-60 h-4 pt-24 left-0  font-inter font-normal text-xs leading-15 flex items-center text-black">
    <p>We sent code to </p>
</div>
<div class="absolute w-64 h-48 left-0 top-36">

<p class="absolute w-20 h-4 left-0 top-[calc(50% - 15px/2 - 15px)] font-inter font-normal text-xs leading-15 flex items-center text-black">
    Enter the code:
</p>
<input type="text"  value={inputValue}
            onChange={handleInputChange} className="box-border absolute w-64 h-7 left-1/2 transform -translate-x-1/2 top-7 bg-white border border-gray-300 rounded-md
            text-black placeholder-gray-400 text-xs focus:outline-none text-center focus:ring-2 focus:ring-pink-300 focus:border-pink-200">
</input>
<div  className='absolute w-30 h-1 top-20 left-0'>
<button > 
<p className="font-inter font-normal text-xs  leading-12 flex items-center text-pink-500 hover:text-pink-200 start-3">resend code</p>
</button>
<div className='pt-4 w-25'>
<button className="w-60  h-19 px-4 py-2 font-inter font-bold text-base leading-19 text-white bg-[#7D3B52] rounded-md  " onClick={handleButtonClick}> check code</button>

</div>
</div>

</div>

</div>



    </div>



  )
}

export default ResendCode 


// import React, { useState } from 'react';

// function ResendCode() {
//   const [inputValue, setInputValue] = useState('');
//   const [displayValue, setDisplayValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleButtonClick = () => {
//     setDisplayValue(inputValue);
//     console.log(inputValue);
//   };

//   return (
//     <div className="absolute w-96 h-80 left-1/2 transform -translate-x-1/2 top-1/2 border border-solid border-[#7D3B52]">
//       <div className="absolute w-24 h-4 left-1/2 pt-10 transform -translate-x-1/2">
//         <p className="font-inter font-semibold text-base flex items-center text-[#7D3B52]">Confirm Email:</p>
//       </div>
//       <div className="absolute w-64 h-11 left-1/2 transform -translate-x-1/2">
//         <div className="absolute w-60 h-4 pt-24 left-0 font-inter font-normal text-xs leading-15 flex items-center text-black">
//           <p>We sent code to:</p>
//         </div>
//         <div className="absolute w-64 h-48 left-0 top-36">
//           <p className="absolute w-20 h-4 left-0 top-[calc(50% - 15px/2 - 15px)] font-inter font-normal text-xs leading-15 flex items-center text-black">Enter the code:</p>
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//             className="box-border absolute w-64 h-7 left-1/2 transform -translate-x-1/2 top-7 bg-white border border-gray-300 rounded-md"
//           />
//           <div className="absolute w-30 h-1 top-20 left-0">
//             <button>
//               <p className="font-inter font-normal text-xs leading-12 flex items-center text-pink-500 hover:text-pink-200 start-3">
//                 Resend Code
//               </p>
//             </button>
//             <div className="pt-4 w-25">
//               <button
//                 className="w-60 h-19 px-4 py-2 font-inter font-bold text-base leading-19 text-white bg-[#7D3B52] rounded-md"
//                 onClick={handleButtonClick}
//               >
//                 Check Code
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <p>User Input: {displayValue}</p>
//     </div>
//   );
// }

// export default ResendCode;
