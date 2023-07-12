// import { Button, Form, Input, Radio, Select, Switch, TimePicker, Rate } from 'antd';
// import { useState } from 'react';
// import Map from './Map';
// import { SiGooglemaps } from 'react-icons/si';
// import UploadPhoto from './UploadPhoto';
// import CatSelection from '../Cat_selection';

// const { Option } = Select;
// const paymentOptions = [
//   { label: 'Cash', value: 'cash' },
//   { label: 'Card', value: 'card' },
//   { label: 'Both', value: 'both' },
// ];

// const Step2 = () => {
//   const [paymentMethod, setPaymentMethod] = useState('cash');
//   const handlePaymentChange = (e) => {
//     setPaymentMethod(e.target.value);
//   };

//   const [hasParkingZone, setHasParkingZone] = useState(false);
//   const [isPWD, setIsPWD] = useState(false);
//   const [isPetFriendly, setIsPetFriendly] = useState(false);
//   const [photo, setPhoto] = useState([]);
//   const [price, setPrice] = useState(0);

//   const onFinish = (values) => {
//     console.log('Received values of form:', values);
//   };

//   const handleFindOnMap = () => {
//     // Implement the logic to show the map
//   };

//   const handleCloseMap = () => {
//     // Implement the logic to close the map
//   };

//   const onPriceChange = (value) => {
//     console.log('Price value changed to', value);
//     setPrice(value);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <Form
//         name="ownerInfoForm"
//         onFinish={onFinish}
//         className="w-full max-w-md"
//         initialValues={{
//           remember: true,
//         }}
//       >
//         {/* Information about manager */}
//         <div className="border-b-2 border-gray-300 mb-4 pb-4">
//           <h2 className="text-lg font-medium mb-2">Information about Manager:</h2>
//           <Form.Item
//             name="firstName"
//             rules={[{ required: true, message: 'Please input your first name!' }]}
//           >
//             <Input placeholder="First name" className="w-full" style={{ marginRight: "10px" }} />
//           </Form.Item>
//           <Form.Item
//             name="contactNumber"
//             rules={[
//               { required: true, message: 'Please input your contact number!' },
//               { pattern: /^[0-9]{9}$/, message: 'Please input a valid 9-digit phone number!' }
//             ]}
//           >
//             <Input placeholder="Contact number" className="w-full" />
//           </Form.Item>
//         </div>

//         {/* Information about organization */}
//         <div className="mt-4">
//           <h2 className="text-lg font-medium mb-2">Information about Organization:</h2>
//           <Form.Item
//             name="organizationName"
//             rules={[{ required: true, message: 'Please input the organization name!' }]}
//           >
//             <Input placeholder="Organization name" className="w-full" />
//           </Form.Item>
//           <div className='flex'>
//             <p className='mt-1 p-2'>Location:</p>
//             <Form.Item
//     name="city"
//     noStyle
//     rules={[{ required: true, message: 'Please select the organization city!' }]}
//   >
//     <Select placeholder="City" className="w-full mt-2 ">
//     <Option value="1">Batumi</Option>
//       <Option value="2">khulo</Option>
//       <Option value="3">ozurgeti</Option>
//       <Option value="4">Lanchkhuti</Option>
//       <Option value="5">Poti</Option>
//       <Option value="6">Zugdidi</Option>
//       <Option value="7">Kutaisi</Option>
//       <Option value="8">Terjola</Option>
//       <Option value="9">sachkhere</Option>
//       <Option value="10">khashuri</Option>
//       <Option value="11">Gori</Option>
//       <Option value="12">Mtskheta</Option>
//       <Option value="13">kazbegi</Option>
//       <Option value="14">Tbilisi</Option>
//       <Option value="15">Rustavi</Option>
//       <Option value="16">Marneuli</Option>
//       <Option value="17">Bolnisi</Option>
//       <Option value="18">Akhalcikhe</Option>
//       <Option value="19">Borjomi</Option>
//       <Option value="20">Oni</Option>
//       <Option value="21">Ambrolauri</Option>
//       <Option value="22">Mestia</Option>
//       <Option value="23">Tsageri</Option>
//       <Option value="24">Telavi</Option>
//       <Option value="25">Sighnaghi</Option>
      
//     </Select>
//   </Form.Item>
//             <Form.Item
//               name="street"
//               rules={[{ required: true, message: 'Please input the organization street!' }]}
//             >
//               <Input placeholder="Street" className="w-full mt-2" />
//             </Form.Item>
//             <button className="flex items-center justify-center w-20 h-8 m-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md shadow-md" onClick={handleFindOnMap}>
//               <SiGooglemaps />
//             </button>
//           </div>
//         </div>

//         {/* Map */}
//         {/* Implement the Map component and logic to show/hide it */}

//         <Form.Item>
//           <div className='flex'>
//             <p>Choose open and close times:</p>
//             <Form.Item
//               name="openTime"
//               rules={[{ required: true, message: 'Please select the organization open time!' }]}
//             >
//               <TimePicker placeholder="Open Time" className="w-full mt-2" />
//             </Form.Item>
//             <Form.Item
//               name="closeTime"
//               rules={[{ required: true, message: 'Please select the organization close time!' }]}
//             >
//               <TimePicker placeholder="Close Time" className="w-full mt-2" />
//             </Form.Item>
//           </div>
//           <div>
//             <Form.Item name="category">
//               <CatSelection />
//             </Form.Item>
//             <Form.Item label="Has Parking Zone">
//               <Switch
//                 checked={hasParkingZone}
//                 onChange={setHasParkingZone}
//               />
//             </Form.Item>
//             <Form.Item label="PWD Person">
//               <Switch
//                 checked={isPWD}
//                 onChange={setIsPWD}
//               />
//             </Form.Item>
//             <Form.Item label="Pet Friendly">
//               <Switch
//                 checked={isPetFriendly}
//                 onChange={setIsPetFriendly}
//               />
//             </Form.Item>
//             <Form.Item label="Payment Method">
//               <Radio.Group
//                 options={paymentOptions}
//                 onChange={handlePaymentChange}
//                 value={paymentMethod}
//                 optionType="button"
//                 buttonStyle="solid"
//               />
//             </Form.Item>
//             <Form.Item label="Price">
//               <Rate value={price} onChange={onPriceChange} character="$" />
//             </Form.Item>
//           </div>

//           {/* Upload photos */}
//           <Form.Item label="Photos:" name="photos">
//             <UploadPhoto />
//           </Form.Item>

//           <Button
//             type="primary"
//             htmlType="submit"
//             className="w-full border-b-4 border-blue-500 text-black hover:bg-blue-500 hover:text-white"
//           >
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default Step2;
import { Button, Form, Input, Radio, Select, Switch, TimePicker, Rate } from 'antd';
import { useState } from 'react';
import Map from '../Google/Map';
import { SiGooglemaps } from 'react-icons/si';
import UploadPhoto from './UploadPhoto';
import CatSelection from '../Cat_selection';

const { Option } = Select;
const paymentOptions = [
  { label: 'Cash', value: 'cash' },
  { label: 'Card', value: 'card' },
  { label: 'Both', value: 'both' },
];

const Step2 = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };


  

  const [hasParkingZone, setHasParkingZone] = useState(false);
  const [isPWD, setIsPWD] = useState(false);
  const [isPetFriendly, setIsPetFriendly] = useState(false);
  const [photo, setPhoto] = useState([]);
  const [price, setPrice] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const onFinish = (values) => {
    // Create the object with the form field values
    const infoObject = {
      organizationname: values.organizationName,
      location: {
        city: values.city,
        street: values.street,
      },
      time: {
        opendate: values.openTime.format('HH:mm'),
        closedate: values.closeTime.format('HH:mm'),
      },
      category: selectedCategories,
      filter: {
        parkingzone: hasParkingZone ? 1 : 0,
        pwd: isPWD ? 1 : 0,
        pet: isPetFriendly ? 1 : 0,
      },
      paymentmethod: paymentMethod,
      price: price,
    };

    // Convert the object to a string
    const infoString = JSON.stringify(infoObject);

    console.log('Information object:', infoObject);
    console.log('Information string:', infoString);
  };

  const handleFindOnMap = () => {
    // Implement the logic to show the map
  };

  const handleCloseMap = () => {
    // Implement the logic to close the map
  };

  const onPriceChange = (value) => {
    console.log('Price value changed to', value);
    setPrice(value);
  };

  const handleCategoryChange = (selected) => {
    setSelectedCategories(selected);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Form
        name="ownerInfoForm"
        onFinish={onFinish}
        className="w-full max-w-md"
        initialValues={{
          remember: true,
        }}
      >
        {/* Information about manager */}
        <div className="border-b-2 border-gray-300 mb-4 pb-4">
          <h2 className="text-lg font-medium mb-2">Information about Manager:</h2>
          <Form.Item
            name="organizationName"
            rules={[{ required: true, message: 'Please input the organization name!' }]}
          >
            <Input placeholder="Organization name" className="w-full" />
          </Form.Item>
          <Form.Item
            name="contactNumber"
            rules={[
              { required: true, message: 'Please input your contact number!' },
              { pattern: /^[0-9]{9}$/, message: 'Please input a valid 9-digit phone number!' },
            ]}
          >
            <Input placeholder="Contact number" className="w-full" />
          </Form.Item>
        </div>

        {/* Information about location */}
        <div className="border-b-2 border-gray-300 mb-4 pb-4">
          <h2 className="text-lg font-medium mb-2">Information about Location:</h2>
          <Form.Item
    name="city"
    noStyle
    rules={[{ required: true, message: 'Please select the organization city!' }]}
  >
    <Select placeholder="City" className="w-full mt-2 ">
    <Option value="1">Batumi</Option>
      <Option value="2">khulo</Option>
      <Option value="3">ozurgeti</Option>
      <Option value="4">Lanchkhuti</Option>
      <Option value="5">Poti</Option>
      <Option value="6">Zugdidi</Option>
      <Option value="7">Kutaisi</Option>
      <Option value="8">Terjola</Option>
      <Option value="9">sachkhere</Option>
      <Option value="10">khashuri</Option>
      <Option value="11">Gori</Option>
      <Option value="12">Mtskheta</Option>
      <Option value="13">kazbegi</Option>
      <Option value="14">Tbilisi</Option>
      <Option value="15">Rustavi</Option>
      <Option value="16">Marneuli</Option>
      <Option value="17">Bolnisi</Option>
      <Option value="18">Akhalcikhe</Option>
      <Option value="19">Borjomi</Option>
      <Option value="20">Oni</Option>
      <Option value="21">Ambrolauri</Option>
      <Option value="22">Mestia</Option>
      <Option value="23">Tsageri</Option>
      <Option value="24">Telavi</Option>
      <Option value="25">Sighnaghi</Option>
      
    </Select>
  </Form.Item>
          <Form.Item
            name="street"
            rules={[{ required: true, message: 'Please input the street!' }]}
          >
            <Input placeholder="Street" className="w-full" />
          </Form.Item>
          <Button type="primary" onClick={handleFindOnMap}>
            <SiGooglemaps className="mr-2" />
            Find on Map
          </Button>
          {/* Map component */}
          {/* ...remaining code... */}
        </div>

        {/* Information about time */}
        <div className="border-b-2 border-gray-300 mb-4 pb-4">
          <h2 className="text-lg font-medium mb-2">Information about Time:</h2>
          <Form.Item
            name="openTime"
            rules={[{ required: true, message: 'Please select the open time!' }]}
          >
            <TimePicker format="HH:mm" placeholder="Open Time" className="w-full" />
          </Form.Item>
          <Form.Item
            name="closeTime"
            rules={[{ required: true, message: 'Please select the close time!' }]}
          >
            <TimePicker format="HH:mm" placeholder="Close Time" className="w-full" />
          </Form.Item>
        </div>

        {/* Category selection */}
        <div className="border-b-2 border-gray-300 mb-4 pb-4">
          <h2 className="text-lg font-medium mb-2">Category Selection:</h2>
          <CatSelection onChange={handleCategoryChange} />
        </div>

        {/* Additional filters */}
        <div className="border-b-2 border-gray-300 mb-4 pb-4">
          <h2 className="text-lg font-medium mb-2">Additional Filters:</h2>
          <Form.Item label="Has Parking Zone">
            <Switch checked={hasParkingZone} onChange={setHasParkingZone} />
          </Form.Item>
          <Form.Item label="PWD Friendly">
            <Switch checked={isPWD} onChange={setIsPWD} />
          </Form.Item>
          <Form.Item label="Pet Friendly">
            <Switch checked={isPetFriendly} onChange={setIsPetFriendly} />
          </Form.Item>
        </div>

        {/* Payment method */}
        <div className="border-b-2 border-gray-300 mb-4 pb-4">
          <h2 className="text-lg font-medium mb-2">Payment Method:</h2>
        
          <Form.Item label="Payment Method">           
            <Radio.Group options={paymentOptions} onChange={handlePaymentChange} value={paymentMethod} 
            optionType="button"
                      buttonStyle="solid" />
          </Form.Item>
        </div>

        {/* Price */}
        <div className="border-b-2 border-gray-300 mb-4 pb-4">
          <h2 className="text-lg font-medium mb-2">Price:</h2>
          <Form.Item>
            <Rate allowHalf onChange={onPriceChange} />
          </Form.Item>
        </div>
       
               {/* Upload photos */}
         <Form.Item label="Photos:" name="photos">
           <UploadPhoto />
          </Form.Item>

        {/* Submit button */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Step2;

