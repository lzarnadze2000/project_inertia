import React, { useState, useEffect } from 'react';

function Contacts() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  async function getMenuItems() {
    const response = await fetch('http://localhost:8080/Category/getCategories');
    const data = await response.json();
    setMenuItems(data);
  }

  useEffect(() => {
    getMenuItems();
  }, []);

  function handleMenuOpen() {
    setMenuOpen(true);
  }

  function handleMenuClose() {
    setMenuOpen(false);
  }

  return (
    <div>
      <button onClick={handleMenuOpen}>Open Menu</button>
      {menuOpen && (
        <div>
          {menuItems.map((item) => (
            <a key={item.id} href={item.url}>
              {item.name}
            </a>
          ))}
          <button onClick={handleMenuClose}>Close Menu</button>
        </div>
      )}
    </div>
  );
}

export default Contacts;
