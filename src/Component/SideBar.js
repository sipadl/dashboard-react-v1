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
        <div className="mx-4">
          <div className="d-flex justify-content-between">
          <h6>Main Menu</h6>
          <i size={30} className='bx bx-chevrons-left mx-1' ></i>
          </div>
        <hr className="" />
        </div>
        <div className='mx-4'>
        {menuItems.map((menu, index) => (
          <div key={index}>
            {index == 0 ? 
            <Nav.Item>
              <Nav.Link
                href={menu.items.length > 0 ? 'javascript:void(0)' : `${menu.title.toLowerCase()}`}
                className="sidebar-link active"
                onClick={() => menu.items.length > 0 && toggleDropdown(menu.title)}
              >
                {menu.icon}
                <span>{menu.title}</span>
                {menu.items.length > 0 && (
                  <i className={`fas fa-chevron-${isOpen[menu.title] ? 'up' : 'down'} dropdown-icon`}></i>
                )}
              </Nav.Link>
            </Nav.Item>
            : 
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
          }
            
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
        </div>
      </Nav>
    </div>
  );
};

export default Sidebar;
