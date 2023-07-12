import { Select } from 'antd';
import { useState } from 'react';

const options = [
  'Restaurant',
  'Cafe',
  'Movie Theater',
  'Bowling Alley',
  'Art Gallery',
  'Library',
  'Park or Yard',
  'Sport Court or Field',
  'Night Club',
  'Out',
  'Community Pool',
  'Beach',
  'Lake',
  'River',
  'Billiard',
  'Bar',
];

export let selectedCategories = []; // Declare the variable at the module level

const CatSelection = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleChange = (value) => {
    setSelectedCategories(value);
  };

  return (
    <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      value={selectedCategories}
      onChange={handleChange}
    >
      {options.map((option) => (
        <Select.Option key={option} value={option}>
          {option}
        </Select.Option>
      ))}
    </Select>
  );
};

export default CatSelection;
