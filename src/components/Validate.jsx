import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu ,Radio} from 'antd';
import{TbDisabled} from 'react-icons/tb'
import {MdOutlinePets} from 'react-icons/md'
import { useState } from 'react';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('others', 'validate',null, [
    getItem('PWD person', '1',<TbDisabled/>),
    getItem('Pet Friendly', '2',<MdOutlinePets/>)
   
  ]),
];


const Validate = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return(
  
  <Menu
  className='rounded-full'
   onClick={onClick  }
    style={{
      width: 125,
      height:35,
      textAlign:'center'
    
    }}
    mode="horizontal"
    items={items}
  />
)};
export default Validate;