import './App.css';
import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import { Layout, Menu, Modal, Button } from 'antd';
import { HomeOutlined, CodeSandboxOutlined, UserOutlined } from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavBar from './NavBar';
import About from './About';
import Home from './Home';
import Projects from './Projects';

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
      <Modal title="Welcome to My Portfolio"
        visible={isModalVisible}
        onOk={handleOk}
        footer={<Button key="ok" onClick={handleOk} type="primary">
          Ok
        </Button>}>
        <p>Some contents...</p>
      </Modal>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <NavBar />
        </Header>
        <Content style={{ padding: '0 64px' }}>
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
