import '../App.css';
import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import { Layout, Menu, Modal, Button } from 'antd';
import { HomeOutlined, CodeSandboxOutlined, UserOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import SubMenu from 'antd/lib/menu/SubMenu';



const NavBar = () => {
  return (
    <>
      <Menu className="desktop-navbar" theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
        <Menu.Item key='home' icon={<HomeOutlined />}><Link to="/">HOME</Link></Menu.Item>
        <Menu.Item key='aboutMe' icon={<UserOutlined />}><Link to="/about">ABOUT ME</Link></Menu.Item>
        <Menu.Item key='project' icon={<CodeSandboxOutlined />}><Link to="/projects">PROJECTS</Link></Menu.Item>
      </Menu>
      <Menu className="mobile-navbar" theme="dark" mode="horizontal" defaultSelectedKeys={['home']} >
        <SubMenu key="subMenu" icon={<MenuOutlined />} >
          <Menu.Item key='home' icon={<HomeOutlined />}><Link to="/">HOME</Link></Menu.Item>
          <Menu.Item key='aboutMe' icon={<UserOutlined />}><Link to="/about">ABOUT ME</Link></Menu.Item>
          <Menu.Item key='project' icon={<CodeSandboxOutlined />}><Link to="/projects">PROJECTS</Link></Menu.Item>
        </SubMenu>
      </Menu>
    </>
  )
}

export default NavBar;
