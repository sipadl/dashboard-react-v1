import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import ico from '../assets/autopay.png';
import { Menus } from '../Lib/Datas';
import '../Lib/Main.css';

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const location = window.location;

    useEffect(() => {
        const currentPath = location.pathname;
        const currentMenu = currentPath.split('/')[1];
        setActiveMenu(currentMenu);
    }, [location.pathname]);

    const handleMenuClick = (menu) => {
        if (menu.items.length > 0) {
            setActiveMenu((prevMenu) =>
                prevMenu === menu.title.toLowerCase() ? null : menu.title.toLowerCase()
            );
        } else {
            setActiveMenu(menu.title.toLowerCase());
        }
    };

    const menuItems = Menus;

    return (
        <div className="sidebar">
            <Nav className="flex-column">
                <div className="sidebar-brand">
                    <img className="w-75" src={ico} alt="Logo" />
                </div>
                <div className="mx-4">
                    <div className="d-flex justify-content-between">
                        <div className="menu-button">Main Menu</div>
                        <i size={30} className='bx bx-chevrons-left mx-1'></i>
                    </div>
                    <hr />
                </div>
                <div className='mx-4'>
                    {menuItems.map((menu, index) => (
                        <div key={index}>
                            <Nav.Item>
                                <Nav.Link
                                    href={menu.items.length > 0
                                        ? 'javascript:void(0)'
                                        : `/${menu.title.toLowerCase().replaceAll(' ','_')}`}
                                    className={`sidebar-link nav-link ${activeMenu === menu.title.toLowerCase() ? 'clicked' : ''}`}
                                    onClick={() => handleMenuClick(menu)}
                                >
                                    {menu.icon}
                                    <span>{menu.title}</span>
                                    {menu.items.length > 0 && (
                                        <i
                                            className={`fas fa-chevron-${activeMenu === menu.title.toLowerCase() ? 'up' : 'down'} dropdown-icon`}
                                        ></i>
                                    )}
                                </Nav.Link>
                            </Nav.Item>
                            {menu.items.length > 0 && (
                                <Nav className={`flex-column sub-menu ${activeMenu === menu.title.toLowerCase() ? 'active' : ''}`}>
                                    {menu.items.map((item, idx) => (
                                        <Nav.Link
                                            href={`/${menu.title.toLowerCase().replaceAll(' ','_')}/${item.toLowerCase().replaceAll(' ', '_')}`}
                                            key={idx}
                                            className={`sidebar-sublink ${activeMenu === menu.title.toLowerCase() ? 'active' : ''}`}
                                        >
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
