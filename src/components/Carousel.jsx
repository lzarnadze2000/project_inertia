
// // import React, { useState, useEffect } from 'react';
// // import { Carousel } from 'react-responsive-carousel';

// // const ImageCarousel = ({ images }) => {
// //     if (!Array.isArray(images)) {
// //         // Handle the case when images is not an array

// //         console.log("EMpty data")
// //         return null; // Or display an appropriate message
// //       }
// //     return (
// //         <Carousel>
// //         {images.map((image, index) => (
// //             <div key={index}>
// //             <img src={image} alt={`Image ${index}`} />
// //             </div>
// //         ))}
// //         </Carousel>
// //     );
// // };

// import React, { useEffect, useState } from 'react';
// import { Carousel } from 'react-carousel-minimal';

// const captionStyle = {
//   fontSize: '2em',
//   fontWeight: 'bold',
// };

// const slideNumberStyle = {
//   fontSize: '20px',
//   fontWeight: 'bold',
// };



// function MainCar({images}) {
 
// // http://localhost:8080/Organizations/getOrgnization?name=akaaka

// if (!Array.isArray(images)) {
//   // Handle the case when images is not an array

//   console.log("EMpty data")
//   return null; // Or display an appropriate message
// }else{
//   return (
//     <div className="App">
//       <div style={{ textAlign: 'center' }}>
//         <div style={{ padding: '0 20px' }}>
           
//           <Carousel
//             data={images}
//             time={2000}
//             width="1000px"
//             height="300px"
//             captionStyle={captionStyle}
//             radius="10px"
//             slideNumber={true}
//             slideNumberStyle={slideNumberStyle}
//             captionPosition="bottom"
//             automatic={true}
//             dots={true}
//             pauseIconColor="white"
//             pauseIconSize="40px"
//             slideBackgroundColor="darkgrey"
//             slideImageFit="cover"
//             thumbnails={true}
//             thumbnailWidth="100px"
//             style={{
//               textAlign: 'center',
//               maxWidth: '850px',
//               maxHeight: '500px',
//               margin: '40px auto',
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }}

// export default MainCar;



// // import React from 'react';
// // import { Carousel } from 'react-carousel-minimal';

// // const Carousels = ({ images }) => {
// //   return (
// //     <Carousel>
// //       {images.map((image, index) => (
// //         <div key={index}>
// //           <img src={image} alt={`Image ${index}`} />
// //         </div>
// //       ))}
// //     </Carousel>
// //   );
// // };

// // export default Carousels;



import React from 'react';
import { Carousel } from 'react-carousel-minimal';

const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
};

const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
}; 
let imageArray = [
  {
    image:'https://picsum.photos/id/1/2500/2500',
    
  },
  {
    image:'https://picsum.photos/id/10/2500/1667',
      
  },
   {
    image:'https://picsum.photos/id/1000/2500/2500',
     
  } ,
   {
    image:'https://picsum.photos/id/1003/1181/1772',
     
  }
]


const MainCar = ({ images }) => {
  if (!Array.isArray(images)) {
    console.log("Empty data");
    
    return null;
  } else {
    return (
      <div className="App">
        <div style={{ textAlign: 'center' }}>
          <div style={{ padding: '0 20px' }}>
            {console.log(images)}
            <Carousel
              data={imageArray}
              time={2000}
              width="1000px"
              height="300px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: 'center',
                maxWidth: '850px',
                maxHeight: '500px',
                margin: '40px auto',
              }}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default MainCar;
