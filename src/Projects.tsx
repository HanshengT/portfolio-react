import './App.css';
import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import { Layout, Menu, Modal, Button, Row, Col, Card } from 'antd';
import { HomeOutlined, CodeSandboxOutlined, UserOutlined } from '@ant-design/icons';


import Project from './component/Project';


const PROJECTS_DATA = [
    {
        projectTitle: "STUDY HARD - mobile game",
        projectDiscription: "\"Too late to do homework\" simulator",
        projectDetailDiscription: "This mobile game is develpoed using React Native framework with interesting graphic elements, also combined with google APIs for login and saving scores. User data is saved in firebase",
        projectLink:"https://expo.io/@hsthc/projects/studyhard",
        hasLink:true,
        coverImg:"study-hard.jpg",
        screenShorts: [
            "study-hard.jpg"
        ]
    },
    {
        projectTitle: "CASINO MANIA - web games",
        projectDiscription: "Online Casino (kind of games)",
        projectDetailDiscription: "This is a website with two games, offering sign up / login function with username & passward check and email validation, as well as a leaderboard. Using html, css, bootstrap, node.js, mongodb and heroku to lunch.",
        projectLink:"https://agile-project-team-three.herokuapp.com/",
        hasLink:true,
        coverImg:"casino.jpg",
        screenShorts: [
            "casino/casino-0.jpg",
            "casino/casino-1.jpg",
            "casino/casino-2.jpg",
            "casino/casino-3.jpg",
            "casino/casino-4.jpg",
            "casino/casino-5.jpg",
            "casino/casino-6.jpg",
            "casino/casino-7.jpg",
        ]
    },
    {
        projectTitle: "Personal Portfolio",
        projectDiscription: "Website About Me",
        projectDetailDiscription: "This portfolio was built with React framwork and enterprise-level design system Ant Design, in Typescript from start to finish, and deployed on AWS with Amplify.",
        projectLink:"",
        hasLink:false,
        coverImg:"portfolio.jpg",
        screenShorts: [
            "portfolio.jpg"
        ]
    },
    {
        projectTitle: "COMING SOON",
        projectDiscription: "This project is coming soon",
        projectDetailDiscription: "This is project is still developing and will be ready to display in near future",
        projectLink:"",
        hasLink:false,
        coverImg:"coming-soon.jpg",
        screenShorts: [
            "coming-soon.jpg"
        ]
    }
]

const Projects = () => {
    return (
        <>
            <h1 className="main-title"><CodeSandboxOutlined />PROJECTS</h1>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]} justify="center" style={{ backgroundColor: "#f3f3f3", borderRadius: 8, paddingTop: 48, paddingBottom: 48, marginBottom: 12 }}>

                {PROJECTS_DATA.map((projectInfo) => {
                    return (
                        <Col className="gutter-row" xs={22} sm={19} md={11} xxl={6}>
                            <Project {...projectInfo} />
                        </Col>)

                })}
            </Row>
        </>

    )
}

export default Projects;