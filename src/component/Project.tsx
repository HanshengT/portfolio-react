import '../App.css';
import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import { Layout, Menu, Modal, Button, Card, Row, Col, Image } from 'antd';
import Meta from 'antd/lib/card/Meta';



type projectDetailProps = {
    projectTitle: string,
    projectDiscription: string,
    projectDetailDiscription: string,
    projectLink: string,
    hasLink: boolean,
    coverImg: string,
    screenShorts: Array<String>
};



const Project = ({ projectTitle, projectDiscription, projectDetailDiscription, projectLink, hasLink, coverImg, screenShorts }: projectDetailProps) => {

    const [visible, setVisible] = useState(false);

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
                style={{ borderRadius: 8 }}
                cover={<img alt="cover" src={require(`../image/${coverImg}`).default} style={{ height: 'auto', width: '100%', borderRadius: '8px 8px 0 0' }} />}
                onClick={showModal}
            >
                <Meta title={projectTitle} description={projectDiscription} />
            </Card>
            <Modal className="project-modal" title={projectTitle} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={'70vw'}>
                <Row gutter={[16, 8]} justify="center">
                    <Col xs={24} lg={16} >
                        <Image
                            preview={{ visible: false }}
                            width={'100%'}
                            src={require(`../image/${coverImg}`).default}
                            onClick={() => setVisible(true)}
                            style={{ height: 'auto' }}
                        />
                        <div style={{ display: 'none' }}>
                            <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                                {screenShorts.map((screenShort) => {
                                    return (
                                        <Image src={require(`../image/${screenShort}`).default} />
                                    )
                                })}
                            </Image.PreviewGroup>
                        </div>
                    </Col>
                    <Col xs={24} lg={8} >
                        <p className="main-content-font">{projectDetailDiscription}</p>
                        {hasLink ? <Button type='primary' href={projectLink} target="_blank">Take a look</Button> : <br />}
                    </Col>
                </Row>


            </Modal>
        </>
    );
}

export default Project;