import { SearchOutlined } from '@mui/icons-material'
import { ConfigProvider, DatePicker, Input, Select, Switch } from 'antd'
import React, { useEffect, useState } from 'react'
import { Category } from '../Data/Organizations';


function SideBar() {
  const [categories,setcategories]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
       
                
        function transform(data){
          const options=data.map(function(row){
            return {}
          })
        }
     
    };

    fetchData();
  }, []);
  return (
<div
className={`h-[1100px] w-[250px] rounded-r-[10px] bg-[#B56A85] drop-shadow-lg `}>
       <div
className={`p-5 font-inter inline-flex h-[1500px] w-[200px] flex-col items-start gap-5 text-left `}>
       
       <p
className={`font-inter inline h-[19px] w-[86px] text-left text-base font-semibold text-white`}
>
Categories
</p>
<ConfigProvider
    theme={{
      token: {
        colorPrimary: 'rgb(232, 14, 94)',
      },
    }}
  >
<Select
    showSearch
    style={{ width: 150 }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'All',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]} />
       
     
  </ConfigProvider>
<p
className={`font-inter inline h-[19px] w-[45px] text-left text-base font-semibold text-white `}
>
Name
</p>
<ConfigProvider
    theme={{
      token: {
        colorPrimary: 'rgb(232, 14, 94)',
      },
    }}
  >
<Input placeholder="Name" />
</ConfigProvider>
<p
className={`font-inter inline h-[19px] w-8 text-left text-base font-semibold text-white`}
>
City
</p>
<ConfigProvider
    theme={{
      token: {
        colorPrimary: 'rgb(232, 14, 94)',
      },
    }}
  >
<Select
    showSearch
    style={{ width: 150 }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'All',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]} />
</ConfigProvider>
<p
className={`font-inter inline h-[19px] w-[93px] text-left text-base font-semibold text-white `}
>
Age Control
</p>
<ConfigProvider
    theme={{
      token: {
        colorPrimary: 'rgb(232,14,94)',
      },
    }}
  >
   
    <Switch  />
  </ConfigProvider>

  <p
className={`font-inter inline h-[19px] w-[93px] text-left text-base font-semibold text-white `}
>
Pet Friendly
</p>
<ConfigProvider
    theme={{
      token: {
        colorPrimary: 'rgb(232,14,94)',
      },
    }}
  >
   
    <Switch  />
  </ConfigProvider>

  <p
className={`font-inter inline h-[19px] w-[130px] text-left text-base font-semibold text-white `}
>
PWD Adapted
</p>
<ConfigProvider
    theme={{
      token: {
        colorPrimary: 'rgb(232,14,94)',
      },
    }}
  >
   
    <Switch  />
  </ConfigProvider>

  <p
className={`font-inter inline h-[19px] w-[93px] text-left text-base font-semibold text-white `}
>
Date of Visit
</p>

<ConfigProvider
    theme={{
      token: {
        colorPrimary: 'rgb(232, 14, 94)',
      },
    }}
  >
<DatePicker  />
</ConfigProvider>


<p
className={`font-inter inline h-[40px] w-[80px] text-left text-base font-semibold text-white `}
>
Number of Visit
</p>
<ConfigProvider
    theme={{
      token: {
        colorPrimary: 'rgb(232, 14, 94)',
      },
    }}
  >
<Input placeholder="visitiors" type='number'/>
</ConfigProvider>

<p
className={`font-inter inline h-[19px] w-[130px] text-left text-base font-semibold text-white `}
>
Open 24/7
</p>
<ConfigProvider
    theme={{
      token: {
        colorPrimary: 'rgb(232,14,94)',
      },
    }}
  >
   
    <Switch  />
  </ConfigProvider>


  <p
className={`font-inter inline h-[19px] w-[130px] text-left text-base font-semibold text-white `}
>
Open Now
</p>
<ConfigProvider
    theme={{
      token: {
        colorPrimary: 'rgb(232,14,94)',
      },
    }}
  >
   
    <Switch  />
  </ConfigProvider>

  <div className="className={`h-10 w-2 rounded-[10px] bg-[#7D3B52]`">
      <Input
      
        placeholder="Search..."
        prefix={<SearchOutlined />}
        className="w-40"
      />
    </div>
               </div>
    </div>

    
  )
}

export default SideBar