import { FacebookOutlined, InstagramOutlined, TwitterOutlined, GlobalOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import '../assets/style/Variable.scss';
import 'assets/style/Footers.scss';

const FooterApp = () => {
    return (
        <>
            <footer>
                <div className="containers">
                    <div className="main-footer">
                        <div className="footer-description">
                            <ul className="list-options">
                                <li>
                                    <h3 className="options">Options More</h3>
                                </li>
                                <li>
                                    <Link to="#">Best Seller</Link>
                                </li>
                                <li>
                                    <Link to="#">Help</Link>
                                </li>
                                <li>
                                    <Link to="#">Privacy & Policy</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-description">
                            <ul className="list-options">
                                <li>
                                    <h3 className="options">Bussines Information</h3>
                                </li>
                                <li>
                                    <Link to="#">Scala Company</Link>
                                </li>
                                <li>
                                    <Link to="#">Profit</Link>
                                </li>
                                <li>
                                    <Link to="#">Our Client</Link>
                                </li>
                                <li>
                                    <Link to="#">Our Partner</Link>
                                </li>
                                <li>
                                    <Link to="#">Career</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-social-media">
                            <h3 className="title-sosmed">Social Media</h3>
                            <ul className="list-sosmed">
                                <li>
                                    <Link to="#"><FacebookOutlined style={{ color: '#283be6' }} /></Link>
                                </li>
                                <li>
                                    <Link to="#"><InstagramOutlined style={{ color: '#b62ed8' }} /></Link>
                                </li>
                                <li>
                                    <Link to="#"><TwitterOutlined style={{ color: '#3593e0' }} /></Link>
                                </li>
                                <li>
                                    <Link to="#"><GlobalOutlined style={{ color: '#cfcfcf' }} /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright-footer">
                        <p>&copy;Copyright BEAUTY Makeup Artist 2021</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterApp;