import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    title: 'first step ',
    content: <Step1/>,
  },
  {
    title: 'second step',
    content: <Step2/>,
  },
  {
    title: 'review',
    content: <Step3/>,
  },
];

const BusinesReg = () => {
  const navigate=useNavigate();
  const handleAddTable=()=>{
    message.success('Processing complete!')
navigate('/home')
  }
    const [isNextButtonClicked, setIsNextButtonClicked] = useState(true);
    //validaccia gadasvkllaze
    const validate = () => {
        setIsNextButtonClicked(true);
        // code for navigating to the next page
      };
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    if (isNextButtonClicked){
    setCurrent(current + 1);}
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {

    lineHeight: '200px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,

  };
  const [valnext, setval] = useState(false);
  return (

    <div className="text-center bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-500 mx-auto px-2 sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
    <h1 className="text-3xl font-bold mb-4">Tell us about your restaurant business</h1>
    <p className="text-lg mb-8">A member of our team will reach out shortly to discuss your needs and if you’d like, give you a platform demo</p>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button  className="text-black border border-blue-500 bg-transparent hover:bg-blue-500 hover:text-white" type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button  className="text-black border border-blue-500 bg-transparent hover:bg-blue-500 hover:text-white" type="primary" onClick={handleAddTable}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
      </div>

  );
};
export default BusinesReg;