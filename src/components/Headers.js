import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Modal, Menu, Dropdown } from "antd";
import ModalRegister from './ModalRegister';
import ModalAddProduct from './ModalAddProduct';
import { ExclamationCircleOutlined, BarsOutlined } from '@ant-design/icons';

import '../assets/style/Headers.scss';
import '../assets/style/Variable.scss';

const HeaderApp = (props) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isVisiblePost, setIsVisiblePost] = useState(false)
    const history = useHistory()
    const [nav, setNav] = useState(false)
    const { confirm } = Modal
    const toWhatsapp = "https://wa.me/085731879004"
    const toAbout = "https://mbeauty2018.000webhostapp.com/"

    const showModal = () => {
        setIsVisible(true)
    }
    const closeModal = () => {
        setIsVisible(false)
    }
    const changeHeader = (value) => {
        setNav(value)
    }
    const closeModalReg = (value) => {
        setIsVisible(value)
    }

    const showModalPost = () => {
        setIsVisiblePost(true)
    }
    const closeModalPost = () => {
        setIsVisiblePost(false)
    }
    const closeModals = (value) => {
        setIsVisiblePost(value)
    }

    const showConfirm = () => {
        confirm({
            title: 'Apakah anda yakin?',
            icon: <ExclamationCircleOutlined />,
            content: '',
            async onOk() {
                history.replace("/")
            },
            onCancel() {
                console.log('Cancel')
            },
        })
    }

    const menu = () => {
        if (nav !== true) {
            return <Menu>
                <Menu.Item key="0">
                    <a href={toAbout}>About</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href={toWhatsapp}>Contact</a>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="#">Login</Link>
                </Menu.Item>
                <Menu.Item key="3" onClick={() => showModal()}>
                    Register
                </Menu.Item>
            </Menu>
        } else {
            return <Menu>
                <Menu.Item key="0" onClick={() => showModalPost()}>
                    Post Product
                </Menu.Item>
                <Menu.Item key="1" onClick={showConfirm}>
                    Logout
                </Menu.Item>
            </Menu>
        }
    }


    return (
        <>
            <header>
                <div className="containers disp">
                    <div className="header-title">
                        <h2>
                            BEAUTY &nbsp;
                            <span style={{ borderLeft: '1px solid' }}>&nbsp; Makeup Artist</span>
                        </h2>
                    </div>
                    {nav ?
                        <nav className="nav-menu">
                            <ul className="main-menu">
                                <li>
                                    <Button className="regis" onClick={() => showModalPost()}>Post Product</Button>
                                </li>
                                <li>
                                    <Button className="regis" onClick={showConfirm}>Logout</Button>
                                </li>
                            </ul>
                        </nav>
                        :
                        <nav className="nav-menu">
                            <ul className="main-menu">
                                <li>
                                    <a href={toAbout}>About</a>
                                </li>
                                <li>
                                    <a href={toWhatsapp}>Contact</a>
                                </li>
                                <li>
                                    <Link to="#">Login</Link>
                                </li>
                                <li>
                                    <Button className="regis" onClick={() => showModal()}>Register</Button>
                                </li>
                            </ul>
                        </nav>
                    }
                    <Dropdown className="dropdowns" overlay={menu} trigger={['click']}>
                        <h1 style={{ margin: '0', color: '#fff' }}>
                            <BarsOutlined />
                        </h1>
                    </Dropdown>
                </div>
            </header>
            <Modal
                title="Register"
                visible={isVisible}
                onCancel={closeModal}
                footer={[]}
            >
                <ModalRegister
                    change={changeHeader}
                    close={closeModalReg}
                />
            </Modal>
            <Modal
                title="Post Product"
                visible={isVisiblePost}
                onCancel={closeModalPost}
                footer={[]}
            >
                <ModalAddProduct
                    changeData={props.changeData}
                    close={closeModals}
                />
            </Modal>
        </>
    )
}

export default HeaderApp;