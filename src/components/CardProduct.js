import { Button, Rate } from 'antd';
import { DataDummy } from "data/dataDummy";

import 'assets/style/CardProduct.scss';

const CardProduct = (props) => {
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

    return (
        <>
            {DataDummy.map((item) => (
                <div key={item.id} className="card">
                    <div className="img-card">
                        <img src={item.img} alt="im-card" />
                    </div>
                    <div className="info-card">
                        <div className="rate">
                            <Rate tooltips={desc} disabled value={item.rate} />
                            <p className="text-price">Rp {item.price}</p>
                        </div>
                        <div className="action-card">
                            <Button className="btn-detil">Detail</Button>
                            <Button className="btn-book">Booking</Button>
                        </div>
                    </div>
                </div>
            ))}
            {props.data.map((item, i) => (
                <div key={i} className="card">
                    <div className="img-card">
                        <img src={item.img} alt="im-card" />
                    </div>
                    <div className="info-card">
                        <div className="rate">
                            <Rate tooltips={desc} disabled value={item.rate} />
                            <p className="text-price">Rp {item.price}</p>
                        </div>
                        <div className="action-card">
                            <Button className="btn-detil">Detail</Button>
                            <Button className="btn-book">Booking</Button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CardProduct;