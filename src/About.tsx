import './App.css';
import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import { Layout, Menu, Modal, Button, Row, Col, Typography, Avatar, Card } from 'antd';
import { HomeOutlined, CodeSandboxOutlined, UserOutlined } from '@ant-design/icons';
import portrait from './image/portrait.jpg'
import QueueAnim from 'rc-queue-anim';
import Meta from 'antd/lib/card/Meta';
import{ MailOutlined, GithubOutlined, LinkedinOutlined} from '@ant-design/icons/lib/icons/';



const { Title, Paragraph, Text, Link } = Typography;


const About = () => {
    return (
        <>
            <h1 className="main-title"><UserOutlined />ABOUT ME</h1>
            <Row gutter={[32, 8]} justify="center" style={{ backgroundColor: "#f3f3f3", borderRadius: 8, padding: '32px 3vw', marginBottom: 12 }}>
                <Col className="gutter-row" xs={24} md={16} >
                    <QueueAnim type={'left'} delay={300} duration={1000}>
                        <div key={'intro'}>
                            <Title level={2} className="second-title">It's Me</Title>
                            <Paragraph className="main-content-font">
                                I’m an international student from Shanghai, China, recently graduated from BCIT CIT (computer information technology) program.
                            </Paragraph>
                            <Paragraph className="main-content-font">
                                Currently I am looking for a position at front-end developer and full-stack developer.
                            </Paragraph>
                            <Paragraph className="main-content-font">
                                I am familiar with regular HTML5, CSS, JavaScript (ES6), framework like React, with library like Ant Design. Back-end wise, I have experience with Node.js, Python, and some Java.
                            </Paragraph>
                        
                            <Title level={2} className="second-title">RELEVANT SKILLS</Title>
                            <Title level={3} className="second-title" style={{marginTop:0}}>Front-end</Title>
                            <Paragraph className="main-content-font">
                                <ul>
                                    <li><Text strong>React</Text> web-application development</li>
                                    <li><Text strong>React Native</Text> mobile-application development</li>
                                    <li><Text strong>TypeScript and JavaScript</Text> programming</li>
                                    <li><Text strong>REST API</Text> integration</li>
                                    <li>Web development utilizing <Text strong>Node.js</Text> </li>
                                    
                                </ul>
                            </Paragraph>
                            <Title level={3} className="second-title">Back-end</Title>
                            <Paragraph className="main-content-font">
                                <ul>
                                    <li><Text strong>JavaScript Node.js</Text> and basic PHP runtime programming</li>
                                    <li><Text strong>Python</Text> OOP programming and data analysis</li>
                                    <li><Text strong>NGINX and Apache</Text>  server installation and configuration</li>
                                    <li><Text strong>MySQL and MongoDB</Text> setup and integration </li>
                                </ul>
                            </Paragraph>
                            <Title level={3} className="second-title">DevOps</Title>
                            <Paragraph className="main-content-font">
                                <ul>
                                    <li> Work in <Text strong>GIT</Text> version control with GitHub</li>
                                    <li>Infrastructure provisioning using <Text strong>Ansible and Vagrant</Text> on <Text strong>AWS</Text></li>
                                    <li><Text strong>Agile</Text>   software development principles and practices</li>
                                    <li><Text strong>MySQL and MongoDB</Text> setup and integration </li>
                                </ul>
                            </Paragraph>
                            <Title level={3} className="second-title">Other</Title>
                            <Paragraph className="main-content-font">
                                <ul>
                                    <li> Linux machine like <Text strong>CentOS and Ubuntu</Text> setup and operation </li>
                                    <li><Text strong>Figma</Text> UI/UX design</li>
                                    <li><Text strong>Agile</Text>   software development principles and practices</li>
                                    <li>Multiple <Text strong>VMs</Text> setup and network configuration </li>
                                </ul>
                            </Paragraph>
                        </div>

                    </QueueAnim>
                </Col>
                <Col className="gutter-row" xs={24} md={8} >
                    <QueueAnim delay={500} duration={1000}>
                        <div key={'card'}>
                            <Card cover={
                                <img
                                    alt="portrait"
                                    src={portrait}
                                />
                            }>
                                <Meta
                                    title="Hansheng Tao"
                                    description={<Paragraph><MailOutlined /> Email: hansheng.tao1023@gmail.com</Paragraph>
                                    }
                                />
                            <Button block href='https://github.com/HanshengT' target="_blank"><GithubOutlined />GITHUB</Button>
                            <Button block href='https://www.linkedin.com/in/hansheng-tao-6546a2203/' target="_blank"><LinkedinOutlined />LINKEDIN</Button>
                            </Card>
                        </div>

                    </QueueAnim>


                </Col>
            </Row>
        </>
    )
}

export default About;