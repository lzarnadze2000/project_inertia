import { Form, Input, Button, Checkbox } from 'antd';
import { useState } from 'react';
//import htmlContent from '../TermPolicy.html';

const Step1 = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(null);

  const onFinish = (values) => {
    console.log('Received values of form:', values);
    setFormData(values);
  };
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (checkedValues) => {
    setIsChecked(
      checkedValues.includes('remember') && checkedValues.includes('personal')
    );
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div className="text-center bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-500 mx-auto max-w-md ">
      <Form
        form={form}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
       
       <p className="text-sm text-gray-500 font-medium mb-2">Meneger Information</p>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <br/>
        <p className="text-sm text-gray-500 font-medium mb-2">information about your business:</p>
        <br/>
        <Form.Item
  label="Organization Name"
  name="organizationName"
  rules={[
    {
      required: true,
      message: 'Please input your organization name!',
    },
  ]}
>
  <Input />
</Form.Item>


<Form.Item
  label="Organization Zip/Postal Code"
  name="organizationZipCode"
  rules={[
    {
      required: true,
      message: 'Please input your organization zip/postal code!',
    },
  ]}
>
<Input />
      </Form.Item>
<Form.Item
  label="about your organization"
  name="about"
  rules={[
    {
      required: false,
      message: 'Please input your organization information',
    },
  ]}
>
 
<Input />
      </Form.Item>
      <Form.Item name={['remember', 'personal']} valuePropName="checked" >
        <Checkbox.Group onChange={handleCheckboxChange}>
          <Checkbox value="remember"> <a href="file:///C:/Users/lasa/Documents/lana/new/new/src/components/TermPolicy.html" target="_blank" rel="noopener noreferrer">
             agree  </a>Ito the terms and conditions</Checkbox>
          <Checkbox value="personal">I agree to check my personal information</Checkbox>
        </Checkbox.Group>
        </Form.Item>
        <Form.Item>
        <Button type="primary" htmlType="submit" className="w-full border-b-4 border-blue-500 text-black hover:bg-blue-500 hover:text-white" disabled={!isChecked}>
          Submit
        </Button>
        </Form.Item>
        </Form>
    </div>
  );
};


export default Step1;
