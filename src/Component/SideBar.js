import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Menus } from '../Lib/Datas';
import '../Lib/Main.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState({});

  const toggleDropdown = (menu) => {
    setIsOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const menuItems = Menus

  console.log(menuItems);

  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <div className="sidebar-brand">
          <img src="https://placehold.co/50" alt="..." />
        </div>
        {menuItems.map((menu, index) => (
          <div key={index}>
            <Nav.Item>
              <Nav.Link
                href={menu.items.length > 0 ? 'javascript:void(0)' : `${menu.title.toLowerCase()}`}
                className="sidebar-link"
                onClick={() => menu.items.length > 0 && toggleDropdown(menu.title)}
              >
                {menu.icon}
                <span>{menu.title}</span>
                {menu.items.length > 0 && (
                  <i className={`fas fa-chevron-${isOpen[menu.title] ? 'up' : 'down'} dropdown-icon`}></i>
                )}
              </Nav.Link>
            </Nav.Item>
            {menu.items.length > 0 && isOpen[menu.title] && (
              <Nav className="flex-column sub-menu">
                {menu.items.map((item, idx) => (
                  <Nav.Link href={`${item.toLowerCase().replaceAll(' ','_')}`} key={idx} className="sidebar-sublink">
                    - {item}
                  </Nav.Link>
                ))}
              </Nav>
            )}
          </div>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;
