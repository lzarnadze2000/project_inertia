import { Button, Input, Row, DatePicker, Dropdown, Menu } from 'antd';
import React from 'react';
import moment from 'moment';
import Table from './table';

const { RangePicker } = DatePicker;

function Book() {
  const timeMenu = (
    <Menu>
      <Menu.Item key="9am">9:00 AM</Menu.Item>
      <Menu.Item key="12pm">12:30 PM</Menu.Item>
      <Menu.Item key="7pm">7:00 PM</Menu.Item>
    </Menu>
  );

  const locationMenu = (
    <Menu>
      <Menu.Item key="restaurantA">Restaurant A</Menu.Item>
      <Menu.Item key="restaurantB">Restaurant B</Menu.Item>
      <Menu.Item key="restaurantC">Restaurant C</Menu.Item>
    </Menu>
  );

  const partySizeMenu = (
    <Menu>
      <Menu.Item key="1">1</Menu.Item>
      <Menu.Item key="2">2</Menu.Item>
      <Menu.Item key="3">3</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className="text-center align-items-center pizza-cta">
        <p className="looking-for-pizza">Book a Table<i className="fas fa-chair pizza-slice"></i></p>
      </div>
      <div id="reservation-stuff" className="text-center align-items-center">
        <DatePicker
          required
          className="booking-dropdown"
          defaultValue={moment('2023-07-12', 'YYYY-MM-DD')}
        />
        <Dropdown overlay={timeMenu} className="booking-dropdown">
          <Button color="none" className="ant-dropdown-link" caret>
            Select a Time
          </Button>
        </Dropdown>
        <Dropdown overlay={locationMenu} className="booking-dropdown">
          <Button color="none" className="ant-dropdown-link" caret>
            Location
          </Button>
        </Dropdown>
        <Dropdown overlay={partySizeMenu} className="booking-dropdown">
          <Button color="none" className="ant-dropdown-link" caret>
            Party Size
          </Button>
        </Dropdown>
        <div className="tables-display">
          <p className="available-tables">5 available</p>
          <div>
            <div className="table-key">
              <span className="empty-table"></span> &nbsp; Available &nbsp;&nbsp;
              <span className="full-table"></span> &nbsp; Unavailable &nbsp;&nbsp;
            </div>
            <div className="table-container">
              <div className="table">Table 1</div>
              <div className="table">Table 2</div>
              <div className="table">Table 3</div>
            </div>
          </div>
        </div>
      </div>
      <div id="confirm-reservation-stuff" className="text-center justify-content-center reservation-details-container">
        <Input type="text" size="large" placeholder="Name" className="reservation-input" defaultValue="John Doe" />
        <Input
          type="text"
          size="large"
          placeholder="Phone Number"
          className="reservation-input"
          defaultValue="123-456-7890"
        />
        <Input
          type="text"
          size="large"
          placeholder="Email"
          className="reservation-input"
          defaultValue="johndoe@example.com"
        />
        <Button type="text" className="book-table-btn">
          Book Now
        </Button>
      </div>
    </div>
  );
}

export default Book;
