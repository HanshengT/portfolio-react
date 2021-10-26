import './App.css';
import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import { Layout, Menu, Modal, Button, Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

const style = { border_radius: '5px' };

type projectDetailProps = {
    projectTitle: string,
    projectDiscription: string,
    projectDetailDiscription: string
};



const Project = ({projectTitle, projectDiscription, projectDetailDiscription}: projectDetailProps) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            {/* <Button onClick={showModal}>test 2</Button> */}
            <Card
                hoverable
                style={{borderRadius: 10}}
                cover={<img alt="example" src="https://reactjs.org/logo-og.png" />}
                onClick={showModal}
            >
                <Meta title={projectTitle} description={projectTitle} />
            </Card>
            <Modal title={projectDetailDiscription} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>{projectDiscription}</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
}

export default Project;