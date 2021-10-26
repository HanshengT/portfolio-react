import './App.css';
import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import { Layout, Menu, Modal, Button } from 'antd';
import { HomeOutlined, CodeSandboxOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
      <Menu.Item key='home' icon={<HomeOutlined />}><Link to="/">Home</Link></Menu.Item>
      <Menu.Item key='aboutMe' icon={<UserOutlined />}><Link to="/about">About me</Link></Menu.Item>
      <Menu.Item key='project' icon={<CodeSandboxOutlined />}><Link to="/projects">Projects</Link></Menu.Item>
    </Menu>
  )
}

export default NavBar;
