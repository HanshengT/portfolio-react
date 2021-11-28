import './App.css';
import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import { Layout, Menu, Modal, Button } from 'antd';
import { HomeOutlined, CodeSandboxOutlined, UserOutlined } from '@ant-design/icons';
import backgroundGIF from './image/home-background.gif'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

import NavBar from './component/NavBar';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import { url } from 'inspector';

const { Header, Content, Footer } = Layout;

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    setIsModalVisible(true)
  }, []);


  const handleOk = () => {
    setIsModalVisible(false);
  };
  



  return (
    <Router>
      
      <Layout className="layout" >
        <Header style={{padding: '0 0'}}>
          {/* <div className="logo" /> */}
          <NavBar />
        </Header>
        <Content className="page-content" style={{alignItems:"center", backgroundPosition:"center", backgroundSize: 'cover'}}>
          <div className="site-layout-content">
            <Switch>
              <Route path="/" exact><Home /></Route>
              <Route path="/about" exact><About /></Route>
              <Route path="/projects" exact><Projects /></Route>
            </Switch>
          </div>

        </Content>
        <Footer style={{ textAlign: 'center' }}>This portfolio was built with React in Typescript and deployed on AWS with Amplify.
          <br />Made by Hansheng Tao ©2021 </Footer>
      </Layout>
    </Router>
  );
}

export default App;
