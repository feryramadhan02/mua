import { Form, Input, Button } from "antd";
import { useState } from "react";
import Swal from "sweetalert2";

import 'assets/style/ModalRegister.scss';

const ModalAddProduct = (props) => {
    const [form] = Form.useForm();
    const [upload, setUpload] = useState([])

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 25,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 0,
            span: 0,
        },
    };

    const onChangeImage = e => {
        setUpload(
            e.target.files
        )
    }

    const onFinish = async (values) => {
        let data = { ...values, upload }
        if (values.rate > 5) {
            Swal.fire({
                icon: 'error',
                text: 'Rate maximal 5'
            })
        } else {
            await Swal.fire({
                icon: 'success',
                text: 'Berhasil Tambah Product'
            })
            await props.changeData(data)
            props.close(false)
            form.resetFields();
        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="price"
                    rules={[
                        {
                            required: true,
                            message: "Masukkan nama anda!",
                        },
                    ]}
                >
                    <Input placeholder="Harga" />
                </Form.Item>

                <Form.Item
                    name="rate"
                    rules={[
                        {
                            required: true,
                            message: "Masukkan email anda!",
                        },
                    ]}
                >
                    <Input placeholder="Rating" />
                </Form.Item>

                <Form.Item
                    name="img"
                    rules={[
                        {
                            required: true,
                            message: "Masukkan gambar anda!",
                        },
                    ]}
                >
                    <Input style={{ border: 'none', padding: '0' }} type="file" onChange={onChangeImage} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button
                        style={{ width: "100%", marginBottom: "10px" }}
                        className="btn-register"
                        type="primary"
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                    <Button
                        style={{ width: "100%" }}
                        className="btn-cancel-register"
                        type="secondary"
                        htmlType="button"
                    >
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default ModalAddProduct;