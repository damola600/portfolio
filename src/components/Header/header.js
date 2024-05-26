import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaPython, FaJava, FaNode, FaReact, FaAndroid } from 'react-icons/fa';
import { SiCsharp } from 'react-icons/si';
import { AiOutlineRollback } from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';
import { motion } from 'framer-motion';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap';
import 'react-pro-sidebar/dist/css/styles.css';
import './header.css';

const Header = () => {
    const [menuCollapse, setMenuCollapse] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('/projects.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((jsonData) => setData(jsonData))
            .catch((error) => console.error('Error fetching the JSON data:', error));
    }, []);

    const menuIconClick = () => {
        setMenuCollapse(!menuCollapse);
    };

    const extractProjectUrl = (title) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const urlMatch = title.match(urlRegex);
        return urlMatch ? urlMatch[0] : null;
    };

    const extractProjectTitle = (title) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const textWithoutURL = title.replace(urlRegex, '').trim();
        return textWithoutURL;
      };

    const handleCollapseToggle = (category) => {
        setActiveCategory((prevCategory) => (prevCategory === category ? null : category));
    };

    const projects = [
        { title: 'Python', Icon: FaPython, href: 'python' },
        { title: 'C#', Icon: SiCsharp, href: 'csharp' },
        { title: 'ReactJs', Icon: FaReact, href: 'react' },
        { title: 'NodeJs', Icon: FaNode, href: 'node' },
        { title: 'Java', Icon: FaJava, href: 'java' },
        { title: 'Android', Icon: FaAndroid, href: 'android' }
    ];

    return (
        <>
            <div id='projectSidebar'>
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className='logoText'>
                            {menuCollapse ? <GrProjects /> : 'Projects'}
                            <motion.div className='closemenu' onClick={menuIconClick} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                {menuCollapse ? <GiHamburgerMenu /> : <AiOutlineRollback />}
                            </motion.div>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape='circle'>
                            {projects.map((project) => {
                                const { title, href, Icon } = project;
                                return (
                                    <MenuItem
                                        key={title}
                                        icon={<Icon />}
                                        id={`${href}Menu`}
                                        data-bs-target={`#${href}`}
                                        role='button'
                                        aria-expanded={activeCategory === href}
                                        onClick={() => handleCollapseToggle(href)}
                                    >
                                        {title}
                                    </MenuItem>
                                );
                            })}
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </div>

            <div className='container'>
                {Object.keys(data).length > 0 ? (
                    Object.keys(data).map((category) => (
                        <div key={category} id={category} className={`${activeCategory === category ? 'appear' : 'hidden'} collapse show`} data-bs-parent={`#${category}Menu`}>
                            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                            {data[category].length > 0 ? (
                                data[category].map((project, index) => (
                                    <div key={index} className="project-item">
                                        {Object.entries(project).map(([titleUrl, descriptions]) => {
                                            const url = extractProjectUrl(titleUrl);
                                            const title = extractProjectTitle(titleUrl);
                                            return (
                                                <div key={title} className="project-details">
                                                    <h3>
                                                        <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
                                                    </h3>
                                                    <ul>
                                                        {descriptions.map((desc, idx) => (
                                                            <li key={idx}>{desc}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            );
                                        })}
                                    </div>
                                ))
                            ) : (
                                <div className="coming-soon">Coming Soon</div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="coming-soon">Coming Soon</div>
                )}
            </div>
        </>
    );
};

export default Header;
