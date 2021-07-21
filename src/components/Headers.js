import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from "antd";
import ModalRegister from './ModalRegister';
import ModalAddProduct from './ModalAddProduct';

import '../assets/style/Headers.scss';
import '../assets/style/Variable.scss';

const HeaderApp = (props) => {
    const [isVisible, setIsVisible] = useState(false)
    const [isVisiblePost, setIsVisiblePost] = useState(false)
    const [nav, setNav] = useState(false)
    const toWhatsapp = "https://wa.me/085731879004"

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
                                    <Button className="regis" onClick={() => console.log('')}>Logout</Button>
                                </li>
                            </ul>
                        </nav>
                        :
                        <nav className="nav-menu">
                            <ul className="main-menu">
                                <li>
                                    <Link to="/profile">About</Link>
                                </li>
                                <li>
                                    <a href={toWhatsapp}>Contact</a>
                                </li>
                                <li>
                                    <Link to="/profile">Login</Link>
                                </li>
                                <li>
                                    <Button className="regis" onClick={() => showModal()}>Register</Button>
                                </li>
                            </ul>
                        </nav>
                    }
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