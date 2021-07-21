import { Button, Carousel, Input, Pagination } from "antd";
import CardProduct from "components/CardProduct";

import 'assets/style/Home.scss';
import 'assets/style/Variable.scss';

const HomePage = (props) => {
    const { Search } = Input;

    const toWhatsapp = "https://wa.me/085731879004"

    const onSearch = (value) => { console.log(value); }

    return (
        <>
            <section className="top-carousell">
                <Carousel autoplay effect="fade">
                    <div className="carousell-img">
                        <img src="https://newskillsacademy.co.uk/assets/cdn/media/2021-05/makeup-artist-diploma-course-4a6ca21adc51e5cda0183d8b7dc552f7.jpeg" alt="im-1" />
                    </div>
                    <div className="carousell-img">
                        <img src="https://images.f2fcdn.net/files/Makeup/careerwaymark.com%20makeup-artist-career.jpg" alt="img-2" />
                    </div>
                    <div className="carousell-img">
                        <img src="https://www.qcmakeupacademy.com/wp-content/uploads/2015/07/Copy-of-Makeup-Header-Image-Black-Overlay-Template-31.jpg" alt="im-3" />
                    </div>
                    <div className="carousell-img">
                        <img src="https://static.wixstatic.com/media/0e2b04_ecd13c781d424fc48fc1665963ba3708~mv2.png/v1/fill/w_1258,h_683,al_c,q_90/0e2b04_ecd13c781d424fc48fc1665963ba3708~mv2.webp" alt="im-1" />
                    </div>
                </Carousel>
                <div className="overlay">
                    <div className="title">
                        <h1 className="name">BEAUTY MAKEUP</h1>
                        <p className="name-desc">Make your style elegant, artistic and attractive to look at. <br />
                            Many have proven it, do you also want to join us?
                        </p>
                        <a href={toWhatsapp}>
                            <Button size="large" className="btn-contact-us">Contact Us</Button>
                        </a>
                    </div>
                </div>
            </section>
            <section className="product">
                <div className="containers head-product">
                    <h1>Our Client Product</h1>
                    <div className="searching">
                        <Search placeholder="Search Product" onSearch={onSearch} enterButton />
                    </div>
                </div>
                <div className="containers card-wrapper">
                    <CardProduct data={props.data} />
                </div>
                <Pagination size="small" style={{ marginTop: '10px' }} total={50} />
            </section>
            <section className="promo-title">
                <div className="containers">
                    <div className="base-promo">
                        <h1 className="comeon">Come Find Your Best Makeup Here!</h1>
                        <Button className="btn-join">Come Join</Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage;