import './App.css';
import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import { Layout, Menu, Modal, Button, Row, Col, Card } from 'antd';
import Project from './Project';

const style = { background: '#0092ff', padding: '16px 16px', border_radius: '5' };

const testData = [
    {
        projectTitle: "project1",
        projectDiscription: "This is the first project",
        projectDetailDiscription: "aaa"
    },
    {
        projectTitle: "project2",
        projectDiscription: "This is the second project",
        projectDetailDiscription: "aaa"
    },
    {
        projectTitle: "project3",
        projectDiscription: "This is the third project",
        projectDetailDiscription: "aaa"
    }
]

const Projects = () => {
    return (
        <div>

            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 4, sm: 8, md: 12, lg: 16 }]} justify="center">
                <Col className="gutter-row" span={20}>
                    <h1 className="main-title">Projects</h1>                    
                </Col>
                {testData.map((projectDetail) => {
                    return (
                        <Col className="gutter-row" span={10}>
                            <Project {...projectDetail} />
                        </Col>)

                })}

            </Row>
        </div>
    )
}

export default Projects;