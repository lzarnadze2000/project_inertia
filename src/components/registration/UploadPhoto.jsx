// // import React, { useState } from "react";

// // function UploadPhoto() {

// //     const [selectedFiles, setSelectedFiles] = useState([]);

// //     const handleFileSelect = (e) => {
// //         e.preventDefault();
// //         setSelectedFiles(e.target.files);
// //         console.log(e.target.files)
// //     };

// //     const handleSubmit = async (files) => {
    
// //     const formData = new FormData();

// //     for(let i = 0 ; i < selectedFiles.length; i++){
// //         formData.append("file", selectedFiles[i]);
// //     }

// //     fetch("http://localhost:8080/Upload/Image",{
// //             method:"POST",
// //             body:formData
// //             }).then((response)=>{
// //                 console.log(response.data);
// //             }).catch((error)=> {
// //                 console.error(error);
// //             });

// //   };

// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <input type="file" multiple onChange={handleFileSelect} />
// //         <button type="submit">Upload Image</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default UploadPhoto;

// import React, { useState } from 'react';
// import { Upload } from 'antd';
// import ImgCrop from 'antd-img-crop';
// import axios from 'axios';

// const UploadPhoto = () => {
//   const [fileList, setFileList] = useState([]);

//   const onChange = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//   };

//   const onPreview = async (file) => {
//     let src = file.url;
//     if (!src) {
//       src = await new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file.originFileObj);
//         reader.onload = () => resolve(reader.result);
//       });
//     }
//     const image = new Image();
//     image.src = src;
//     const imgWindow = window.open(src);
//     imgWindow?.document.write(image.outerHTML);
//   };

//   const handleUpload = async (options) => {
//     const { file } = options;

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       await axios.post('http://localhost:8080/Upload/Image', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       // Handle successful upload
//     } catch (error) {
//       // Handle error
//     }
//   };

//   return (
//     <ImgCrop rotationSlider>
//       <Upload
//         customRequest={handleUpload}
//         listType="picture-card"
//         fileList={fileList}
//         onChange={onChange}
//         onPreview={onPreview}
//       >
//         {fileList.length < 5 && '+ Upload'}
//       </Upload>
//     </ImgCrop>
//   );
// };

// export default UploadPhoto;


import React, { useState } from "react";

function ImageUploadPopup() {
    
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelect = (e) => {
        e.preventDefault();
        setSelectedFiles(e.target.files);
    };

    const handleSubmit = async (files) => {
    
    const formData = new FormData();

    formData.append("organizationId",1);
    for(let i = 0 ; i < selectedFiles.length; i++){
        formData.append("files", selectedFiles[i]);
    }


    //Create Organization
    
    // const organizationId = 1;
   

    fetch("http://localhost:8080/Upload/Image",{
            method:"POST",
            body:formData,
            }).then((response)=>{
                console.log(response.data);
            }).catch((error)=> {
                console.error(error);
            });
            
    };

      // const [selectedFiles, setSelectedFiles] = useState([]);

      // const handleFileSelect = (e) => {
      //   setSelectedFiles(e.target.files);
      // };

      // const handleSubmit = async (files) => {
      //   const formData = new FormData();

      //   for (let i = 0; i < files.length; i++) {
      //     console.log(i);
      //     formData.append("files", files[i]);
      //   }

      //   const organizationId = 1; // Replace with your organizationId value

      //   formData.append("organizationId", organizationId.toString());

      //   try {
      //     const response = await fetch("http://localhost:8080/Upload/Image", {
      //       method: "POST",
      //       body: formData,
      //     });

      //     if (response.ok) {
      //       console.log("Upload completed successfully");
      //     } else {
      //       console.error("Upload failed");
      //     }
      //   } catch (error) {
      //     console.error("An error occurred during upload:", error);
      //   }
      // };

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" multiple onChange={handleFileSelect} />
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
}

export default ImageUploadPopup;